FROM node:13.10.1-alpine3.11

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]