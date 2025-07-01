"use strict";
exports.__esModule = true;
exports.RadioGroup = void 0;
exports.RadioGroup = function (_a) {
    var name = _a.name, value = _a.value, onChange = _a.onChange, options = _a.options, className = _a.className;
    return (React.createElement(React.Fragment, null, options.map(function (opt) { return (React.createElement("label", { key: opt.value, className: "px-4 py-2 rounded-lg border flex-1 " + className + " " + (value === opt.value
            ? "bg-gradient-to-r from-[#739A94] via-[#637863] to-[#555A38] text-white"
            : "bg-white text-green-800 border-gray-300") + " transition-colors" },
        React.createElement("input", { type: "radio", name: name, value: opt.value, checked: value === opt.value, onChange: function () { return onChange(opt.value); }, className: "hidden" }),
        opt.label)); })));
};
