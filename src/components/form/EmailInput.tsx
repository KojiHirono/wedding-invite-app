type Props = {
  email: string;
  setEmail: (email: string) => void;
  domain: string;
  setDomain: (domain: string) => void;
};

const EmailInput: React.FC<Props> = ({
  email,
  setEmail,
  domain,
  setDomain,
}) => {
  const domainOptions = [
    "@yahoo.co.jp",
    "@gmail.com",
    "@ezweb.ne.jp",
    "@au.com",
    "@docomo.ne.jp",
    "@i.softbank.jp",
    "@softbank.ne.jp",
    "@icloud.com",
    "@outlook.com",
    "@yahoo.ne.jp",
    "その他",
  ];
  // const [customDomain, setCustomDomain] = useState("");

  // const getFullEmail = () => {
  //   const domain = selectedDomain === "その他" ? "" : selectedDomain;
  //   return `${emailId}${domain}`;
  // };

  return (
    <div className="flex gap-2 w-full">
      <input
        type="text"
        name="email"
        placeholder={domain === "その他" ? "email@example.com" : "email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white p-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
      />
      <select
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        className="bg-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
      >
        {domainOptions.map((domain) => (
          <option key={domain} value={domain}>
            {domain}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EmailInput;
