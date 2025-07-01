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
var RadioGroup_1 = require("./form/RadioGroup");
var TextField_1 = require("./form/TextField");
var TextArea_1 = require("./form/TextArea");
var FormLabel_1 = require("./form/FormLabel");
var EmailInput_1 = require("./form/EmailInput");
var AddressField_1 = require("./form/AddressField");
var framer_motion_1 = require("framer-motion");
var AttendanceModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    var _b = react_1.useState("attending"), attendance = _b[0], setAttendance = _b[1];
    var _c = react_1.useState(""), guestCategory = _c[0], setGuestCategory = _c[1];
    var _d = react_1.useState(""), lastName = _d[0], setLastName = _d[1];
    var _e = react_1.useState(""), firstName = _e[0], setFirstName = _e[1];
    var _f = react_1.useState(""), lastKana = _f[0], setLastKana = _f[1];
    var _g = react_1.useState(""), firstKana = _g[0], setFirstKana = _g[1];
    var _h = react_1.useState(""), lastAlphabet = _h[0], setLastAlphabet = _h[1];
    var _j = react_1.useState(""), firstAlphabet = _j[0], setFirstAlphabet = _j[1];
    var _k = react_1.useState(""), email = _k[0], setEmail = _k[1];
    var _l = react_1.useState(""), domain = _l[0], setDomain = _l[1];
    var _m = react_1.useState(""), postalCode = _m[0], setPostalCode = _m[1];
    var _o = react_1.useState(""), address = _o[0], setAddress = _o[1];
    var _p = react_1.useState(""), building = _p[0], setBuilding = _p[1];
    var _q = react_1.useState(""), dietaryRestrictions = _q[0], setDietaryRestrictions = _q[1];
    var _r = react_1.useState(""), allergy = _r[0], setAllergy = _r[1];
    var _s = react_1.useState(""), dogAllegy = _s[0], setDogAllegy = _s[1];
    var _t = react_1.useState(""), message = _t[0], setMessage = _t[1];
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var formData, res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    formData = {
                        attendance: attendance,
                        guestCategory: guestCategory,
                        lastName: lastName,
                        firstName: firstName,
                        lastKana: lastKana,
                        firstKana: firstKana,
                        lastAlphabet: lastAlphabet,
                        firstAlphabet: firstAlphabet,
                        email: email,
                        domain: domain,
                        postalCode: postalCode,
                        address: address,
                        building: building,
                        dietaryRestrictions: dietaryRestrictions,
                        allergy: allergy,
                        dogAllegy: dogAllegy,
                        message: message
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:8080/api/weddingInvite", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(formData)
                        })];
                case 2:
                    res = _a.sent();
                    if (res.ok) {
                        onClose();
                    }
                    else {
                        alert("送信失敗。。。");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("エラー：", error_1);
                    alert("通信エラーが発生しました。");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(framer_motion_1.AnimatePresence, null, isOpen && (React.createElement(framer_motion_1.motion.form, { onSubmit: handleSubmit, className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
        React.createElement(framer_motion_1.motion.div, { className: "bg-[url('/images/brigeGroomIntoro.jpg')] rounded-2xl shadow-lg w-full md:max-w-3xl relative max-h-screen overflow-hidden", initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: 50, opacity: 0 }, transition: { duration: 0.3 } },
            React.createElement("div", { className: "max-h-screen overflow-y-auto space-y-4 p-6" },
                React.createElement("button", { type: "button", onClick: onClose, className: "block ml-auto border bg-white text-green-800 border-gray-300 rounded-lg px-4 py-2 font-bold" }, "\u00D7 \u3068\u3058\u308B"),
                React.createElement("div", { className: "flex gap-2 items-center justify-center mb-14" },
                    React.createElement(RadioGroup_1.RadioGroup, { name: "attendance", value: attendance, onChange: setAttendance, options: [
                            { label: "出席", value: "attending" },
                            { label: "欠席", value: "absent" },
                            { label: "保留", value: "pending" },
                        ], className: "py-10" })),
                React.createElement("div", { className: "flex flex-col md:flex-row gap-2 md:items-center" },
                    React.createElement(FormLabel_1["default"], { label: "\u30B2\u30B9\u30C8\u30AB\u30C6\u30B4\u30EA\u30FC", hint: "Guest Category", required: true }),
                    React.createElement(RadioGroup_1.RadioGroup, { name: "guestCategory", value: guestCategory, onChange: setGuestCategory, options: [
                            { label: "新郎側ゲスト", value: "groom" },
                            { label: "新婦側ゲスト", value: "brige" },
                        ] })),
                React.createElement("div", { className: "flex flex-col md:flex-row gap-2 md:items-center" },
                    React.createElement(FormLabel_1["default"], { label: "\u540D\u524D", hint: "Name", required: true }),
                    React.createElement(TextField_1["default"], { name: "lastName", placeholder: "\u8429\u91CE", value: lastName, onChange: setLastName }),
                    React.createElement(TextField_1["default"], { name: "firstName", placeholder: "\u5343\u5C0B", value: firstName, onChange: setFirstName })),
                React.createElement("div", { className: "flex flex-col md:flex-row gap-2 md:items-center" },
                    React.createElement(FormLabel_1["default"], { label: "\u304B\u306A", hint: "Kana", required: true }),
                    React.createElement(TextField_1["default"], { name: "lastKana", placeholder: "\u306F\u304E\u306E", value: lastKana, onChange: setLastKana }),
                    React.createElement(TextField_1["default"], { name: "firstKana", placeholder: "\u3061\u3072\u308D", value: firstKana, onChange: setFirstKana })),
                React.createElement("div", { className: "flex flex-col md:flex-row gap-2 md:items-center" },
                    React.createElement(FormLabel_1["default"], { label: "\u30ED\u30FC\u30DE\u5B57", hint: "Latin Alphabet", required: true }),
                    React.createElement(TextField_1["default"], { name: "lastAlphabet", placeholder: "hagino", value: lastAlphabet, onChange: setLastAlphabet }),
                    React.createElement(TextField_1["default"], { name: "firstAlphabet", placeholder: "chihiro", value: firstAlphabet, onChange: setFirstAlphabet })),
                React.createElement("div", { className: "flex flex-col md:flex-row gap-2 md:items-center" },
                    React.createElement(FormLabel_1["default"], { label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", hint: "Email Address", required: true }),
                    React.createElement(EmailInput_1["default"], { email: email, setEmail: setEmail, domain: domain, setDomain: setDomain })),
                React.createElement(AddressField_1["default"], { postalCode: postalCode, setPostalCode: setPostalCode, address: address, setAddress: setAddress, building: building, setBuilding: setBuilding }),
                React.createElement("div", { className: "flex flex-col md:flex-row gap-2 md:items-center" },
                    React.createElement(FormLabel_1["default"], { label: "\u98DF\u4E8B\u5236\u9650", hint: "Dietary Restrictions", required: true }),
                    React.createElement(RadioGroup_1.RadioGroup, { name: "dietaryRestrictions", value: dietaryRestrictions, onChange: setDietaryRestrictions, options: [
                            { label: "あり", value: "with" },
                            { label: "なし", value: "without" },
                        ] })),
                React.createElement("div", { className: "flex flex-col md:flex-row gap-2 md:items-center" },
                    React.createElement(FormLabel_1["default"], { label: "\u30A2\u30EC\u30EB\u30AE\u30FC", hint: "Allergy", required: false }),
                    React.createElement(TextArea_1["default"], { name: "allergy", value: allergy, onChange: setAllergy, placeholder: "\u3048\u3073\u3000\u304B\u306B\u3000\u305D\u3070\u3000\u5375\u3000\u4E73\u3000\u3069\u3093\u3050\u308A\u3000etc." })),
                React.createElement("div", { className: "flex flex-col md:flex-row gap-2 md:items-center" },
                    React.createElement(FormLabel_1["default"], { label: "\u72AC\u30A2\u30EC\u30EB\u30AE\u30FC", hint: "Dog Allegy", required: true }),
                    React.createElement(RadioGroup_1.RadioGroup, { name: "dogAllegy", value: dogAllegy, onChange: setDogAllegy, options: [
                            { label: "あり", value: "with" },
                            { label: "なし", value: "without" },
                        ] })),
                React.createElement("div", { className: "flex flex-col md:flex-row gap-2 md:items-center" },
                    React.createElement(FormLabel_1["default"], { label: "\u30E1\u30C3\u30BB\u30FC\u30B8", hint: "Message", required: false }),
                    React.createElement(TextArea_1["default"], { name: "message", value: message, onChange: setMessage, placeholder: "\u3054\u81EA\u7531\u306B\u3054\u5165\u529B\u304F\u3060\u3055\u3044" })),
                React.createElement("button", { type: "submit", className: "px-4 py-2 rounded-lg border bg-gradient-to-r from-[#739A94] via-[#637863] to-[#555A38] text-white" }, "\u9001\u4FE1")))))));
};
exports["default"] = AttendanceModal;
