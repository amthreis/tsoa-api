FROM node:22.3.0 AS base

WORKDIR /src

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:22.3.0 AS final

WORKDIR /app

ARG PORT=14005
ENV PORT=${PORT}
EXPOSE ${PORT}

COPY package*.json .

RUN npm ci --omit=dev

COPY --from=base /src/dist .

ENTRYPOINT node index.js