FROM node:16.19.1-alpine As build

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app
RUN npm install --legacy-peer-deps
RUN 
COPY . /app

RUN npm run build --prod



FROM nginx:1.15.8-alpine
COPY --from=build /app/dist/foodmine-course /usr/share/nginx/html

