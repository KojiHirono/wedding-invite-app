import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const targetDate = new Date("2025-10-10T12:00:00");
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      return { days, hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null; // 初回のサーバーレンダリングでは描画しない

  return (
    <>
      <div
        style={{ fontFamily: "Jomolihar, serif" }}
        className="relative bg-[url('/images/countDownTimerBg.jpg')] bg-[0%_50%] shadow-inner bg-no-repeat bg-cover overflow-x-hidden overflow-y-hidden font-gerbera"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="absolute bottom-0 left-0 w-52 md:w-72"
        >
          <Image
            src="/images/countDownTimerLayer1.png"
            width={0}
            height={0}
            sizes="100vw"
            alt=""
            className="absolute bottom-0 left-0 w-52 md:w-72 z-10 opacity-50"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="absolute top-0 right-0 w-52 md:w-72"
        >
          <Image
            src="/images/countDownTimerLayer2.png"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute top-0 right-0 w-52 md:w-72 z-10 opacity-50"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="relative text-center z-20"
        >
          <p className="text-xl md:text-3xl mb-2.5">COUNTDOWN</p>
          <div className="text-5xl md:text-7xl mb-2.5">
            <p>{timeLeft.days}</p>
            <p>DAYS</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center gap-12 relative z-20"
        >
          <div className="text-center">
            <p className="text-3xl md:text-5xl">{timeLeft.hours}</p>
            <p>HOURS</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-5xl">{timeLeft.minutes}</p>
            <p>MINUTES</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-5xl">{timeLeft.seconds}</p>
            <p>SECONDS</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CountdownTimer;
