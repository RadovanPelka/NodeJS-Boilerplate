FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json yarn.lock tsconfig.json ./

RUN yarn install --pure-lockfile

COPY /src ./src

RUN yarn build

EXPOSE 8080
CMD [ "node", "dist/server.js" ]