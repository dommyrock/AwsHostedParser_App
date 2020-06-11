console.log({
  API_URL: process.env.API_URL,
  API_KEY: process.env.API_KEY,
});

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
};
//Environment Variables:https://nextjs.org/docs/basic-features/environment-variables
//Exampple env config repo :https://github.com/vercel/next.js/tree/canary/examples/with-now-env
