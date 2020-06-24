// import App from "next/app";
import { SWRConfig } from "swr";
import gqlClient from "./api/graphql/prismaClient";

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
// const fetcher = (...args) => fetch(...args).then((res) => res.json()); global fetcher EXAMPLE
//or gql fetch in my case

/**Default gql fetcher function
 * @param  {...any} query Gql Query/mutation
 */
const qglFetcher = (...query) => gqlClient.request(...query).then((res) => JSON.stringify(res, null, 4));

function App({ Component, pageProps }) {
  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>This is main component.</h2>
      <SWRConfig value={{ fetcher: qglFetcher, suspense: true, revalidateOnFocus: false }}>
        <Component {...pageProps} />
      </SWRConfig>
    </div>
  );
}
export default App;
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
