import Image from "next/image";
import { motion } from "framer-motion";

const BrideGroomIntro = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative mx-2.5 md:mx-10 text-black"
      >
        <Image
          src="/images/brigeGroomIntoroLayer2.png"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          alt=""
        />
        <div className="rounded-2xl shadow-2xl bg-[url('/images/brigeGroomIntoro.jpg')] bg-cover bg-center px-2 py-14 mb-10 mx-2.5 md:mx-auto">
          <Image
            src="/images/brigeGroomIntoroLayer.png"
            width={0}
            height={0}
            sizes="100vw"
            className="mx-auto w-24 md:w-50 mb-10"
            alt=""
          />
          <div className="text-center space-y-5 md:space-y-10">
            <div>
              <p>
                皆さまいかがお過ごしでしょうか
                <br />
                このたび私たちは結婚式を挙げることになりました
                <br />
                つきましてはご挨拶をかねて
                <br />
                ささやかなパーティーを催したいと思います
                <br />
                ご多用中誠に恐縮ではございますが
                <br />
                ぜひご出席いただきたくご案内申し上げます
                <br />
              </p>
            </div>
            <div>
              <p>敬具</p>
              <p>令和7年7月吉日</p>
            </div>
            <div>
              <p>廣野　晃司</p>
              <p>廣野　有希</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BrideGroomIntro;
