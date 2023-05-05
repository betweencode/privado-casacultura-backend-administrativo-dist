FROM node:14.18 as despliegue
WORKDIR /despliegue
COPY package.json ./
RUN npm install --only=production
COPY ./dist/ ./dist/
CMD npm run start:prod