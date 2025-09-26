import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome from fx alex');
});

export default app;
