console.log({
  API_URL: process.env.API_URL,
  API_KEY: process.env.API_KEY,
});
//https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

// module.exports = {
//   env: {
//     API_URL: process.env.API_URL,
//     API_KEY: process.env.API_KEY,
//   },
// };
//Environment Variables:https://nextjs.org/docs/basic-features/environment-variables
//Exampple env config repo :https://github.com/vercel/next.js/tree/canary/examples/with-now-env

/* note if this doestn work try

//TO use .env and procsss.env ad dotenv npm
module.exports = {
  build:{

    env: {
      API_URL: process.env.API_URL,
      API_KEY: process.env.API_KEY,
    }
  }
};
*/
