# Use official Node image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose API port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
