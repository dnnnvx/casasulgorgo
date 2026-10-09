# syntax=docker/dockerfile:1

FROM node:26-trixie-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build \
	&& echo '{"type":"module"}' > build/package.json

# adapter-node bundles all devDependencies into the build, so no node_modules are needed at runtime
FROM gcr.io/distroless/nodejs26-debian13:nonroot
WORKDIR /app
ENV NODE_ENV=production \
	PORT=3000
COPY --from=build /app/build ./build
EXPOSE 3000
CMD ["build/index.js"]
