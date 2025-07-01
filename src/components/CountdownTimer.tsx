import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

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
      <div className="relative bg-[url('/images/countDownTimerBg.jpg')] bg-[0%_50%] bg-no-repeat bg-cover shadow-inner py-10">
        <img
          src="/images/countDownTimerLayer1.png"
          alt=""
          className="absolute bottom-0 left-0 w-24 md:w-72"
        />
        <img
          src="/images/countDownTimerLayer2.png"
          alt=""
          className="absolute top-0 right-0 w-24 md:w-72"
        />
        {/* <img
          src="/images/countDownTimerLayer3.png"
          alt=""
          className="absolute bottom-0 left-80 w-40"
        /> */}
        <div className="text-center">
          <p className="text-xl md:text-3xl mb-2.5">COUNTDOWN</p>
          <div className="text-5xl md:text-7xl mb-2.5">
            <p>{timeLeft.days}</p>
            <p>DAYS</p>
          </div>
        </div>
        <div className="flex justify-center gap-12">
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
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
