import { useEffect, useState } from "react";
import RadioGroup from "./form/RadioGroup";
import FormLabel from "./form/FormLabel";
import EmailInput from "./form/EmailInput";
import AddressField from "./form/AddressField";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ControllerTextField from "./form/ControllerTextField";

// 出席ステータス
const ATTENDANCE = {
  ATTENDING: "1",
  ABSENT: "2",
} as const;

// ゲストカテゴリー
const GUEST_CATEGORY = {
  GROOM: "1",
  BRIDE: "2",
} as const;

// フラグ
const FLG = {
  TRUE: "1",
  FALSE: "0",
} as const;

const MESSAGE = {
  NAME_REQUIRED: "お名前を入力してください",
  EMAIL_REQUIRED: "メールアドレスを入力してください",
  PHONE_REQUIRED: "電話番号を入力してください",
  POSTALCODE_REQUIRED: "郵便番号を入力してください",
  ADDRESS_REQUIRED: "住所を入力してください",
  MAX_TEXT_LENGTH_EXCEEDED: "文字以内で入力してください",
  NAME_KANA_INVALID_FORMAT: "ひらがなで入力してください",
  NAME_ROMAJI_INVALID_FORMAT: "ローマ字で入力してください",
} as const;

// Zodスキーマ（バリデーション）
const schema = z
  .object({
    attendance: z.enum([ATTENDANCE.ATTENDING, ATTENDANCE.ABSENT]),
    guestCategory: z.enum([GUEST_CATEGORY.GROOM, GUEST_CATEGORY.BRIDE]),
    lastName: z
      .string()
      .min(1, MESSAGE.NAME_REQUIRED)
      .max(50, "50" + MESSAGE.MAX_TEXT_LENGTH_EXCEEDED),
    firstName: z
      .string()
      .min(1, MESSAGE.NAME_REQUIRED)
      .max(50, "50" + MESSAGE.MAX_TEXT_LENGTH_EXCEEDED),
    lastNameKana: z
      .string()
      .min(1, MESSAGE.NAME_REQUIRED)
      .max(50, "50" + MESSAGE.MAX_TEXT_LENGTH_EXCEEDED)
      .regex(/^[\u3040-\u309Fー]+$/, MESSAGE.NAME_KANA_INVALID_FORMAT),
    firstNameKana: z
      .string()
      .min(1, MESSAGE.NAME_REQUIRED)
      .max(50, "50" + MESSAGE.MAX_TEXT_LENGTH_EXCEEDED)
      .regex(/^[\u3040-\u309Fー]+$/, MESSAGE.NAME_KANA_INVALID_FORMAT),
    lastNameRomaji: z
      .string()
      .min(1, MESSAGE.NAME_REQUIRED)
      .max(50, "50" + MESSAGE.MAX_TEXT_LENGTH_EXCEEDED)
      .regex(/^[A-Za-z\s'-]+$/, MESSAGE.NAME_ROMAJI_INVALID_FORMAT),
    firstNameRomaji: z
      .string()
      .min(1, MESSAGE.NAME_REQUIRED)
      .max(50, "50" + MESSAGE.MAX_TEXT_LENGTH_EXCEEDED)
      .regex(/^[A-Za-z\s'-]+$/, MESSAGE.NAME_ROMAJI_INVALID_FORMAT),
    email: z.string().min(1, MESSAGE.EMAIL_REQUIRED),
    domain: z.string().min(1, MESSAGE.NAME_REQUIRED),
    phone: z
      .string()
      .min(1, MESSAGE.PHONE_REQUIRED)
      .regex(/^\d{10,11}$/, "10桁または11桁の数字で入力してください"),
    postalCode: z
      .string()
      .min(1, MESSAGE.POSTALCODE_REQUIRED)
      .regex(/^\d{7}$/, "ハイフンなし7桁の数字で入力してください"),
    address: z
      .string()
      .min(1, MESSAGE.ADDRESS_REQUIRED)
      .max(50, "50" + MESSAGE.MAX_TEXT_LENGTH_EXCEEDED),
    building: z
      .string()
      .max(50, "50" + MESSAGE.MAX_TEXT_LENGTH_EXCEEDED)
      .optional(),
    allergy: z
      .string()
      .max(125, "125" + MESSAGE.MAX_TEXT_LENGTH_EXCEEDED)
      .optional(),
    dogAllegy: z.enum([FLG.TRUE, FLG.FALSE]),
    message: z
      .string()
      .max(125, "125" + MESSAGE.MAX_TEXT_LENGTH_EXCEEDED)
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.domain === "その他") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        ctx.addIssue({
          code: "custom",
          message: "有効なメールアドレスを入力してください",
          path: ["email"],
        });
      }
      if (data.email.length > 100) {
        ctx.addIssue({
          code: "too_big",
          maximum: 100,
          inclusive: true,
          type: "string",
          message: "半角100" + MESSAGE.MAX_TEXT_LENGTH_EXCEEDED,
          path: ["email"],
        });
      }
    } else {
      const totalLength = data.email.length + data.domain.length;
      if (!/^[^\s@]+$/.test(data.email)) {
        ctx.addIssue({
          code: "custom",
          message: "メールIDには@を含めないでください",
          path: ["email"],
        });
      }
      if (totalLength > 100) {
        ctx.addIssue({
          code: "too_big",
          maximum: 100,
          inclusive: true,
          type: "string",
          message: "ドメイン込みで半角100" + MESSAGE.MAX_TEXT_LENGTH_EXCEEDED,
          path: ["email"],
        });
      }
    }
  });

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

// フォーム型定義
export type AttendanceForm = z.infer<typeof schema>;

/**
 * 招待モーダルコンポーネント
 *
 * @param param0
 * @returns
 */
const AttendanceModal: React.FC<Props> = ({ isOpen, onClose }) => {
  // フォーム管理
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    reset,
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
      dogAllegy: FLG.FALSE,
      message: "",
    },
    mode: "onSubmit",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // データ送信
  const onSubmit = async (data: AttendanceForm) => {
    const fullEmail =
      data.domain === "その他" ? data.email : `${data.email}${data.domain}`;
    const payload = {
      ...data,
      email: fullEmail,
    };
    // 送信中
    setIsSubmitting(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/weddingInvite`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (res.ok) {
        alert("送信いたしました。");
        reset();
        onClose();
      } else {
        alert("送信に失敗しました。");
      }
    } catch (error) {
      console.error("エラー：", error);
      alert("通信エラーが発生しました。");
    } finally {
      // 送信終了
      setIsSubmitting(false);
    }
  };

  // モーダル表示時のスクロール制御
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

  // 招待ステータスの監視
  const attendance = watch("attendance");
  const showSpeech = attendance === ATTENDANCE.ABSENT;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          noValidate
        >
          <motion.div
            className="relative m-2.5 max-h-[90vh] w-full overflow-hidden rounded-2xl bg-[url('/images/brigeGroomIntoro.jpg')] shadow-lg md:max-w-3xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-h-[90vh] space-y-4 overflow-y-auto p-6">
              <button
                type="button"
                onClick={onClose}
                className="ml-auto block rounded-lg border border-gray-300 bg-white px-4 py-2 font-bold text-green-800"
              >
                × とじる
              </button>
              <div className="relative mb-14 flex items-center justify-center gap-20">
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
                        className="absolute -top-5 right-15 w-full rounded-lg border border-gray-300 bg-white px-3 py-1 shadow"
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
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
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

              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <FormLabel label="名前" hint="Name" required />
                <div className="flex w-full flex-col">
                  <div className="flex w-full flex-col gap-2 md:flex-row">
                    <ControllerTextField
                      name="lastName"
                      control={control}
                      errors={errors}
                      placeholder="湯"
                      maxLength={50}
                    />
                    <ControllerTextField
                      name="firstName"
                      control={control}
                      errors={errors}
                      placeholder="婆婆"
                      maxLength={50}
                    />
                  </div>
                  {(errors?.lastName || errors?.firstName) && (
                    <p className="text-red-500 md:text-left">
                      {errors.lastName?.message || errors.firstName?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <FormLabel label="かな" hint="Kana" required />
                <div className="flex w-full flex-col">
                  <div className="flex w-full flex-col gap-2 md:flex-row">
                    <ControllerTextField
                      name="lastNameKana"
                      control={control}
                      errors={errors}
                      placeholder="ゆ"
                      maxLength={50}
                    />
                    <ControllerTextField
                      name="firstNameKana"
                      control={control}
                      errors={errors}
                      placeholder="ばーば"
                      maxLength={50}
                    />
                  </div>
                  {(errors?.lastNameKana || errors?.firstNameKana) && (
                    <p className="text-red-500 md:text-left">
                      {errors.lastNameKana?.message ||
                        errors.firstNameKana?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <FormLabel label="ローマ字" hint="Latin Alphabet" required />
                <div className="flex w-full flex-col">
                  <div className="flex w-full flex-col gap-2 md:flex-row">
                    <ControllerTextField
                      name="lastNameRomaji"
                      control={control}
                      errors={errors}
                      placeholder="yu"
                      maxLength={50}
                    />
                    <ControllerTextField
                      name="firstNameRomaji"
                      control={control}
                      errors={errors}
                      placeholder="ba-ba"
                      maxLength={50}
                    />
                  </div>
                  {(errors?.lastNameRomaji || errors?.firstNameRomaji) && (
                    <p className="text-red-500 md:text-left">
                      {errors.lastNameRomaji?.message ||
                        errors.firstNameRomaji?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <FormLabel
                  label="メールアドレス"
                  hint="Email Address"
                  required
                />
                <EmailInput control={control} errors={errors} />
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <FormLabel label="電話番号" hint="Phone" required={false} />
                <div className="flex w-full flex-col">
                  <ControllerTextField
                    name="phone"
                    control={control}
                    errors={errors}
                    placeholder="08012345678"
                    type="tel"
                    inputMode="numeric"
                    pattern="\d{10,11}"
                    autoComplete="tel"
                    maxLength={11}
                    isFlexHarf
                  />
                  {errors?.phone && (
                    <p className="text-red-500 md:text-left">
                      {errors.phone?.message}
                    </p>
                  )}
                </div>
              </div>
              <AddressField
                control={control}
                errors={errors}
                setValue={setValue}
                setError={setError}
                clearErrors={clearErrors}
              />
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <FormLabel label="アレルギー" hint="Allergy" required={false} />
                <ControllerTextField
                  name="allergy"
                  control={control}
                  errors={errors}
                  placeholder="えび　かに　そば　卵　乳　どんぐり　etc."
                  isTextArea
                  maxLength={125}
                />
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <FormLabel label="犬アレルギー" hint="Dog Allegy" required />
                <div className="flex w-full flex-col">
                  <div className="flex flex-col gap-2 md:flex-row">
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
                              { label: "な　し", value: FLG.FALSE },
                            ]}
                          />
                          {errors.dogAllegy && (
                            <p>{errors.dogAllegy?.message}</p>
                          )}
                        </>
                      )}
                    />
                  </div>
                  <div className="inline-block text-left text-xs text-red-500 md:text-base">
                    <p>当日は愛犬が参加予定です</p>
                    <p>
                      犬アレルギーをお持ちの方は事前にお伺い出来ますと幸いです
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <FormLabel label="メッセージ" hint="Message" required={false} />
                <ControllerTextField
                  name="message"
                  control={control}
                  errors={errors}
                  placeholder="ご自由にご入力ください"
                  isTextArea
                  maxLength={125}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg border px-16 py-4 text-white"
                // gradient-to-r が効かない端末対応
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--color-custom-green-1), var(--color-custom-green-2), var(--color-custom-green-3))",
                  transition: "background-image 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage =
                    "linear-gradient(to right, var(--color-custom-green-2), var(--color-custom-green-3), var(--color-custom-green-1))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage =
                    "linear-gradient(to right, var(--color-custom-green-1), var(--color-custom-green-2), var(--color-custom-green-3))";
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-white"></span>
                    <span>送信中...</span>
                  </div>
                ) : (
                  "送　信"
                )}
              </button>
            </div>
          </motion.div>
        </motion.form>
      )}
    </AnimatePresence>
  );
};
export default AttendanceModal;
