import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="og:description"
          content="Shop for stunning photo prints on aluminum backing at our online store. Browse our selection of high-quality photos and purchase your favorites. Free shipping on all orders"
        />
        <meta property="og:title" content="Aluminum Backed Photo Impresions Shop" />
        <meta property="og:type" content="Online Shop" />
        <meta property="og:image" content="https://i.imgur.com/3g1tJ8F.png" />
        <meta property="og:url" content="https://imgz-commerce-git-api-integration-bastidanicolas.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
