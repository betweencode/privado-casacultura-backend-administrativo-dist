FROM node:18.12.0 as despliegue
WORKDIR /despliegue
COPY package.json ./
RUN npm install --only=production
COPY ./dist/ ./dist/
COPY ./views/ ./views/
COPY ./public/ ./public/
CMD npm run start:prod