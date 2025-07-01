type RadioOption = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
  className?: string;
};

export const RadioGroup: React.FC<Props> = ({
  name,
  value,
  onChange,
  options,
  className,
}) => {
  return (
    <>
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`px-4 py-2 rounded-lg border flex-1 ${className} ${
            value === opt.value
              ? "bg-gradient-to-r from-[#739A94] via-[#637863] to-[#555A38] text-white"
              : "bg-white text-green-800 border-gray-300"
          } transition-colors`}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="hidden"
          />
          {opt.label}
        </label>
      ))}
    </>
  );
};
