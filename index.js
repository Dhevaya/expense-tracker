import express, { Request, Response } from 'express';

const app = express();
const port = 4040;

app.get("/api/test", (req: Request, res: Response) => {
  res.json({ body: 'test ok' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
