FROM debian:bullseye

RUN apt-get update && apt-get install -y \
    curl \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*  # Limpiar caché de apt para reducir el tamaño de la imagen

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*  # Limpiar caché de apt

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps \
    && npm cache clean --force

COPY . .

EXPOSE 3035

CMD ["node", "index.js"]
