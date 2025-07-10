import { useState } from "react";
import AttendanceModal from "./AttendanceModal";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Image from "next/image";
import { motion } from "framer-motion";

const containerStyle = {
  width: "100%",
  height: "250px",
};

const center = {
  lat: 35.72637183987202,
  lng: 140.05954510947535,
};

export default function AccessMap() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative rounded-2xl bg-[url('/images/countDownTimerBg.jpg')] bg-[0%_50%] bg-no-repeat bg-cover mx-2.5 md:mx-10 p-10 md:p-20 text-center"
      >
        <p className="mb-5 md:mb-14 font-bold text-xl">アコールハーブ</p>
        <div className="md:space-y-2 mb-7">
          <p>www.accord-herbe.jp</p>
          <p>〒274-0060千葉県船橋市坪井東1丁目1-11</p>
          <p>047-461-5550</p>
        </div>
        <div className="mb-7">
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={17}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
        <div className="mb-12 md:mb-14 md:space-y-2">
          <p>お手数ではございますが</p>
          <p>8月8日までにご返信くださいますよう</p>
          <p>お願い申し上げます</p>
        </div>
        <motion.button
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          onClick={() => setModalOpen(true)}
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-custom-green-1), var(--color-custom-green-2), var(--color-custom-green-3))",
            transition: "background-image 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundImage =
              "linear-gradient(to right, var(--color-custom-green-2), var(--color-custom-green-3), var(--color-custom-green-1))";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundImage =
              "linear-gradient(to right, var(--color-custom-green-1), var(--color-custom-green-2), var(--color-custom-green-3))";
          }}
          className=" text-white px-16 py-4 rounded-4xl shadow-lg"
        >
          招待状に回答する
        </motion.button>
        <AttendanceModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
        <Image
          src="/images/accessMapLayer.png"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute bottom-0 left-0 w-24 md:w-40"
          alt=""
        />
      </motion.div>
    </>
  );
}
