// import App from "next/app";
import { SWRConfig } from "swr";
import { qglFetcher } from "./api/graphql/prismaClient";
import NavMain from "../components/nav/NavMain";
import "../css/index.css";
//NOTE: ON DEV WE STILL REFETCH DATA ON NAVIGATION(BECAUSE ITS NOT CACHED BY CDN), THIS IS WORKING IN PRODUCTION!!!
//AND ALSO WORKS ON BUILD + "nom run start"
function App({ Component, pageProps }) {
  return (
    <>
      <NavMain />
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <Layout />
      </div> */}

      <SWRConfig value={{ fetcher: qglFetcher, revalidateOnFocus: false }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
export default App;

export function reportWebVitals(metric) {
  console.log(metric);
}
//Vercel dashboard :https://vercel.com/dashboard

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

//By default SWR caches pre rendered data , but makes another call in background (to stay in sync when more tabs are open)
//------------------------------------------------------------------------
//CACHING
//https://scale.com/blog/performance-on-next-js-websites
//Github:https://github.com/pamelafox/lscache
//or sw caching
//:https://logaretm.com/blog/2020-02-24-caching-graphql-requests/

//------------------------------------------------------------------------
//TODO: PRefetching --https://swr.vercel.app/docs/prefetching
//SSR render getinitialprops--//example--https://codeconqueror.com/blog/fetching-data-in-next-js

//ctx props ->https://nextjs.org/docs/api-reference/data-fetching/getInitialProps#context-object

//TODO: check out https://nextjs.org/learn/basics/data-fetching/pre-rendering ,https://nextjs.org/learn/basics/data-fetching/with-data
//bruno repo:https://github.com/bmvantunes/youtube-2020-feb-swr-hook

//https://nextjs.org/learn/basics/data-fetching/getstaticprops-details

//example repo (tsx)https://github.com/bmvantunes/youtube-2020-feb-swr-hook

//DOCS ;https://swr.now.sh/

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
