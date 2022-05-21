FROM node:16.15.0
RUN mkdir - /opt/app
WORKDIR /opt/app
RUN npm install nodemon -g
RUN npm install typescript -g
RUN npm install ts-node -g
RUN npm install jest -g
COPY . .
RUN npm install
EXPOSE 8000
RUN npm run build
#CMD ["npm","run", "start"]
CMD ["nodemon", "dist/server.js"] 