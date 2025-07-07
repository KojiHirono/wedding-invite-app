type Props = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  className?: string;
};

const TextField: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <div className="flex w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default TextField;
