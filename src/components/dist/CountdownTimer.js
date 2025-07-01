"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CountdownTimer = function () {
    var _a = react_1.useState(null), timeLeft = _a[0], setTimeLeft = _a[1];
    react_1.useEffect(function () {
        var calculateTimeLeft = function () {
            var targetDate = new Date("2025-10-10T12:00:00");
            var now = new Date();
            var diff = targetDate.getTime() - now.getTime();
            if (diff <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }
            var days = Math.floor(diff / (1000 * 60 * 60 * 24));
            var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            var minutes = Math.floor((diff / (1000 * 60)) % 60);
            var seconds = Math.floor((diff / 1000) % 60);
            return { days: days, hours: hours, minutes: minutes, seconds: seconds };
        };
        setTimeLeft(calculateTimeLeft());
        var timer = setInterval(function () {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return function () { return clearInterval(timer); };
    }, []);
    if (!timeLeft)
        return null; // 初回のサーバーレンダリングでは描画しない
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "relative bg-[url('/images/countDownTimerBg.jpg')] bg-[0%_50%] bg-no-repeat bg-cover shadow-inner py-10" },
            React.createElement("img", { src: "/images/countDownTimerLayer1.png", alt: "", className: "absolute bottom-0 left-0 w-24 md:w-72" }),
            React.createElement("img", { src: "/images/countDownTimerLayer2.png", alt: "", className: "absolute top-0 right-0 w-24 md:w-72" }),
            React.createElement("div", { className: "text-center" },
                React.createElement("p", { className: "text-xl md:text-3xl mb-2.5" }, "COUNTDOWN"),
                React.createElement("div", { className: "text-5xl md:text-7xl mb-2.5" },
                    React.createElement("p", null, timeLeft.days),
                    React.createElement("p", null, "DAYS"))),
            React.createElement("div", { className: "flex justify-center gap-12" },
                React.createElement("div", { className: "text-center" },
                    React.createElement("p", { className: "text-3xl md:text-5xl" }, timeLeft.hours),
                    React.createElement("p", null, "HOURS")),
                React.createElement("div", { className: "text-center" },
                    React.createElement("p", { className: "text-3xl md:text-5xl" }, timeLeft.minutes),
                    React.createElement("p", null, "MINUTES")),
                React.createElement("div", { className: "text-center" },
                    React.createElement("p", { className: "text-3xl md:text-5xl" }, timeLeft.seconds),
                    React.createElement("p", null, "SECONDS"))))));
};
exports["default"] = CountdownTimer;
