FROM node:14-alpine3.14 as node

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
COPY ./yarn.lock /app/
RUN yarn install --silent
COPY . /app
RUN yarn build

# Serve the application through NGINX
FROM nginx:1.20-alpine
# Override the default.conf with ours 
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/build /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]