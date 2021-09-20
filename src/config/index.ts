import local from './local.json';
import dev from './dev.json';

export const config = () => {
  switch (process.env.NODE_ENV) {
    case 'dev':
      return dev;
    default:
      return local;
  }
};
