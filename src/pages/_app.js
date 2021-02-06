// import App from "next/app";
import { SWRConfig } from "swr";
import { gqlFetcher } from "./api/graphql/prismaClient";
import NavMain from "../components/nav/NavMain";
import Head from "next/head";
import "../css/index.css";
import "../css/snackbar.css";
import SocialsContainer from "../components/shared/SocialsContainer";

//NOTE: ON DEV WE STILL REFETCH DATA ON NAVIGATION(BECAUSE ITS NOT CACHED BY CDN), THIS IS WORKING IN PRODUCTION!!!
//AND ALSO WORKS ON BUILD + "nom run start"
//NOTE : npm run build pulls credentials from .env.local (non public version) [REMEMBER TO UPDATE!]
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vercel frontend-parser</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,900"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="main-container" style={{ height: "100vh" }}>
        <SWRConfig value={{ fetcher: gqlFetcher, revalidateOnFocus: false }}>
          <NavMain />
          <div className="container">
            <Component {...pageProps} />
          </div>
        </SWRConfig>
      </main>
      <footer>
        <SocialsContainer />
      </footer>
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
