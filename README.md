# 🧑‍⚕️ Acme Corp Patient Dashboard

A full-stack web application that allows patients to monitor their weight-loss journey and manage their medication shipments. The app includes features like secure authentication, weight progress tracking, and shipment history viewing. Built using the **MERN stack (MongoDB, Express, React, Node.js)**.

---

## 🧰 Tech Stack

| Layer    | Technology                 |
| -------- | -------------------------- |
| Frontend | React, Tailwind CSS, Axios |
| Backend  | Node.js, Express           |
| Database | MongoDB (Mongoose)         |
| Auth     | JWT (JSON Web Token)       |

---

## ✨ Features

### 🔐 Authentication

- Signup / Login with JWT
- Protected routes using middleware

### ⚖️ Weight Tracking

- Add weight entries by date
- View progress over time (graph/chart)

### 🚚 Shipment Management

- View upcoming and past medication shipments
- Track medication names, dosage, delivery status

---

## 🧪 Sample API Endpoints

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`

### Weight

- `POST /api/weights/add`
- `GET /api/weights/all`

### Shipment

- `GET /api/shipments/past`
- `GET /api/shipments/upcoming`

---

## 🧠 Technology

- **Frontend**: React (with hooks), Axios for API calls, Tailwind for styling
- **Backend**: Node.js + Express with RESTful APIs
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT stored in local storage

---
