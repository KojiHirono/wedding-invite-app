import { useState, useEffect } from "react";
import FormLabel from "./FormLabel";

type Props = {
  postalCode: string;
  setPostalCode: (postalCode: string) => void;
  address: string;
  setAddress: (address: string) => void;
  building: string;
  setBuilding: (building: string) => void;
};

const AddressField: React.FC<Props> = ({
  postalCode,
  setPostalCode,
  address,
  setAddress,
  building,
  setBuilding,
}) => {
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAddress = async () => {
      const res = await fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`,
      );
      const data = await res.json();
      if (data.results) {
        const { address1, address2, address3 } = data.results[0];
        setAddress(`${address1}${address2}${address3}`);
        setError("");
      } else {
        setError("住所が見つかりませんでした");
        setAddress("");
      }
    };

    if (postalCode.length === 7) {
      fetchAddress();
    } else {
      setAddress("");
      setError("");
    }
  }, [postalCode]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 md:items-center">
        <FormLabel label="郵便番号" hint="postalCode" required />
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="1000001"
          className="bg-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
        />
        {error && <p>{error}</p>}
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:items-center">
        <FormLabel label="住所" hint="Address" required />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="東京都××区×× 1-1-1"
          className="bg-white p-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:items-center">
        <FormLabel label="建物名" hint="building" required={false} />
        <input
          type="text"
          value={building}
          onChange={(e) => setBuilding(e.target.value)}
          placeholder="××マンション 101号室"
          className="bg-white p-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
        />
      </div>
    </>
  );
};

export default AddressField;
