FROM node:alpine3.15
RUN npm install -g nodemon
WORKDIR /app
COPY package.json .
RUN npm install

COPY . .

ENTRYPOINT [ "nodemon", "index.js" ]

