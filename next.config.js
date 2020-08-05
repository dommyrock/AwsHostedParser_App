if (process.env.NODE_ENV === "development") {
  console.log({
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  });
} else {
  console.log({
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  });
}
module.exports = {
  reactStrictMode: true,
};
// NOTETo configure secreats we use vercels console in Production , and for dev i pull them from .env.local file

//info https://nextjs.org/docs/api-reference/next.config.js/introduction
//https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js
// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//       },
//       use: ["@svgr/webpack"],
//     });

//     return config;
//   },
// };

// module.exports = {
//   env: {
//     API_URL: process.env.API_URL,
//     API_KEY: process.env.API_KEY,
//   },
// };
//Environment Variables:https://nextjs.org/docs/basic-features/environment-variables
