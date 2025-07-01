export default function GreetingSection() {
  return (
    <>
      <div className="md:grid md:grid-cols-3">
        <div></div>
        <div className="relative mx-auto mb-16">
          <div className="relative z-10 bg-[url('/images/countDownTimerBg.jpg')] bg-[0%_50%] bg-no-repeat bg-cover border-8 border-[#B5BEAA] shadow-lg w-fit m-auto p-10 md:p-20 text-center space-y-2.5">
            <p className="text-3xl md:text-5xl font-bold">EVENT</p>
            <p>2025年10月10日（金）</p>
            <p className="font-bold">◇挙式◇</p>
            <p>12時00分（受付　11時30分）</p>
            <p className="font-bold">◇披露宴◇</p>
            <p>13時00分（受付　12時30分）</p>
          </div>
          {/* <img
            src="/images/greetingSectionLayer.png"
            alt=""
            className="absolute z-0 -right-95 -bottom-30 w-[385px] h-auto"
          /> */}
        </div>
        <div></div>
      </div>
    </>
  );
}
