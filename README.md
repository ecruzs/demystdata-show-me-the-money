# Show Me The Money - Balance Sheet Report

## Description
A simple one-page application built with **React + TypeScript** that fetches and displays the Balance Sheet Report using a mock Xero API. The project is containerized using **Docker Compose** for easy setup.

---

## Requirements
- [Docker](https://www.docker.com/) installed

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/ecruzs/demystdata-show-me-the-money.git
cd DemystData
```

### 2. Build and start the containers
```bash
docker-compose up --build
```

- **Frontend:** `http://localhost:5173`
- **Backend:** `http://localhost:3001`
- **Mock Xero API:** `http://localhost:3000`

---

## Running Tests

### Frontend
```bash
cd frontend
npx vitest
```

### Backend
```bash
cd backend
npm test
```

---

## Stopping the containers
```bash
docker-compose down
```

---

## Project Structure
```
/DemystData
  ├── backend/         # Backend service with Express
  ├── frontend/        # Frontend service with React + TypeScript
  └── docker-compose.yml
```

