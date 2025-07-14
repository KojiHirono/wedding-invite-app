import Image from "next/image";
import { motion } from "framer-motion";

/**
 * 結婚挨拶コンポーネント
 *
 * @returns
 */
const BrideGroomIntro = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative mx-2.5 text-black md:mx-10"
      >
        <Image
          src="/images/brigeGroomIntoroLayer2.png"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
          alt=""
        />
        <div className="mx-2.5 mb-10 rounded-2xl bg-[url('/images/brigeGroomIntoro.jpg')] bg-cover bg-center px-2 py-14 shadow-2xl md:mx-auto">
          <Image
            src="/images/brigeGroomIntoroLayer.png"
            width={0}
            height={0}
            sizes="100vw"
            className="mx-auto mb-10 w-24 md:w-50"
            alt=""
          />
          <div className="space-y-5 text-center md:space-y-10">
            <div>
              <p>
                皆さまいかがお過ごしでしょうか
                <br />
                このたび私たちは
                <br />
                結婚式を挙げることになりました
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
              <p>令和7年7月吉日</p>
            </div>
            <div className="inline-block text-left">
              <p>廣野　晃司</p>
              <p>廣野　有希（旧姓：近藤）</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BrideGroomIntro;
