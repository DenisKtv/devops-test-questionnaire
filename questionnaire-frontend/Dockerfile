FROM node:12-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps && npm install sass --save-dev

COPY . .

# RUN npm run build --prod

RUN npm run build:prod

FROM nginx:alpine

COPY --from=builder /app/dist/questionnaire-frontend /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]