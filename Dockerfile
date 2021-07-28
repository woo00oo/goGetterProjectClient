FROM node:12

COPY package.json ./

RUN npm install

CMD ["npm", "run", "dev"]