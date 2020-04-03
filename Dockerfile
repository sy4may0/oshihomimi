FROM alpine:latest

RUN apk update
RUN apk add git nodejs npm
RUN git clone https://github.com/sy4may0/oshihomimi.git
ADD .env /oshihomimi/.env
ADD conf.json /oshihomimi/conf.json
WORKDIR /oshihomimi
RUN npm install && npm run build

ENTRYPOINT ["node", "/oshihomimi/dist.js"]

