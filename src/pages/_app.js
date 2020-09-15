// import App from "next/app";
import { SWRConfig } from "swr";
import { gqlFetcher } from "./api/graphql/prismaClient";
import NavMain from "../components/nav/NavMain";
import "../css/index.css";
import "../css/snackbar.css";

//NOTE: ON DEV WE STILL REFETCH DATA ON NAVIGATION(BECAUSE ITS NOT CACHED BY CDN), THIS IS WORKING IN PRODUCTION!!!
//AND ALSO WORKS ON BUILD + "nom run start"
//NOTE : npm run build pulls credentials from .env.local (non public version) [REMEMBER TO UPDATE!]
function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher: gqlFetcher, revalidateOnFocus: false }}>
        <NavMain />
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
