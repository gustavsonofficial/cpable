# Step 1: Use a Node.js image to build the React app
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Use a base image to install Dynatrace OneAgent and serve the app
FROM nginx:alpine

# Install curl for downloading Dynatrace OneAgent
RUN apk add --no-cache curl

# Set environment variables for Dynatrace OneAgent
ENV ONEAGENT_INSTALLER_SCRIPT_URL="$_ONEAGENT_INSTALLER_SCRIPT_URL"
ENV ONEAGENT_INSTALLER_DOWNLOAD_TOKEN="$_ONEAGENT_INSTALLER_DOWNLOAD_TOKEN"

# Download and install Dynatrace OneAgent
RUN curl -o Dynatrace-OneAgent.sh "$ONEAGENT_INSTALLER_SCRIPT_URL" && \
    chmod +x Dynatrace-OneAgent.sh && \
    ./Dynatrace-OneAgent.sh APP_LOG_CONTENT_ACCESS=1 && \
    rm Dynatrace-OneAgent.sh

# Copy the built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]