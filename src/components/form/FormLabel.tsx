type Props = {
  label: string;
  hint: string;
  required?: boolean;
};

const FormLabel: React.FC<Props> = ({ label, hint, required }) => (
  <label className="md:w-40 shrink-0">
    <div className="gap-1">
      <span>{label}</span>
      {required && <span className="text-red-500">*</span>}
    </div>
    <span>{hint}</span>
  </label>
);

export default FormLabel;
