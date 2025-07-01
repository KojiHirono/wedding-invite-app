import { useState } from "react";
import { RadioGroup } from "./form/RadioGroup";
import TextField from "./form/TextField";
import TextArea from "./form/TextArea";
import FormLabel from "./form/FormLabel";
import EmailInput from "./form/EmailInput";
import AddressField from "./form/AddressField";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type AttendanceForm = {
  attendance: string;
  guestCategory: string;
  lastName: string;
  firstName: string;
  lastKana: string;
  firstKana: string;
  lastAlphabet: string;
  firstAlphabet: string;
  email: string;
  domain: string;
  postalCode: string;
  address: string;
  building: string;
  dietaryRestrictions: string;
  allergy: string;
  dogAllegy: string;
  message: string;
};

const AttendanceModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [attendance, setAttendance] = useState("attending");
  const [guestCategory, setGuestCategory] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastKana, setLastKana] = useState("");
  const [firstKana, setFirstKana] = useState("");
  const [lastAlphabet, setLastAlphabet] = useState("");
  const [firstAlphabet, setFirstAlphabet] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [building, setBuilding] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [allergy, setAllergy] = useState("");
  const [dogAllegy, setDogAllegy] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: AttendanceForm = {
      attendance,
      guestCategory,
      lastName,
      firstName,
      lastKana,
      firstKana,
      lastAlphabet,
      firstAlphabet,
      email,
      domain,
      postalCode,
      address,
      building,
      dietaryRestrictions,
      allergy,
      dogAllegy,
      message,
    };

    try {
      const res = await fetch("http://localhost:8080/api/weddingInvite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        onClose();
      } else {
        alert("送信失敗。。。");
      }
    } catch (error) {
      console.error("エラー：", error);
      alert("通信エラーが発生しました。");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.form
          onSubmit={handleSubmit}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[url('/images/brigeGroomIntoro.jpg')] rounded-2xl shadow-lg w-full md:max-w-3xl relative max-h-screen overflow-hidden"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-h-screen overflow-y-auto space-y-4 p-6">
              <button
                type="button"
                onClick={onClose}
                className="block ml-auto border bg-white text-green-800 border-gray-300 rounded-lg px-4 py-2 font-bold"
              >
                × とじる
              </button>
              <div className="flex gap-2 items-center justify-center mb-14">
                <RadioGroup
                  name="attendance"
                  value={attendance}
                  onChange={setAttendance}
                  options={[
                    { label: "出　席", value: "attending" },
                    { label: "欠　席", value: "absent" },
                    { label: "保　留", value: "pending" },
                  ]}
                  className="py-10"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <FormLabel
                  label="ゲストカテゴリー"
                  hint="Guest Category"
                  required
                />
                <RadioGroup
                  name="guestCategory"
                  value={guestCategory}
                  onChange={setGuestCategory}
                  options={[
                    { label: "新郎側ゲスト", value: "groom" },
                    { label: "新婦側ゲスト", value: "brige" },
                  ]}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <FormLabel label="名前" hint="Name" required />
                <TextField
                  name="lastName"
                  placeholder="萩野"
                  value={lastName}
                  onChange={setLastName}
                />
                <TextField
                  name="firstName"
                  placeholder="千尋"
                  value={firstName}
                  onChange={setFirstName}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <FormLabel label="かな" hint="Kana" required />
                <TextField
                  name="lastKana"
                  placeholder="はぎの"
                  value={lastKana}
                  onChange={setLastKana}
                />
                <TextField
                  name="firstKana"
                  placeholder="ちひろ"
                  value={firstKana}
                  onChange={setFirstKana}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <FormLabel label="ローマ字" hint="Latin Alphabet" required />
                <TextField
                  name="lastAlphabet"
                  placeholder="hagino"
                  value={lastAlphabet}
                  onChange={setLastAlphabet}
                />
                <TextField
                  name="firstAlphabet"
                  placeholder="chihiro"
                  value={firstAlphabet}
                  onChange={setFirstAlphabet}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <FormLabel
                  label="メールアドレス"
                  hint="Email Address"
                  required
                />
                <EmailInput
                  email={email}
                  setEmail={setEmail}
                  domain={domain}
                  setDomain={setDomain}
                />
              </div>
              <AddressField
                postalCode={postalCode}
                setPostalCode={setPostalCode}
                address={address}
                setAddress={setAddress}
                building={building}
                setBuilding={setBuilding}
              />
              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <FormLabel
                  label="食事制限"
                  hint="Dietary Restrictions"
                  required
                />
                <RadioGroup
                  name="dietaryRestrictions"
                  value={dietaryRestrictions}
                  onChange={setDietaryRestrictions}
                  options={[
                    { label: "あ　り", value: "with" },
                    { label: "な　し", value: "without" },
                  ]}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <FormLabel label="アレルギー" hint="Allergy" required={false} />
                <TextArea
                  name="allergy"
                  value={allergy}
                  onChange={setAllergy}
                  placeholder="えび　かに　そば　卵　乳　どんぐり　etc."
                />
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <FormLabel label="犬アレルギー" hint="Dog Allegy" required />
                <RadioGroup
                  name="dogAllegy"
                  value={dogAllegy}
                  onChange={setDogAllegy}
                  options={[
                    { label: "あ　り", value: "with" },
                    { label: "な　し", value: "without" },
                  ]}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <FormLabel label="メッセージ" hint="Message" required={false} />
                <TextArea
                  name="message"
                  value={message}
                  onChange={setMessage}
                  placeholder="ご自由にご入力ください"
                />
              </div>
              <button
                type="submit"
                className="px-16 py-4 rounded-lg border bg-gradient-to-r from-[#739A94] via-[#637863] to-[#555A38] text-white"
              >
                送　信
              </button>
            </div>
          </motion.div>
        </motion.form>
      )}
    </AnimatePresence>
  );
};
export default AttendanceModal;
