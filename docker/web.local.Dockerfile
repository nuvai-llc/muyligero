FROM pornflix-api-api:latest

WORKDIR /app

COPY package*.json ./
COPY . .

CMD ["npm", "run", "dev:web"]
