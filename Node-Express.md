# Node.js & Express.js — Complete Beginner Guide (with Full CRUD API)

> Trainer-style notes: every concept explained with **Definition → Why → Example → Interview Point**, plus flow diagrams. By the end, you'll be able to build a complete REST API with GET, POST, PUT, PATCH, and DELETE routes, including query parameters.

---

## Table of Contents

1. [What is Node.js?](#1-what-is-nodejs)
2. [Installing & Running Node.js](#2-installing-running-nodejs)
3. [Core Built-in Modules](#3-core-built-in-modules)
4. [The Module System (CommonJS)](#4-the-module-system-commonjs)
5. [Building a Raw Server with `http`](#5-building-a-raw-server-with-http)
6. [npm & package.json](#6-npm-packagejson)
7. [What is Express.js?](#7-what-is-expressjs)
8. [Setting Up an Express Server](#8-setting-up-an-express-server)
9. [Middleware](#9-middleware)
10. [Route Parameters & Query Parameters](#10-route-parameters-query-parameters)
11. [Full CRUD REST API — GET, POST, PUT, PATCH, DELETE](#11-full-crud-rest-api-get-post-put-patch-delete)
12. [Testing Your API](#12-testing-your-api)
13. [Quick Reference Cheatsheet](#13-quick-reference-cheatsheet)

---

## 1. What is Node.js?

**Definition:** Node.js is a **JavaScript runtime environment**, built on Chrome's **V8 engine**, that lets JavaScript run **outside the browser** — directly on a computer or server.

**Why it exists:** Before Node.js, JavaScript could only run inside a browser — it had no access to the file system, no way to create servers, no way to talk to databases. Node.js gave JS everything it needed to become a full **backend** language.

**Flow diagram:**
```
Browser JavaScript                    Node.js JavaScript
────────────────────                  ────────────────────
Runs inside a browser tab             Runs directly on your OS
Has: DOM, BOM, window                 Has: file system, OS access, networking
Cannot read/write files               CAN read/write files, run servers
```

**Key characteristics:**
- **Single-threaded**, just like browser JS — but handles many operations at once using an **event loop** + **non-blocking I/O**, which makes it very efficient for servers that deal with lots of simultaneous requests (reading files, calling databases, handling API calls).
- Uses the **CommonJS** module system by default (`require` / `module.exports`), though modern Node also supports ES Modules (`import`/`export`).

**Interview point:** Node.js is **not** a programming language and **not** a framework — it's a **runtime environment** for JavaScript.

---

## 2. Installing & Running Node.js

Download and install from [nodejs.org](https://nodejs.org) (choose the LTS version). Verify installation:
```bash
node -v      # check Node.js version
npm -v       # check npm version (comes bundled with Node)
```

**Running a JS file with Node:**
```bash
node app.js
```

**Example — first Node script (`app.js`):**
```js
console.log("Hello from Node.js!");

let name = "Sourabh";
console.log(`Welcome, ${name}`);
```
Run it: `node app.js` → prints both lines directly in your terminal (no browser needed).

---

## 3. Core Built-in Modules

Node.js ships with several built-in modules — no installation needed.

| Module | Purpose |
|---|---|
| `fs` | File system — read/write/delete files |
| `http` | Create a basic web server |
| `path` | Work with file/directory paths safely across OSes |
| `os` | Get information about the operating system |

**Example — reading a file with `fs`:**
```js
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
```

**Example — path module:**
```js
const path = require('path');
console.log(path.join(__dirname, 'files', 'data.txt'));
// combines path segments safely, regardless of OS (Windows vs Linux/Mac)
```

---

## 4. The Module System (CommonJS)

**Definition:** A way to split code across multiple files and share functionality between them, using `require()` to import and `module.exports` to export.

**Flow diagram:**
```
math.js                          app.js
────────                         ────────
function add(a, b) {             const math = require('./math');
  return a + b;
}                                 console.log(math.add(2, 3)); // 5
module.exports = { add };
```

**Example:**
```js
// math.js
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }

module.exports = { add, subtract };
```
```js
// app.js
const math = require('./math');

console.log(math.add(5, 3));      // 8
console.log(math.subtract(5, 3)); // 2
```

**Interview point:** Every `.js` file in Node.js is treated as its own separate module — variables/functions in one file are **not** automatically visible in another unless explicitly exported and required.

---

## 5. Building a Raw Server with `http`

Before learning Express, it's worth seeing what Express is actually simplifying — a server built with Node's raw `http` module.

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write("Hello from Node.js server");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

**Interview point:** Handling different routes/methods manually with raw `http` gets messy fast (`if (req.url === '/' && req.method === 'GET') {...}` for every single route). This is exactly the pain point **Express.js solves** — see §7.

---

## 6. npm & package.json

**Definition:** `npm` (Node Package Manager) is installed automatically with Node.js. It's used to install, manage, and share reusable JavaScript packages/libraries.

**Setting up a new project:**
```bash
npm init -y             # creates package.json with default values
npm install express     # installs a package, adds it to package.json
```

**`package.json`** is the manifest file of a Node project — it lists project metadata, dependencies, and runnable scripts.

```json
{
  "name": "my-api",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  }
}
```
Run a script defined above with: `npm start`

---

## 7. What is Express.js?

**Definition:** Express.js is a minimal, unopinionated **web framework for Node.js**, used to build web servers and APIs quickly — without manually handling all the low-level details the raw `http` module requires (routing, parsing request bodies, etc.).

**Why it exists:**
```
Raw http module            Express.js
─────────────────          ─────────────────
Manual URL matching         app.get('/path', handler)
Manual method checking      app.post('/path', handler)
Manual body parsing         express.json() middleware
Verbose, repetitive         Clean, declarative routing
```

**Interview point:** Express is the most widely used Node.js framework for building REST APIs, forming the "E" in the popular **MERN** stack (MongoDB, Express, React, Node).

---

## 8. Setting Up an Express Server

```bash
npm install express
```

```js
// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Home Page");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```
Run with: `node index.js`, then visit `http://localhost:3000` in a browser.

- `req` (request) — contains info about the incoming request: URL params, query params, request body, headers.
- `res` (response) — used to send data back: `res.send()`, `res.json()`, `res.status()`.

---

## 9. Middleware

**Definition:** A middleware function runs **between** the incoming request and the final route handler — used for logging, authentication, parsing request bodies, error handling, etc. It has access to `req`, `res`, and a `next()` function to pass control forward.

**Flow diagram:**
```
Incoming Request
      │
      ▼
Middleware 1 (e.g. logger)   ──▶ calls next()
      │
      ▼
Middleware 2 (e.g. express.json() — parses request body)  ──▶ calls next()
      │
      ▼
Route Handler (your app.get/post/put/delete function)
      │
      ▼
Response sent back
```

**Example:**
```js
app.use(express.json()); // built-in middleware — parses incoming JSON request bodies

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); // ⚠️ MUST call next() or the request hangs forever
});
```

**Interview point:** Forgetting to call `next()` inside a custom middleware is a very common beginner bug — the request will just hang with no response ever sent.

---

## 10. Route Parameters & Query Parameters

**Route parameters** — part of the URL **path** itself, used to identify a specific resource (e.g., which user).
```js
app.get('/user/:id', (req, res) => {
  console.log(req.params.id); // e.g. GET /user/5 → "5"
  res.send(`User ID is ${req.params.id}`);
});
```

**Query parameters** — appear after `?` in the URL, usually used for filtering, sorting, searching, or pagination.
```js
app.get('/search', (req, res) => {
  console.log(req.query.term); // e.g. GET /search?term=js → "js"
  res.send(`You searched for: ${req.query.term}`);
});
```

**Flow diagram:**
```
/user/5                          /search?term=js&limit=10
   │                                 │            │
   ▼                                 ▼            ▼
req.params.id = "5"          req.query.term="js"  req.query.limit="10"
(part of the PATH)                  (after the "?", as key=value pairs)
```

**Interview point:** Route params identify **which resource**, query params control **how you want it returned** (filtered/sorted/paginated) — both come in as **strings**, even if they look like numbers.

---

## 11. Full CRUD REST API — GET, POST, PUT, PATCH, DELETE

This section builds a complete, working REST API for managing a list of "users", covering **every** HTTP method, using an in-memory array as a simple "database" (perfect for learning — swap it for a real database later).

### What CRUD Maps To

```
CRUD Operation   HTTP Method   Typical URL         Purpose
──────────────   ───────────   ─────────────────   ──────────────────────────────
Create           POST          /users              Add a new resource
Read (all)       GET           /users              Get the full list
Read (one)       GET           /users/:id           Get one specific resource
Update (full)    PUT           /users/:id           Replace the ENTIRE resource
Update (partial) PATCH         /users/:id           Update only SOME fields
Delete           DELETE        /users/:id           Remove a resource
```

### Full Working Example (`index.js`)

```js
const express = require('express');
const app = express();

app.use(express.json()); // needed to read JSON in POST/PUT/PATCH request bodies

// In-memory "database" — a simple array of objects
let users = [
  { id: 1, name: "Sourabh", age: 22 },
  { id: 2, name: "Rahul", age: 25 }
];

// ────────────────────────────────────────────
// GET — read ALL users (supports optional query params for filtering)
// ────────────────────────────────────────────
app.get('/users', (req, res) => {
  let result = users;

  // optional query param example: /users?minAge=23
  if (req.query.minAge) {
    result = result.filter(user => user.age >= Number(req.query.minAge));
  }

  res.status(200).json(result);
});

// ────────────────────────────────────────────
// GET — read ONE user by id (route parameter)
// ────────────────────────────────────────────
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
});

// ────────────────────────────────────────────
// POST — create a NEW user
// ────────────────────────────────────────────
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age
  };

  users.push(newUser);
  res.status(201).json(newUser); // 201 = Created
});

// ────────────────────────────────────────────
// PUT — REPLACE an existing user entirely
// ────────────────────────────────────────────
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // PUT replaces the WHOLE object — every field must be provided
  user.name = req.body.name;
  user.age = req.body.age;

  res.status(200).json(user);
});

// ────────────────────────────────────────────
// PATCH — update PART of an existing user
// ────────────────────────────────────────────
app.patch('/users/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // PATCH only updates the fields that were actually sent
  if (req.body.name !== undefined) user.name = req.body.name;
  if (req.body.age !== undefined) user.age = req.body.age;

  res.status(200).json(user);
});

// ────────────────────────────────────────────
// DELETE — remove a user
// ────────────────────────────────────────────
app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(index, 1); // removes 1 item at that index
  res.status(200).json({ message: "User deleted", user: deletedUser[0] });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

### PUT vs PATCH — The Question That's Always Asked

**Flow diagram:**
```
Existing user: { id: 1, name: "Sourabh", age: 22 }

PUT /users/1  { name: "Sam" }
   → REPLACES the entire object with what you sent
   → Result: { id: 1, name: "Sam", age: undefined }  ⚠️ age got wiped out!

PATCH /users/1  { name: "Sam" }
   → Only UPDATES the fields you actually sent
   → Result: { id: 1, name: "Sam", age: 22 }  ✅ age untouched
```

**Interview point:** `PUT` = full replacement (send every field, or you'll lose data). `PATCH` = partial update (send only what's changing).

---

## 12. Testing Your API

You can test these routes using tools like **Postman**, **Thunder Client** (VS Code extension), or `curl` from the terminal:

```bash
# GET all users
curl http://localhost:3000/users

# GET all users with a query param filter
curl http://localhost:3000/users?minAge=23

# GET one user
curl http://localhost:3000/users/1

# POST — create a user
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Priya","age":24}'

# PUT — full replace
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Sourabh Updated","age":23}'

# PATCH — partial update
curl -X PATCH http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"age":24}'

# DELETE
curl -X DELETE http://localhost:3000/users/1
```

---

## 13. Quick Reference Cheatsheet

- **Node.js** = a runtime, not a language — lets JS run outside the browser, built on V8, uses an event loop for non-blocking I/O.
- **CommonJS**: `require()` to import, `module.exports` to export — Node's default module system.
- **npm**: package manager, `npm init -y` creates `package.json`, `npm install <pkg>` adds a dependency.
- **Express.js**: minimal Node.js web framework — simplifies routing and request/response handling compared to raw `http`.
- **Middleware**: runs between request and route handler; must call `next()` to continue, or the request hangs.
- **Route params** (`req.params`) — part of the URL path, identify a specific resource. **Query params** (`req.query`) — after `?`, used for filtering/searching/pagination. Both arrive as strings.
- **CRUD → HTTP method mapping**: Create → `POST`, Read → `GET`, Update (full) → `PUT`, Update (partial) → `PATCH`, Delete → `DELETE`.
- **Status codes commonly used**: `200` OK, `201` Created, `404` Not Found, `400` Bad Request, `500` Server Error.
- **`res.json(data)`** sends a JSON response (and sets the right `Content-Type` header automatically); `res.status(code)` sets the HTTP status code — usually chained: `res.status(201).json(data)`.

---

*End of notes — Node.js fundamentals through a complete Express.js CRUD REST API (GET, POST, PUT, PATCH, DELETE, and query parameters).*