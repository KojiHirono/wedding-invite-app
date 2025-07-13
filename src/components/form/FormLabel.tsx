type Props = {
  label: string;
  hint: string;
  required?: boolean;
};

/**
 * フォームラベルコンポーネント
 *
 * @param param0
 * @returns
 */
const FormLabel: React.FC<Props> = ({ label, hint, required }) => (
  <label className="shrink-0 md:w-40">
    <div className="gap-1">
      <span>{label}</span>
      {required && <span className="text-red-500">*</span>}
    </div>
    <span>{hint}</span>
  </label>
);

export default FormLabel;
