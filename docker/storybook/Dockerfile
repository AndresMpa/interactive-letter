FROM node:23-alpine
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN apk update && apk upgrade && \
    apk add --no-cache git && \
    git config --global user.name "$GIT_USER_NAME" && \
    git config --global user.email "$GIT_USER_EMAIL" && \
    pnpm install

COPY . /usr/src/app/

EXPOSE 6006

CMD [ "pnpm", "storybook" ]