import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/**
 * カウントダウンコンポーネント
 *
 * @returns
 */
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  // 2025年10月10日12:00までのカウントダウン
  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      // 目標日時
      const targetDate = new Date("2025-10-10T12:00:00");
      // 現在日時
      const now = new Date();
      // 合計残り時間（ミリ秒）
      const diff = targetDate.getTime() - now.getTime();

      // 目標日時を過ぎた場合、全て「０」に設定
      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      // 日・時間・分・秒に変換
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      return { days, hours, minutes, seconds };
    };

    // 毎秒時間を更新
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <>
      <div
        style={{ fontFamily: "Jomolihar, serif" }}
        className="font-gerbera relative overflow-x-hidden overflow-y-hidden bg-[url('/images/countDownTimerBg.jpg')] bg-cover bg-[0%_50%] bg-no-repeat shadow-inner"
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
            className="absolute bottom-0 left-0 z-10 w-52 opacity-50 md:w-72"
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
            className="absolute top-0 right-0 z-10 w-52 opacity-50 md:w-72"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="relative z-20 text-center"
        >
          <p className="mb-2.5 text-xl md:text-3xl">COUNTDOWN</p>
          <div className="mb-2.5 text-5xl md:text-7xl">
            <p>{timeLeft.days}</p>
            <p>DAYS</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="relative z-20 flex justify-center gap-12"
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
