FROM node:18-alpine

WORKDIR /react-app/

COPY . /react-app/

RUN npm install

CMD ["npm", "start"]
