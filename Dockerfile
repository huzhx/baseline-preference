FROM node:lts-alpine as builder

ENV ENV=prod

WORKDIR /app

COPY package.json package-lock*.json ./

RUN npm install && npm cache clean --force

COPY . .

RUN mkdir -pv ./build

RUN npm run build

RUN ls -l ./build

FROM nginx:stable

EXPOSE 3000

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html