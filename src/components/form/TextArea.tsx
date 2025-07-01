type Props = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

const TextArea: React.FC<Props> = ({ name, placeholder, value, onChange }) => {
  return (
    <div className="flex w-full">
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-white p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
      />
    </div>
  );
};

export default TextArea;
