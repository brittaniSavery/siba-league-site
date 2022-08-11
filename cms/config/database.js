module.exports = () => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        database: "siba-strapi",
        port: 27017,
        host: "localhost",
      },
      options: {},
    },
  },
});
