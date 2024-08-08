FROM node:18-alpine AS base

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
# Only Take packages that are needed to compile this app
RUN turbo prune --scope=backend --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
COPY --from=builder /app/turbo.json ./turbo.json
COPY --from=builder /app/apps/backend/prisma ./apps/backend/prisma
RUN yarn install --frozen-lockfile
RUN yarn prisma generate --generator client

FROM base AS sourcer
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore
RUN yarn turbo build --filter=backend...

FROM base as runner
WORKDIR /app
COPY --from=sourcer /app/ .
CMD [ "node", "apps/backend/dist/src/main.js" ]
