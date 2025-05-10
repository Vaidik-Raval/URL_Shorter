# Use official Node.js image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files to the container
COPY . .

# Install nodemon globally
RUN npm install -g nodemon

# Expose the port your app runs on
EXPOSE 3000

# Use nodemon for hot reloading
CMD ["nodemon", "server.js"]
