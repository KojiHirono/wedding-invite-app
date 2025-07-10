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
              ? "text-white"
              : "bg-white text-green-800 border-gray-300"
          } transition-colors`}
          style={
            value === opt.value
              ? {
                  backgroundImage:
                    "linear-gradient(to right, var(--color-custom-green-1), var(--color-custom-green-2), var(--color-custom-green-3))",
                }
              : {}
          }
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
