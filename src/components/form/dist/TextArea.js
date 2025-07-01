"use strict";
exports.__esModule = true;
var TextArea = function (_a) {
    var name = _a.name, placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange;
    return (React.createElement("div", { className: "flex w-full" },
        React.createElement("textarea", { id: name, name: name, value: value, onChange: function (e) { return onChange(e.target.value); }, placeholder: placeholder, className: "bg-white p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200" })));
};
exports["default"] = TextArea;
