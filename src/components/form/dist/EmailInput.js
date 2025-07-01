"use strict";
exports.__esModule = true;
var EmailInput = function (_a) {
    var email = _a.email, setEmail = _a.setEmail, domain = _a.domain, setDomain = _a.setDomain;
    var domainOptions = [
        "@yahoo.co.jp",
        "@gmail.com",
        "@ezweb.ne.jp",
        "@au.com",
        "@docomo.ne.jp",
        "@i.softbank.jp",
        "@softbank.ne.jp",
        "@icloud.com",
        "@outlook.com",
        "@yahoo.ne.jp",
        "その他",
    ];
    // const [customDomain, setCustomDomain] = useState("");
    // const getFullEmail = () => {
    //   const domain = selectedDomain === "その他" ? "" : selectedDomain;
    //   return `${emailId}${domain}`;
    // };
    return (React.createElement("div", { className: "flex gap-2 w-full" },
        React.createElement("input", { type: "text", name: "email", placeholder: domain === "その他"
                ? "カスタムメール（例：dummy@example.com）"
                : "メール", value: email, onChange: function (e) { return setEmail(e.target.value); }, className: "bg-white p-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200" }),
        React.createElement("select", { value: domain, onChange: function (e) { return setDomain(e.target.value); }, className: "bg-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200" }, domainOptions.map(function (domain) { return (React.createElement("option", { key: domain, value: domain }, domain)); }))));
};
exports["default"] = EmailInput;
