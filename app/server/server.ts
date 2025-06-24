import dotenv from 'dotenv';
import app from '../app';
import { connectDB } from '../config/database';

dotenv.config();

const PORT = process.env.PORT || 3000;
const mongoUri = `mongodb://${process.env.MONGO_URI}:${process.env.MONGO_PORT}/${process.env.MONGO_NAME}`;

connectDB(mongoUri).then(() => {
  app.listen(PORT, () => {
    console.log('Server running at PORT:', PORT);
  });
});