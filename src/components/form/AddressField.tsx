import { useEffect } from "react";
import {
  useWatch,
  Control,
  FieldErrors,
  UseFormSetValue,
  UseFormSetError,
  UseFormClearErrors,
} from "react-hook-form";
import FormLabel from "./FormLabel";
import { AttendanceForm } from "../AttendanceModal";
import ControllerTextField from "./ControllerTextField";

type Props = {
  control: Control<AttendanceForm>;
  errors?: FieldErrors<AttendanceForm>;
  setValue: UseFormSetValue<AttendanceForm>;
  setError: UseFormSetError<AttendanceForm>;
  clearErrors: UseFormClearErrors<AttendanceForm>;
};

/**
 * アドレスフォーム用コンポーネント
 *
 * @param param0
 * @returns
 */
const AddressField: React.FC<Props> = ({
  control,
  errors,
  setValue,
  setError,
  clearErrors,
}) => {
  const postalCode = useWatch({ control, name: "postalCode" });

  // 郵便番号から住所を判断する
  useEffect(() => {
    // 住所を取得する
    const fetchAddress = async () => {
      const res = await fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`,
      );
      const data = await res.json();

      if (data.results) {
        const { address1, address2, address3 } = data.results[0];
        const fullAddress = `${address1}${address2}${address3}`;
        setValue("address", fullAddress);
        clearErrors("postalCode");
      } else {
        setValue("address", "");
        setError("postalCode", {
          type: "manual",
          message: "住所が見つかりませんでした",
        });
      }
    };

    if (postalCode?.length === 7) {
      fetchAddress();
    }
  }, [postalCode, setValue, setError]);

  return (
    <>
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <FormLabel label="郵便番号" hint="postalCode" required />
        <div className="flex w-full flex-col">
          <div className="flex w-full gap-2">
            <ControllerTextField
              name="postalCode"
              control={control}
              errors={errors}
              placeholder="1000001"
              isFlexHarf
              inputMode="numeric"
              pattern="\d{7}"
              maxLength={7}
              autoComplete="postal-code"
            />
          </div>
          {errors?.postalCode && (
            <p className="text-red-500 md:text-left">
              {errors.postalCode?.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <FormLabel label="住所" hint="Address" required />
        <div className="flex w-full flex-col">
          <div className="flex w-full gap-2">
            <ControllerTextField
              name="address"
              control={control}
              errors={errors}
              placeholder="東京都××区×× 1-1-1"
              maxLength={50}
            />
          </div>
          {errors?.address && (
            <p className="text-red-500 md:text-left">
              {errors.address?.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <FormLabel label="建物名" hint="building" required={false} />
        <ControllerTextField
          name="building"
          control={control}
          errors={errors}
          placeholder="××マンション 101号室"
          maxLength={50}
          autoComplete="address-line2"
        />
      </div>
    </>
  );
};

export default AddressField;
