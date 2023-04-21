# Use node image as base image
FROM node:16.15.0-bullseye-slim

# Set the working directory in the image
WORKDIR /app

# Copy all files to the image
COPY . .

# Install the npm dependencies
RUN npm ci

# Expose port 3000 to the host
EXPOSE 3000

# Set command to run when container starts
ENTRYPOINT [ "npm", "start" ]
