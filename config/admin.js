module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '34f7476b2ef09a3086da9b8eed005311'),
  },
});
