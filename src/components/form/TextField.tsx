type Props = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  pattern?: string;
  autoComplete?: string;
  maxLength?: number;
};

/**
 * テキストフィールド用コンポーネント
 *
 * @param param0
 * @returns
 */
const TextField: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
  className,
  type = "text",
  inputMode,
  pattern,
  autoComplete,
  maxLength,
}) => {
  return (
    <div className="flex w-full justify-center md:justify-start">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={className}
        inputMode={inputMode}
        pattern={pattern}
        autoComplete={autoComplete}
        maxLength={maxLength}
      />
    </div>
  );
};

export default TextField;
