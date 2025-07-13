import Image from "next/image";
import { motion } from "framer-motion";

/**
 * イベント情報枠コンポーネント
 *
 * @returns
 */
export default function GreetingSection() {
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative mx-auto mb-24 w-auto"
        >
          <div className="border-custom-green-5 relative z-20 m-auto w-fit space-y-2.5 border-8 bg-[url('/images/countDownTimerBg.jpg')] bg-cover bg-[position:0%_50%] bg-no-repeat p-10 text-center shadow-lg md:px-10 md:py-20">
            <h2 className="text-3xl font-bold md:text-5xl">EVENT</h2>
            <p>2025年10月10日（金）</p>
            <h3 className="font-bold">◇挙式◇</h3>
            <div>
              <p>12時00分（受付　11時00分）</p>
              <p className="text-xs text-red-500 md:text-base">
                11時45分までに挙式会場へお越しください
              </p>
            </div>
            <h3 className="font-bold">◇披露宴◇</h3>
            <p>13時00分</p>
          </div>
          <Image
            src="/images/greetingSectionLayer.png"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute top-[200px] z-30 h-auto w-[200px] md:right-1 md:bottom-0 md:z-10 md:w-[200px]"
            alt=""
          />
        </motion.div>
      </div>
    </>
  );
}
