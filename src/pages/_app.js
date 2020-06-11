// import App from 'next/app'
import { ApolloProvider } from "@apollo/client";
import { client } from "../../apollo/client";

//my dashboard :https://vercel.com/dashboard
//DEPLOY:https://www.youtube.com/watch?v=OF9UkxDOSII
//TODO: Vercel deloy :https://vercel.com/docs/v2/build-step
// https://vercel.com/docs/v2/platform/deployments
//than --https://vercel.com/docs/cli#getting-started

/*
2) page will not render untill data is available , so we can show progress bar 
--https://github.com/rstacruz/nprogress
--npmjs.com/package/nprogress  (documentation)
for css i need to import 'nprogress/nprogress.css' in main App compont so it's availiable in every page
*/
function App({ Component, pageProps }) {
  return (
    <div>
      <ApolloProvider client={client}>
        <h2 style={{ display: "flex", justifyContent: "center" }}>This is main component.</h2>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;

//_app.js in pages directory overrides default index.js app as enntry point to our app
//see https://nextjs.org/docs/basic-features/typescript#custom-app (when i wan't to swithc to typescript)
