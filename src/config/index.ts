export const config = () => {
  switch (process.env.NODE_ENV) {
    case 'dev':
      return require('./dev.json');
    default:
      return require('./local.json');
  }
};
