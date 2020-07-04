// import App from "next/app";
import { SWRConfig } from "swr";
import gqlClient, { qglFetcher } from "./api/graphql/prismaClient";
// import { container } from "../components/home.module.css"; has some colisions
import Layout from "../components/layout";
//Vercel dashboard :https://vercel.com/dashboard

function App({ Component, pageProps }) {
  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>This is main component.</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Layout />
      </div>
      <SWRConfig value={{ fetcher: qglFetcher, revalidateOnFocus: false }}>
        <Component {...pageProps} />
      </SWRConfig>
    </div>
  );
}
export default App;

export function reportWebVitals(metric) {
  console.log(metric);
}
/* INFO
    The Component prop is the active page, so whenever you navigate between routes, Component will change to the new page.
    Therefore, any props you send to Component will be received by the page.

    pageProps is an object with the initial props that were preloaded for your page by one of our data fetching methods, otherwise it's an empty object.
?/

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


//TODO:
/*
  now secret add -- my-private-key "`< my-private-key.txt`"
  The `< my-private-key.txt` takes the content of the my-private-key.txt file and pastes it into the command line for you.
  Alternatively, you can also do `cat my-private-key.txt` which would do the same.
*/

//_app.js in pages directory overrides default index.js app as enntry point to our app
//see https://nextjs.org/docs/basic-features/typescript#custom-app (when i wan't to swithc to typescript)

// DEPLOY:https://www.youtube.com/watch?v=OF9UkxDOSII
// /Vercel deloy :https://vercel.com/docs/v2/build-step
//  https://vercel.com/docs/v2/platform/deployments
// than --https://vercel.com/docs/cli#getting-started
