# mini-project-backend

Backend written in NodeJS to serve frontend aspect of a task.

Runs on port 8080 but can be configured in ('./server.js')

## Getting Started

- Install packages: `npm install`
- Serve the application: `npm start`
- Run tests `npm test`

## Routes

- `/calc/combined`
- `/calc/either`

### Required Body

```
{
    "number1": 0.5,
    "number2": 0.5
}
```
