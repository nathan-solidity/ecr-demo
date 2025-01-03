FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install

#bundle app

COPY . ./

EXPOSE 8080 

CMD ["npm", "start"]
