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

/**
 * ラジオグループ用コンポーネント
 *
 * @param param0
 * @returns
 */
const RadioGroup: React.FC<Props> = ({
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
          className={`flex-1 rounded-lg border px-4 py-2 ${className} ${
            value === opt.value
              ? "text-white"
              : "border-gray-300 bg-white text-green-800"
          } transition-colors`}
          // gradient-to-r が効かない端末対応
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

export default RadioGroup;
