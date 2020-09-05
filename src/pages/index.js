import React from "react";
import useSWR from "swr";
import Head from "next/head";
import { gqlFetcher } from "./api/graphql/prismaClient";
import { GET_BOOKS } from "../pages/api/graphql/queries";
import JobExtrasCard from "../components/card/JobExtrasCard";
import JobCard from "../components/card/JobCard";
import JobHighlightCard from "../components/card/JobHighlightCard";
import SlidingSnackbar from "../components/shared/SlidingSnackbar";
import SocialsContainer from "../components/shared/SocialsContainer";
/*
  Reason my graphql query returns only 20 items  @https://stackoverflow.com/questions/55112026/aws-appsync-graphql-api-only-return-20-items-from-dynamodb
  Appsync -->schema->resolvers ->listBookStores
  For pagination take 1kb (min item size in Dynamo)[you can expect to get around 1024 records before your results will be paginated
     (meaning you will get a nextToken in the response from DynamoDB)]
  Note: DynamoDB will automatically paginate once your result set reaches 1 MB.))
*/
const variables = { limit: 20, nextToken: "" };

/*
 TODO:
 1) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 https://swr.vercel.app/docs/pagination
 
2) page will not render untill data is available , so we can show progress bar 
--https://github.com/rstacruz/nprogress
--npmjs.com/package/nprogress  (documentation)
for css i need to import 'nprogress/nprogress.css' in main App compont so it's availiable in every page
*/

export default function Home({ jobsData }) {
  const { data, error } = useSWR([GET_BOOKS, variables], { initialData: jobsData });
  // debugger;
  if (error) return <div>Error encountered:{JSON.stringify(error, null, 4)}</div>;
  if (!data) return <div>Loading....</div>;
  return (
    //NOTE: not sure if suspennse is correct here
    // <Suspense fallback={<div>loading...</div>}> removed because it was causing ssr errros , TODO:replace with normal loaders
    <div>
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
      <main>
        <div className="container">
          <div id="container-top">
            {/* TODO: show some data here by default ..like some graph of total jobs currently on market ... (on job click switch to details) */}
            <JobHighlightCard />
            <JobExtrasCard />
          </div>
          <div className="container-items">
            {data.listBookStores.items.map((item, index) => {
              return <JobCard data={item} key={item.Id} />;
            })}
          </div>
        </div>
        <SlidingSnackbar />
      </main>
      <footer>
        <SocialsContainer />
      </footer>
    </div>
  );
}

//Get SSR Data on initial page load @build time:
export async function getStaticProps(context) {
  //NOTE :Passed fetcher this way because i can't useSwr hook here
  const jobsData = await gqlFetcher(GET_BOOKS, variables);
  return { props: { jobsData } };
}

//THIS IS OLDER VERSION of getStaticProps BUT PERFS SEEM SAME
// Home.getInitialProps = async (ctx) => {
//     //NOTE :Passed fetcher this way because i can't useSwr hook here
//     const jobsData = await qglFetcher(GET_BOOKS);
//     return { props: { jobsData } };
//   };

//EXAMPLE GLOBAL,LOCAL CSS BELLOW
// import Head from "next/head";
// import next from "next";

//NOTE: when i export compoenent from index.js its home page by default,other routes in pages are accessed by /route

// DEFAULT Template App by -next.js

// export default function Home() {
//   return (
//     <div className="container">
//       <Layout />
//       <Head>
//         <title>Create Next App</title>
//         <title>
//           See: <a href="https://www.youtube.com/watch?v=H36p3evcRC0">Video</a>
//         </title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1 className="title">
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className="description">
//           Get started by editing <code>pages/index.js</code>
//         </p>

//         <div className="grid">
//           <a href="https://nextjs.org/docs" className="card">
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className="card">
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a href="https://github.com/vercel/next.js/tree/master/examples" className="card">
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className="card"
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
//           </a>
//         </div>
//       </main>

//       {/* <footer>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
//         </a>
//       </footer> */}

//       <style jsx>{`
//         .container {
//           min-height: 100vh;
//           padding: 0 0.5rem;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         main {
//           padding: 5rem 0;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         footer {
//           width: 100%;
//           height: 100px;
//           border-top: 1px solid #eaeaea;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         footer img {
//           margin-left: 0.5rem;
//         }

//         footer a {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         a {
//           color: inherit;
//           text-decoration: none;
//         }

//         .title a {
//           color: #0070f3;
//           text-decoration: none;
//         }

//         .title a:hover,
//         .title a:focus,
//         .title a:active {
//           text-decoration: underline;
//         }

//         .title {
//           margin: 0;
//           line-height: 1.15;
//           font-size: 4rem;
//         }

//         .title,
//         .description {
//           text-align: center;
//         }

//         .description {
//           line-height: 1.5;
//           font-size: 1.5rem;
//         }

//         code {
//           background: #fafafa;
//           border-radius: 5px;
//           padding: 0.75rem;
//           font-size: 1.1rem;
//           font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono,
//             Courier New, monospace;
//         }

//         .grid {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-wrap: wrap;

//           max-width: 800px;
//           margin-top: 3rem;
//         }

//         .card {
//           margin: 1rem;
//           flex-basis: 45%;
//           padding: 1.5rem;
//           text-align: left;
//           color: inherit;
//           text-decoration: none;
//           border: 1px solid #eaeaea;
//           border-radius: 10px;
//           transition: color 0.15s ease, border-color 0.15s ease;
//         }

//         .card:hover,
//         .card:focus,
//         .card:active {
//           color: #0070f3;
//           border-color: #0070f3;
//         }

//         .card h3 {
//           margin: 0 0 1rem 0;
//           font-size: 1.5rem;
//         }

//         .card p {
//           margin: 0;
//           font-size: 1.25rem;
//           line-height: 1.5;
//         }

//         .logo {
//           height: 1em;
//         }

//         @media (max-width: 600px) {
//           .grid {
//             width: 100%;
//             flex-direction: column;
//           }
//         }
//       `}</style>

//       <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
//             Droid Sans, Helvetica Neue, sans-serif;
//         }

//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
//     </div>
//   );
// }
