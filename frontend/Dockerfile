# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the dev server port
EXPOSE 5173

# Start the Vite dev server
CMD ["npm", "run", "start"]
