FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN cp src/environments/environment.prod.ts src/environments/environment.ts

RUN npm run build

WORKDIR /app/dist

EXPOSE 3000

CMD ["node", "index.js"]
