import { connection } from './src/db/db.sequelize.js';
import express, { urlencoded, json, NextFunction } from 'express';
import { router } from './src/routes/routes.sequelize.js';
import cors from 'cors';

const PORT = process.env.PORT || 8080;

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/api', router);

app.use((err: Error, req: any, res: any, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

connection
  .sync()
  .then(() => {
    console.log('database started');
  })
  .catch((err) => {
    console.log('err', err);
  });

app.listen(PORT, () => console.log(`server started ssomething on port ${PORT}`));
