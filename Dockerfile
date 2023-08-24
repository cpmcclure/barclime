FROM balenalib/raspberry-pi-node

COPY . ./app
WORKDIR /app
RUN apt-get update
RUN apt-get install python3
RUN apt-get install make
RUN apt-get install build-essential
RUN npm install --production

CMD ["npm", "start"]