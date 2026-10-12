import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = 3000;
const directory = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(directory, 'public')));
app.use('/images', express.static(path.join(directory, 'images')));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
