module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a700241ac3191061f0ac781715be4fad'),
  },
});
