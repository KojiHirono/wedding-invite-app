import { useEffect } from "react";
import { RadioGroup } from "./form/RadioGroup";
import FormLabel from "./form/FormLabel";
import EmailInput from "./form/EmailInput";
import AddressField from "./form/AddressField";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ControllerTextField from "./form/ControllerTextField";

const ATTENDANCE = {
  ATTENDING: "1",
  ABSENT: "2",
} as const;

const GUEST_CATEGORY = {
  GROOM: "1",
  BRIDE: "2",
} as const;

const FLG = {
  TRUE: "1",
  FALES: "0",
} as const;

const schema = z.object({
  attendance: z.enum([ATTENDANCE.ATTENDING, ATTENDANCE.ABSENT]),
  guestCategory: z.enum([GUEST_CATEGORY.GROOM, GUEST_CATEGORY.BRIDE]),
  lastName: z.string().min(1, "名前を入力してください"),
  firstName: z.string().min(1, "名前を入力してください"),
  lastNameKana: z.string().min(1, "名前を入力してください"),
  firstNameKana: z.string().min(1, "名前を入力してください"),
  lastNameRomaji: z.string().min(1, "名前を入力してください"),
  firstNameRomaji: z.string().min(1, "名前を入力してください"),
  email: z.string().min(1, "メールアドレスを入力してください"),
  phone: z.string().min(1, "電話番号を入力してください"),
  domain: z.string().min(1, "ドメインを選択してください"),
  postalCode: z.string().min(1, "郵便番号を入力してください"),
  address: z.string().min(1, "住所を入力してください"),
  building: z.string().optional(),
  allergy: z.string().optional(),
  dogAllegy: z.enum([FLG.TRUE, FLG.FALES]),
  message: z.string().optional(),
});

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export type AttendanceForm = z.infer<typeof schema>;

const AttendanceModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm<AttendanceForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      attendance: ATTENDANCE.ATTENDING,
      guestCategory: GUEST_CATEGORY.GROOM,
      lastName: "",
      firstName: "",
      lastNameKana: "",
      firstNameKana: "",
      lastNameRomaji: "",
      firstNameRomaji: "",
      email: "",
      phone: "",
      domain: "@gmail.com",
      postalCode: "",
      address: "",
      building: "",
      allergy: "",
      dogAllegy: FLG.FALES,
      message: "",
    },
    mode: "onSubmit",
    // reValidateMode: "onSubmit",
  });

  const onSubmit = async (data: AttendanceForm) => {
    try {
      const res = await fetch("http://localhost:8080/api/weddingInvite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        onClose();
      } else {
        alert("送信に失敗しました。");
      }
    } catch (error) {
      console.error("エラー：", error);
      alert("通信エラーが発生しました。");
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const attendance = watch("attendance");
  const showSpeech = attendance === ATTENDANCE.ABSENT;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          noValidate
        >
          <motion.div
            className="bg-[url('/images/brigeGroomIntoro.jpg')] rounded-2xl shadow-lg w-full lg:max-w-3xl relative max-h-[90vh] overflow-hidden m-2.5"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-h-[90vh] overflow-y-auto space-y-4 p-6">
              <button
                type="button"
                onClick={onClose}
                className="block ml-auto border bg-white text-green-800 border-gray-300 rounded-lg px-4 py-2 font-bold"
              >
                × とじる
              </button>
              <div className="relative flex gap-20 items-center justify-center mb-14">
                <div className="absolute left-1/2 -translate-x-1/2">
                  <Image
                    src="/images/countDownTimerLayer3.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-20"
                    alt=""
                  />
                  <AnimatePresence>
                    {showSpeech && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute -top-5 right-15 bg-white border border-gray-300 rounded-lg px-3 py-1 shadow w-full"
                      >
                        あぁ...
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Controller
                  name="attendance"
                  control={control}
                  render={({ field }) => (
                    <>
                      <RadioGroup
                        name="attendance"
                        value={field.value}
                        onChange={field.onChange}
                        options={[
                          { label: "ご出席", value: ATTENDANCE.ATTENDING },
                          { label: "ご欠席", value: ATTENDANCE.ABSENT },
                        ]}
                        className="py-10"
                      />
                      {errors.attendance && <p>{errors.attendance.message}</p>}
                    </>
                  )}
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
                <FormLabel
                  label="ゲストカテゴリー"
                  hint="Guest Category"
                  required
                />
                <Controller
                  name="guestCategory"
                  control={control}
                  render={({ field }) => (
                    <>
                      <RadioGroup
                        name="guestCategory"
                        value={field.value}
                        onChange={field.onChange}
                        options={[
                          {
                            label: "新郎側ゲスト",
                            value: GUEST_CATEGORY.GROOM,
                          },
                          {
                            label: "新婦側ゲスト",
                            value: GUEST_CATEGORY.BRIDE,
                          },
                        ]}
                      />
                      {errors.guestCategory && (
                        <p>{errors.guestCategory.message}</p>
                      )}
                    </>
                  )}
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
                <FormLabel label="名前" hint="Name" required />
                <div className="flex w-full flex-col">
                  <div className="flex gap-2 w-full">
                    <ControllerTextField
                      name="lastName"
                      control={control}
                      errors={errors}
                      placeholder="湯"
                    />
                    <ControllerTextField
                      name="firstName"
                      control={control}
                      errors={errors}
                      placeholder="婆婆"
                    />
                  </div>
                  {(errors?.lastName || errors?.firstName) && (
                    <p className="text-red-500 text-left">
                      {errors.lastName?.message || errors.firstName?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
                <FormLabel label="かな" hint="Kana" required />
                <div className="flex w-full flex-col">
                  <div className="flex gap-2 w-full">
                    <ControllerTextField
                      name="lastNameKana"
                      control={control}
                      errors={errors}
                      placeholder="ゆ"
                    />
                    <ControllerTextField
                      name="firstNameKana"
                      control={control}
                      errors={errors}
                      placeholder="ばーば"
                    />
                  </div>
                  {(errors?.lastNameKana || errors?.firstNameKana) && (
                    <p className="text-red-500 text-left">
                      {errors.lastNameKana?.message ||
                        errors.firstNameKana?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
                <FormLabel label="ローマ字" hint="Latin Alphabet" required />
                <div className="flex w-full flex-col">
                  <div className="flex gap-2 w-full">
                    <ControllerTextField
                      name="lastNameRomaji"
                      control={control}
                      errors={errors}
                      placeholder="yu"
                    />
                    <ControllerTextField
                      name="firstNameRomaji"
                      control={control}
                      errors={errors}
                      placeholder="ba-ba"
                    />
                  </div>
                  {(errors?.lastNameRomaji || errors?.firstNameRomaji) && (
                    <p className="text-red-500 text-left">
                      {errors.lastNameRomaji?.message ||
                        errors.firstNameRomaji?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
                <FormLabel
                  label="メールアドレス"
                  hint="Email Address"
                  required
                />
                <EmailInput control={control} errors={errors} />
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
                <FormLabel label="電話番号" hint="Phone" required={false} />
                <ControllerTextField
                  name="phone"
                  control={control}
                  errors={errors}
                  placeholder="08012345678"
                />
              </div>
              <AddressField
                control={control}
                errors={errors}
                setValue={setValue}
                setError={setError}
              />
              <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
                <FormLabel label="アレルギー" hint="Allergy" required={false} />
                <ControllerTextField
                  name="allergy"
                  control={control}
                  errors={errors}
                  placeholder="えび　かに　そば　卵　乳　どんぐり　etc."
                  isTextArea
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
                <FormLabel label="犬アレルギー" hint="Dog Allegy" required />
                <Controller
                  name="dogAllegy"
                  control={control}
                  render={({ field }) => (
                    <>
                      <RadioGroup
                        name="dogAllegy"
                        value={field.value}
                        onChange={field.onChange}
                        options={[
                          { label: "あ　り", value: FLG.TRUE },
                          { label: "な　し", value: FLG.FALES },
                        ]}
                      />
                      {errors.dogAllegy && <p>{errors.dogAllegy?.message}</p>}
                    </>
                  )}
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
                <FormLabel label="メッセージ" hint="Message" required={false} />
                <ControllerTextField
                  name="message"
                  control={control}
                  errors={errors}
                  placeholder="ご自由にご入力ください"
                  isTextArea
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
