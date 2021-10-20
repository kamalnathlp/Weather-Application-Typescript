import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

async function connect() {
  try {
    const dbUri = config.get<string>('dbUri');
    await mongoose.connect(dbUri);
    logger.info('Connected to DB');
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}

export default connect;
