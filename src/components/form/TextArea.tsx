type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
  maxLength?: number;
};

/**
 * テキストエリア用コンポーネント
 *
 * @param param0
 * @returns
 */
const TextArea: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
  className,
  maxLength,
}) => {
  return (
    <div className="flex w-full">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={className}
        maxLength={maxLength}
      />
    </div>
  );
};

export default TextArea;
