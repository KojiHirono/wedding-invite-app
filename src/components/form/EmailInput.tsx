import { Controller, Control, FieldErrors } from "react-hook-form";
import { AttendanceForm } from "../AttendanceModal";

type Props = {
  control: Control<AttendanceForm>;
  errors?: FieldErrors<AttendanceForm>;
};

const EmailInput: React.FC<Props> = ({ control, errors }) => {
  const domainOptions = [
    "@yahoo.co.jp",
    "@gmail.com",
    "@ezweb.ne.jp",
    "@au.com",
    "@docomo.ne.jp",
    "@i.softbank.jp",
    "@softbank.ne.jp",
    "@icloud.com",
    "@outlook.com",
    "@yahoo.ne.jp",
    "その他",
  ];

  return (
    <Controller
      name="email"
      control={control}
      render={({ field: emailField }) => (
        <Controller
          name="domain"
          control={control}
          render={({ field: domainField }) => {
            const hasErrorEmail = !!errors?.email;
            const inputClassEmail = hasErrorEmail
              ? "bg-white p-2 flex-1 rounded-lg outline-none ring-2 ring-red-200 "
              : "bg-white p-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200";
            const hasErrorDomain = !!errors?.domain;
            const inputClassDomain = hasErrorDomain
              ? "bg-white p-2 flex-1 rounded-lg outline-none ring-2 ring-red-200 "
              : "bg-white p-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200";
            return (
              <>
                <div className="flex flex-col justify-start w-full">
                  <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
                    <div className="flex flex-col justify-start w-full">
                      <input
                        type="text"
                        name="email"
                        placeholder={
                          domainField.value === "その他"
                            ? "email@example.com"
                            : "email"
                        }
                        value={emailField.value}
                        onChange={emailField.onChange}
                        className={inputClassEmail}
                      />
                    </div>
                    <div>
                      <select
                        value={domainField.value}
                        onChange={domainField.onChange}
                        className={inputClassDomain}
                      >
                        {domainOptions.map((domain) => (
                          <option key={domain} value={domain}>
                            {domain}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {(errors?.email || errors?.domain) && (
                    <p className="text-red-500 text-left">
                      {errors.email?.message || errors.domain?.message}
                    </p>
                  )}
                </div>
              </>
            );
          }}
        />
      )}
    />
  );
};

export default EmailInput;
