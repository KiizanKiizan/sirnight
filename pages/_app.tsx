import { NextPage } from "next";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "tailwindcss/tailwind.css";
import SEO from "../next-seo.config";
import { GA_ID } from "../src/lib/gtag";
import { GOOGLE_TAG_MANAGER_ID } from "../src/lib/gtm";
import "../styles/globals.css";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { rd_code } = useRouter().query;
  if (rd_code && sessionStorage.getItem("rd_code") === null) {
    sessionStorage.setItem("rd_code", rd_code as string);
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      {GA_ID !== "" && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}');
        `}
          </Script>
        </>
      )}
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');`}
      </Script>
      <DefaultSeo {...SEO} />
      {Component.getLayout ? (
        Component.getLayout(
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>,
        )
      ) : (
        <div className="h-full w-screen bg-clay font-medium">
          <img
            src="/images/logos/light-gray.svg"
            alt="logo"
            className="fixed left-1/2 top-1/2 w-[95%] translate-x-[-50%] translate-y-[-50%]"
          />
          <div className="relative z-40 mx-auto h-full border-themeGray bg-clay sm:w-[640px] sm:border-x">
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
            </QueryClientProvider>
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;
