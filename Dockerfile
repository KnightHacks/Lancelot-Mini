FROM gcr.io/distroless/nodejs18-debian11:latest AS build-env

COPY . ./

RUN npm i
RUN npm run start-prod