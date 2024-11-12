# Stage 1: Build stage
FROM node:18 AS build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to take advantage of Docker cache
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy application source code
COPY . .

# Stage 2: Production image
FROM node:18-slim

WORKDIR /usr/src/app

# Copy built app and node_modules from the build stage
COPY --from=build /usr/src/app /usr/src/app

# Install production dependencies only
RUN npm install --production

EXPOSE 3000


# Run the app
CMD ["node", "index.js"]
