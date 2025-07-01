"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AttendanceModal_1 = require("./AttendanceModal");
var api_1 = require("@react-google-maps/api");
var containerStyle = {
    width: "100%",
    height: "250px"
};
var center = {
    lat: 35.72637183987202,
    lng: 140.05954510947535
};
function AccessMap() {
    var _a = react_1.useState(false), isModalOpen = _a[0], setModalOpen = _a[1];
    console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "relative rounded-2xl bg-[url('/images/countDownTimerBg.jpg')] bg-[0%_50%] bg-no-repeat bg-cover mx-auto md:w-3xl p-10 md:p-20 text-center" },
            React.createElement("p", { className: "mb-5 md:mb-14 font-bold text-xl" }, "\u30A2\u30B3\u30FC\u30EB\u30CF\u30FC\u30D6"),
            React.createElement("div", { className: "md:space-y-2 mb-7" },
                React.createElement("p", null, "www.accord-herbe.jp"),
                React.createElement("p", null, "\u3012274-0060\u5343\u8449\u770C\u8239\u6A4B\u5E02\u576A\u4E95\u67711\u4E01\u76EE1-11"),
                React.createElement("p", null, "047-461-5550")),
            React.createElement("div", { className: "mb-7" },
                React.createElement(api_1.LoadScript, { googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY },
                    React.createElement(api_1.GoogleMap, { mapContainerStyle: containerStyle, center: center, zoom: 17 },
                        React.createElement(api_1.Marker, { position: center })))),
            React.createElement("div", { className: "mb-12 md:mb-14 md:space-y-2" },
                React.createElement("p", null, "\u304A\u624B\u6570\u3067\u306F\u3054\u3056\u3044\u307E\u3059\u304C"),
                React.createElement("p", null, "8\u670810\u65E5\u307E\u3067\u306B\u3054\u8FD4\u4FE1\u304F\u3060\u3055\u3044\u307E\u3059\u3088\u3046"),
                React.createElement("p", null, "\u304A\u9858\u3044\u7533\u3057\u4E0A\u3052\u307E\u3059")),
            React.createElement("button", { onClick: function () { return setModalOpen(true); }, className: "bg-gradient-to-r from-[#739A94] via-[#637863] to-[#555A38] text-white px-16 py-4 rounded-4xl shadow-lg hover:from-[#637863] hover:via-[#555A38] hover:to-[#739A94]" }, "\u62DB\u5F85\u72B6\u306B\u56DE\u7B54\u3059\u308B"),
            React.createElement(AttendanceModal_1["default"], { isOpen: isModalOpen, onClose: function () { return setModalOpen(false); } }),
            React.createElement("img", { src: "/images/accessMapLayer.png", alt: "", className: "absolute bottom-0 left-0 w-24 md:w-40" }))));
}
exports["default"] = AccessMap;
