# CRUD-APP

> A basic crud app using NodeJS & Express

### How to Install on your PC 💻

Create a .env file in the root folder. Use the .env.sample as a guide for the environment variables you will need for this app.

```
port
MONGO_URL (Database for production environment)
MONGO_URI (Database for development environment)
```

### Install Dependencies 🔗

Install project dependencies using

```
npm i
```

### Run the app 🔃

Run the app in development mode using

```
npm run dev
```

Run the app in production mode using

```
npm run start
```

---

## Application endpoints

### HTTP STATUS CODES USED

| Status code | Description           |
| ----------- | --------------------- |
| 200         | Ok                    |
| 201         | Created               |
| 400         | Bad request           |
| 404         | Not found             |
| 500         | Internal server error |

### Request verbs used in application

> GET, POST, PATCH, DELETE

<br/>
<br/>

### Create a user

> POST https://x-crud-app.herokuapp.com/create/user
