"use strict";
exports.__esModule = true;
var FormLabel = function (_a) {
    var label = _a.label, hint = _a.hint, required = _a.required;
    return (React.createElement("label", { className: "md:w-40 shrink-0" },
        React.createElement("div", { className: "gap-1" },
            React.createElement("span", null, label),
            required && React.createElement("span", { className: "text-red-500" }, "*")),
        React.createElement("span", null, hint)));
};
exports["default"] = FormLabel;
