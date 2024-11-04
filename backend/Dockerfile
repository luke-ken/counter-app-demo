FROM node:20.15.1-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9001 9002
CMD ["node", "./bin/www"]
