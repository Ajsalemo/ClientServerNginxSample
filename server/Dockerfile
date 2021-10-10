FROM node:14-alpine3.14 as node

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app
COPY ./yarn.lock /app/

RUN yarn install --silent && \
    yarn global add pm2

COPY . /app

EXPOSE 3000
CMD ["pm2", "start", "/app/server.js", "-i", "0", "--no-daemon"]