FROM node:20
LABEL authors="sungwon"
WORKDIR /app
COPY package.json .

RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
