import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const InvitationCover = () => {
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(true);

  // ページ初期ロード時に、ストロークアニメーション中はスクロール禁止にし、
  // アニメーション終了後にスクロールを許可して別のアニメーションを開始する
  useEffect(() => {
    // 強制トップにスクロール
    window.scrollTo(0, 0);

    // 初期にスクロールを制御
    document.body.style.overflow = "hidden";

    // CSSストロークアニメーション後のアニメーション
    const timer = setTimeout(() => {
      controls.start({
        top: "2rem",
        scale: 1,
        opacity: 1,
        position: "relative",
        transition: { duration: 1 },
      });

      // スクロールを許可
      document.body.style.overflow = "auto";
    }, 5000);

    return () => {
      // 時間をリセット
      clearTimeout(timer);
      // スクロールを許可
      document.body.style.overflow = "auto";
    };
  }, [controls]);

  return (
    <>
      {isAnimating && (
        <motion.div
          className="fixed inset-0 bg-white z-40"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 5, duration: 3, ease: "easeInOut" }}
          onAnimationComplete={() => setIsAnimating(false)}
        />
      )}
      <div
        // style={{ fontFamily: "Jomolihar, serif" }}
        className="text-center space-y-11 text-3xl md:text-5xl min-h-screen w-full overflow-x-hidden mb-10 font-[Jomolihar,serif]"
      >
        <motion.div
          initial={{
            position: "absolute",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            scale: 2,
            opacity: 1,
          }}
          animate={controls}
          className="z-50 pt-11"
        >
          <svg viewBox="0 0 500 100" className="w-full max-w-xl mx-auto">
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="animated-text"
            >
              INVITATION
            </text>
          </svg>
        </motion.div>
        <Image
          src="/images/InvitationCover.jpg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full"
          alt=""
          priority
        />
        <div>
          <p>KOJI & YUKI</p>
          <p className="text-2xl">2025.10.10</p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-5 absolute w-full overflow-hidden bottom-0 h-2/3">
            <motion.div
              style={{ originY: 1, willChange: "transform" }}
              animate={{
                rotate: [
                  4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0, -0.5, -1, -1.5, -2, -2.5,
                  -3, -3.5, -4,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            >
              <Image
                src="/images/plant01.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-full"
                alt=""
              />
            </motion.div>
            <motion.div
              style={{ originY: 1, willChange: "transform" }}
              animate={{
                rotate: [
                  4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0, -0.5, -1, -1.5, -2, -2.5,
                  -3, -3.5, -4,
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            >
              <Image
                src="/images/plant02.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-full"
                alt=""
              />
            </motion.div>
            <motion.div
              style={{ originY: 1, willChange: "transform" }}
              animate={{
                rotate: [
                  4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0, -0.5, -1, -1.5, -2, -2.5,
                  -3, -3.5, -4,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            >
              <Image
                src="/images/plant03.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-full"
                alt=""
              />
            </motion.div>
            <motion.div
              style={{ originY: 1, willChange: "transform" }}
              animate={{
                rotate: [
                  4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0, -0.5, -1, -1.5, -2, -2.5,
                  -3, -3.5, -4,
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            >
              <Image
                src="/images/plant04.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-full"
                alt=""
              />
            </motion.div>
            <motion.div
              style={{ originY: 1, willChange: "transform" }}
              animate={{
                rotate: [
                  4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0, -0.5, -1, -1.5, -2, -2.5,
                  -3, -3.5, -4,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            >
              <Image
                src="/images/plant05.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-full"
                alt=""
              />
            </motion.div>
          </div>
          <Image
            src="/images/plants_front.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
            alt=""
          />
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
    </>
  );
};

export default InvitationCover;
