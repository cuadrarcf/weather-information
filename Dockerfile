# Use base node 8 image from Docker hub
FROM node:12-slim

WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the application csource code
COPY . .

# Build React App
RUN npm run build

# Debugging option
#ENTRYPOINT ["node", "--inspect=9229", "src/index.js"]

EXPOSE 5000
CMD ["npm", "run", "serve"]
