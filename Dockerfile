FROM node:18
WORKDIR /app
ARG MONGODB_URI
ENV MONGODB_URI=${MONGODB_URI}
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]