// pages/index.js (または任意のページ)
// import { useEffect, useState } from "react";

import AccessMap from "@/components/AccessMap";
import BrigeGroomIntoro from "@/components/BrideGroomIntro";
import CountdownTimer from "@/components/CountdownTimer";
import GreetingSection from "@/components/GreetingSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <BrigeGroomIntoro />
        <CountdownTimer />
        <div className="relative bg-gradient-to-b from-[#739A94]/50 to-[#1B391C] py-12">
          <GreetingSection />
          <AccessMap />

          <Image
            src="/images/footer_left.svg"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute bottom-0 left-0 w-10 lg:w-32"
            alt=""
          />
          <Image
            src="/images/footer_right.svg"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute bottom-0 right-0 w-10 lg:w-32"
            alt=""
          />
        </div>
      </main>
    </>
  );

  // const [greeting, setGreeting] = useState("");

  // useEffect(() => {
  //   // バックエンドのエンドポイントにGETリクエストを送る
  //   fetch("http://localhost:8080/api/weddingInvite", {
  //     method: "GET",
  //     credentials: "include", // 認証情報（クッキー）を送信
  //   })
  //     .then((response) => response.text())
  //     .then((data) => setGreeting(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // return (
  //   <div>
  //     <h1>{greeting}</h1>
  //   </div>
  // );
}
