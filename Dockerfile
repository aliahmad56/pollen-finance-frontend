FROM node:20

WORKDIR /app

COPY package*.json ./

COPY .env .

COPY . .

RUN npm install --legacy-peer-deps

RUN npm run build

EXPOSE 4001

CMD ["npm", "start"]
