type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
};

const TextArea: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <div className="flex w-full">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default TextArea;
