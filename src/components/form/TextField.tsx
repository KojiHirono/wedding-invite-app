type Props = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const TextField: React.FC<Props> = ({ name, placeholder, value, onChange }) => {
  return (
    <div className="flex w-full">
      <input
        id={name}
        name={name}
        type="text"
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className=" bg-white p-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
      />
    </div>
  );
};

export default TextField;
