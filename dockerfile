# Use node image as base image
FROM node:16.15.0-bullseye-slim
 
# Installing git
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git

# Set the working directory in the image
WORKDIR /app

# Copy all files to the image
RUN git clone https://github.com/evanlueber/schadenabdeckungsrechner .

# Install the npm dependencies
RUN npm ci

# Expose port 3000 to the host
EXPOSE 3000

# Set command to run when container starts
ENTRYPOINT [ "npm", "start" ]
