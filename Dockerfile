# Use the official Node.js image as the base image
FROM node:20

# Set the working directory to /app
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install the dependencies
RUN pnpm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN pnpm build

# Set the environment variable to production
ENV NODE_ENV=production

# Start the application
CMD ["pnpm", "start"]