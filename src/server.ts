import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port: string | undefined = process.env["PORT"];

app.listen(port, () =>
  console.log(`App is running on http://localhost:${port}`)
);
