FROM node:20-alpine

RUN apk add --update --no-cache git \
                                libzmq \
                                zeromq-dev \
                                python3 \
                                make \
                                g++

WORKDIR /insight

# Copy zipcore-node
RUN git clone --branch master --single-branch --depth 1 https://github.com/zipevo/zipcore-node.git .

# Copy config file
COPY zipcore-node.json .

# Install NPM modules
RUN npm ci

ARG VERSION
ARG MAJOR_VERSION

# Install Insight modules
RUN bin/zipcore-node install @zipevo/insight-api@${MAJOR_VERSION}
RUN bin/zipcore-node install @zipevo/insight-ui@${VERSION}

FROM node:20-alpine

LABEL maintainer="Zip Developers <dev@zip.org>"
LABEL description="Dockerised Insight-Zip"

WORKDIR /insight

# Copy project files
COPY --from=0 /insight/ .

EXPOSE 3001

CMD ["bin/zipcore-node", "start"]
