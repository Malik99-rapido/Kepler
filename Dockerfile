FROM node:16.20.2-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install --legacy-peer-deps --no-optional
COPY --chown=node:node . .
EXPOSE 8080
ENV REACT_APP_MAP_BOX_TOKEN=${REACT_APP_MAP_BOX_TOKEN}
CMD ["npm", "start"]