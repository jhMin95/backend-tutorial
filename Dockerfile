FROM node:20-alpine
# https://github.com/pnpm/pnpm/issues/4495#issuecomment-1317831712

COPY . .
RUN npm install --global pm2
RUN pm2-runtime --version || exit 1

ENTRYPOINT [ "sh", "start.sh"]