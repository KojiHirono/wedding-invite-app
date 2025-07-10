import Image from "next/image";
import { motion } from "framer-motion";

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
          <div className="relative z-20 bg-[url('/images/countDownTimerBg.jpg')] bg-[position:0%_50%] bg-no-repeat bg-cover border-8 border-custom-green-5 shadow-lg w-fit m-auto p-10 md:px-10 md:py-20 text-center space-y-2.5">
            <h2 className="text-3xl md:text-5xl font-bold">EVENT</h2>
            <p>2025年10月10日（金）</p>
            <h3 className="font-bold">◇挙式◇</h3>
            <div>
              <p>12時00分（受付　11時00分）</p>
              <p className="text-xs md:text-base text-red-500">
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
            className="absolute z-30 md:z-10 top-[200px] md:bottom-0 md:right-1 w-[200px] md:w-[200px] h-auto"
            alt=""
          />
        </motion.div>
      </div>
    </>
  );
}
