FROM fusuf/whatsasena:latest

RUN git clone https://github.com/J-I-H-A-D/ElsaMwol /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
