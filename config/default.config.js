module.exports = {
  server: {
    host: '0.0.0.0',
  },
  db: {
    provider: 'mongodb',
    user: process.env.PORTFOLIO_DB_USER,
    pwd: process.env.PORTFOLIO_DB_PASSWORD,
    host: process.env.PORTFOLIO_DB_HOST,
    port: process.env.PORTFOLIO_DB_PORT,
    database: 'PortfolioDB',
    authSource: 'user',
  },
};
