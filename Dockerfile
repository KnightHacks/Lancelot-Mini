FROM node:18 AS build-env
COPY . /bot
WORKDIR /bot
RUN npm ci
RUN npm run build

FROM gcr.io/distroless/nodejs18-debian11:latest
COPY --from=build-env /bot /bot
WORKDIR /bot
CMD ["./dist/index.js"]