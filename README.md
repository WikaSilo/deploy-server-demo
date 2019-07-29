# EXPRESS FOR DEMO (DEPLOY)

## Package Information and Dependecies
```
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "NODE_ENV=development nodemon app.js",
    "start": "NODE_ENV=production node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.4",
    "mongoose": "^5.5.6",
    "morgan": "^1.9.1"
  },
  "devDependencies": {
    "dotenv": "^8.0.0"
  }
}

```

## Documetation
1. `git clone` this repo
2. `cd deploy-server-demo`
3. `npm install`
4. export PORT=<your_port>
5. export ATLAS_PASSWORD=<your_password>
6. `npm run start`

## API Endpoints
| method | routes | desc          |
| ------ | ------ | ------------- |
| GET    | /      | welcome       |
| GET    | /*     | 404 not found |