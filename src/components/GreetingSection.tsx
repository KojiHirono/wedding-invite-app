import Image from "next/image";
import { motion } from "framer-motion";

export default function GreetingSection() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-3">
        <div></div>
        <div className="relative mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="relative z-10 bg-[url('/images/countDownTimerBg.jpg')] bg-[0%_50%] bg-no-repeat bg-cover border-8 border-[#B5BEAA] shadow-lg w-fit m-auto p-10 lg:p-20 text-center space-y-2.5"
          >
            <p className="text-3xl lg:text-5xl font-bold">EVENT</p>
            <p>2025年10月10日（金）</p>
            <p className="font-bold">◇挙式◇</p>
            <p>12時00分（受付　11時30分）</p>
            <p className="font-bold">◇披露宴◇</p>
            <p>13時00分（受付　12時30分）</p>
          </motion.div>
          <Image
            src="/images/greetingSectionLayer.png"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute z-20 lg:z-1 top-55 lg:top-40 lg:-right-95 lg:-bottom-10 w-[200px] lg:w-[385px] h-auto"
            alt=""
          />
        </div>
        <div></div>
      </div>
    </>
  );
}
