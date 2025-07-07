import { Controller, Control, FieldErrors } from "react-hook-form";

import { AttendanceForm } from "../AttendanceModal";
import TextField from "./TextField";
import TextArea from "./TextArea";

type Props = {
  name: keyof AttendanceForm;
  control: Control<AttendanceForm>;
  errors?: FieldErrors<AttendanceForm>;
  placeholder: string;
  isTextArea?: boolean;
  isFlexHarf?: boolean;
};

const ControllerTextField: React.FC<Props> = ({
  name,
  control,
  errors,
  placeholder,
  isTextArea = false,
  isFlexHarf = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const hasError = !!errors?.[name];
        const inputClass = hasError
          ? `bg-white p-2 rounded-lg outline-none ring-2 ring-red-200 ${
              isFlexHarf ? "flex-[1/2]" : "flex-1"
            }`
          : `bg-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 ${
              isFlexHarf ? "flex-[1/2]" : "flex-1"
            }`;
        return (
          <div className="flex w-full flex-col">
            {isTextArea ? (
              <TextArea
                value={field.value ?? ""}
                onChange={field.onChange}
                placeholder={placeholder}
                className={inputClass}
              />
            ) : (
              <TextField
                value={field.value ?? ""}
                onChange={field.onChange}
                placeholder={placeholder}
                className={inputClass}
              />
            )}
            {/* {errors?.[name] && (
              <p className="text-red-500 text-left">{errors[name]?.message}</p>
            )} */}
          </div>
        );
      }}
    />
  );
};

export default ControllerTextField;
