FROM node:14.21.2-slim AS REACT

WORKDIR /app

COPY ui/package.json ui/package-lock.json ./

RUN npm install

COPY ui/ ./

RUN npm run build

FROM node:14.21.2-slim AS PRODUCTION

WORKDIR /app

COPY api/package.json api/package-lock.json ./

RUN npm install

COPY api/ ./

COPY --from=REACT /app/build ./public

CMD [ "node", "index.js" ]