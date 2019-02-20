FROM node:alpine

LABEL maintainer="mzr@certi.org.br"

ENV ROOT /certi/sw
WORKDIR $ROOT

COPY ["./src/package.json", "./src/yarn.lock", "./"]
RUN yarn install && \
    yarn cache clean

COPY ./src ./
