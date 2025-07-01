"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var FormLabel_1 = require("./FormLabel");
var AddressField = function (_a) {
    var postalCode = _a.postalCode, setPostalCode = _a.setPostalCode, address = _a.address, setAddress = _a.setAddress, building = _a.building, setBuilding = _a.setBuilding;
    var _b = react_1.useState(""), error = _b[0], setError = _b[1];
    react_1.useEffect(function () {
        var fetchAddress = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, data, _a, address1, address2, address3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + postalCode)];
                    case 1:
                        res = _b.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _b.sent();
                        if (data.results) {
                            _a = data.results[0], address1 = _a.address1, address2 = _a.address2, address3 = _a.address3;
                            setAddress("" + address1 + address2 + address3);
                            setError("");
                        }
                        else {
                            setError("住所が見つかりませんでした");
                            setAddress("");
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        if (postalCode.length === 7) {
            fetchAddress();
        }
        else {
            setAddress("");
            setError("");
        }
    }, [postalCode]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex flex-col md:flex-row gap-2 md:items-center" },
            React.createElement(FormLabel_1["default"], { label: "\u90F5\u4FBF\u756A\u53F7", hint: "postalCode", required: true }),
            React.createElement("input", { type: "text", value: postalCode, onChange: function (e) { return setPostalCode(e.target.value); }, placeholder: "1000001", className: "bg-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200" }),
            error && React.createElement("p", null, error)),
        React.createElement("div", { className: "flex flex-col md:flex-row gap-2 md:items-center" },
            React.createElement(FormLabel_1["default"], { label: "\u4F4F\u6240", hint: "Address", required: true }),
            React.createElement("input", { type: "text", value: address, onChange: function (e) { return setAddress(e.target.value); }, placeholder: "\u6771\u4EAC\u90FD\u00D7\u00D7\u533A\u00D7\u00D7 1-1-1", className: "bg-white p-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200" })),
        React.createElement("div", { className: "flex flex-col md:flex-row gap-2 md:items-center" },
            React.createElement(FormLabel_1["default"], { label: "\u5EFA\u7269\u540D", hint: "building", required: false }),
            React.createElement("input", { type: "text", value: building, onChange: function (e) { return setBuilding(e.target.value); }, placeholder: "\u00D7\u00D7\u30DE\u30F3\u30B7\u30E7\u30F3 101\u53F7\u5BA4", className: "bg-white p-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200" }))));
};
exports["default"] = AddressField;
