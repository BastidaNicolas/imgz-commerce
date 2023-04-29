import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="og:description"
          content="Shop for stunning photo prints on aluminum backing at our online store. Browse our selection of high-quality photos and purchase your favorites. Free shipping on all orders"
        />
        <meta property="og:title" content="IMGz - Aluminum Backed Photo Impresions Shop" />
        <meta property="og:image" content="https://i.imgur.com/4z4G3aq.png" />
        <meta property="og:url" content="https://imgz-commerce-git-api-integration-bastidanicolas.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="og:site_name" content="IMGz Shop" />
        <meta name="twitter:image:alt" content="webshop preview" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
