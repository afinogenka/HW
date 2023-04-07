FROM node:15
WORKDIR /app
COPY package.json /app/
RUN npm install
EXPOSE 8080
COPY . .
CMD [ "node", "app.js" ]
