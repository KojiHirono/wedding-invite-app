"use strict";
// pages/index.js (または任意のページ)
// import { useEffect, useState } from "react";
exports.__esModule = true;
var AccessMap_1 = require("@/components/AccessMap");
var BrideGroomIntro_1 = require("@/components/BrideGroomIntro");
var CountdownTimer_1 = require("@/components/CountdownTimer");
var GreetingSection_1 = require("@/components/GreetingSection");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("main", null,
            React.createElement(BrideGroomIntro_1["default"], null),
            React.createElement(CountdownTimer_1["default"], null),
            React.createElement("div", { className: "relative bg-gradient-to-b from-[#739A94]/50 to-[#1B391C] py-16" },
                React.createElement(GreetingSection_1["default"], null),
                React.createElement(AccessMap_1["default"], null)))));
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
exports["default"] = Home;
