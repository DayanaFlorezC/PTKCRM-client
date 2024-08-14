# Build stage
FROM node:16 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Debugging step to check if dist directory exists
RUN ls -la /app/dist

# Production stage
FROM nginx:alpine

# Copy built files from the build stage to the Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 5173
EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
