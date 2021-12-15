FROM node:16.13.0

ARG BASE_DIR="/"

WORKDIR /app

COPY ${BASE_DIR}/package*.json ./
COPY ${BASE_DIR}/yarn*.lock ./

RUN yarn install 

COPY ${BASE_DIR}/. .

RUN yarn build
EXPOSE 80
CMD [ "yarn", "start" ]