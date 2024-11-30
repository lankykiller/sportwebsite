FROM node:alpine
COPY . /app
COPY package*.json ./package/
WORKDIR /app
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]