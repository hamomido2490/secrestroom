# Secrets Room API

## Authentication
POST /auth/login
- Parameters: email, password
- Returns: { token, userId }

## Tests
GET /tests/:id
- Returns test results

POST /tests
- Submit new test
