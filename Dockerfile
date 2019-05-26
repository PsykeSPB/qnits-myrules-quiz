FROM node:lts-alpine

VOLUME [ "/home/node/app" ]
WORKDIR /home/node/app

RUN apk add --no-cache libc6-compat python make g++
RUN npm install -g @vue/cli

EXPOSE 8080
