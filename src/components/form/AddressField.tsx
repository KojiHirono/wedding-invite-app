import { useEffect } from "react";
import {
  useWatch,
  Control,
  FieldErrors,
  UseFormSetValue,
  UseFormSetError,
} from "react-hook-form";
import FormLabel from "./FormLabel";
import { AttendanceForm } from "../AttendanceModal";
import ControllerTextField from "./ControllerTextField";

type Props = {
  control: Control<AttendanceForm>;
  errors?: FieldErrors<AttendanceForm>;
  setValue: UseFormSetValue<AttendanceForm>;
  setError: UseFormSetError<AttendanceForm>;
};

const AddressField: React.FC<Props> = ({
  control,
  errors,
  setValue,
  setError,
}) => {
  const postalCode = useWatch({ control, name: "postalCode" });

  useEffect(() => {
    const fetchAddress = async () => {
      const res = await fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`,
      );
      const data = await res.json();

      if (data.results) {
        const { address1, address2, address3 } = data.results[0];
        const fullAddress = `${address1}${address2}${address3}`;
        setValue("address", fullAddress);
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
      <div className="flex flex-col md:flex-row gap-2 md:items-center">
        <FormLabel label="郵便番号" hint="postalCode" required />
        <div className="flex w-full flex-col">
          <div className="flex gap-2 w-full">
            <ControllerTextField
              name="postalCode"
              control={control}
              errors={errors}
              placeholder="1000001"
              isFlexHarf
            />
          </div>
          {errors?.postalCode && (
            <p className="text-red-500 text-left">
              {errors.postalCode?.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:items-center">
        <FormLabel label="住所" hint="Address" required />
        <div className="flex w-full flex-col">
          <div className="flex gap-2 w-full">
            <ControllerTextField
              name="address"
              control={control}
              errors={errors}
              placeholder="東京都××区×× 1-1-1"
            />
          </div>
          {errors?.address && (
            <p className="text-red-500 text-left">{errors.address?.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:items-center">
        <FormLabel label="建物名" hint="building" required={false} />
        <ControllerTextField
          name="building"
          control={control}
          errors={errors}
          placeholder="××マンション 101号室"
        />
      </div>
    </>
  );
};

export default AddressField;
