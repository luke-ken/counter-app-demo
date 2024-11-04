# A counter demo app

## 1. Requirements

- A counter app with React and Redux, where the state is kept in Redux
- The same app, but the counting is done on a nodejs backend via a JSON-RPC API over HTTP
- The same app again, but uses WebSocket instead of HTTP to communicate with backend
- The whole app should be styled with TailwindCSS

## 2. Running with Docker
First, make sure these ports are available on your local machine: **3000, 9001, 9002**. Then run the following command in your terminal:
```
docker compose up --build
```
Once the build finished, the app will run under http://localhost:3000

## 3. Running locally
You need `nodejs` as prerequisite.

Again, also make sure these ports are available: **3000, 9001, 9002**.

Then navigate to counter-demo-app/backend and run this command:
```
node ./bin/www
```
Open a new terminal and navigate to counter-demo-app/frontend and run this command:
```
npm run dev
```
The app will run under http://localhost:3000
