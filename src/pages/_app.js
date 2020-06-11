// import App from 'next/app'
import { ApolloProvider } from "@apollo/client";
import { client } from "../../apollo/client";

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
