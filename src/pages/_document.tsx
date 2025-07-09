import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body className="antialiased text-base md:text-xl text-[#112404] min-h-screen w-full md:max-w-3xl md:mx-auto shadow-2xl overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
