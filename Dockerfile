FROM node:lts

COPY . ./app
WORKDIR /app

RUN npm install --production

CMD ["npm", "start"]