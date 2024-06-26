FROM node:latest

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 8090

CMD ["node", "index.js"]
