import Image from "next/image";

export default function BrigeGroomIntoro() {
  return (
    <>
      <div className="relative max-w-prose mx-auto text-black h-screen">
        <Image
          src="/images/brigeGroomIntoroLayer2.png"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          alt=""
        />
        <div className="rounded-2xl shadow-lg bg-[url('/images/brigeGroomIntoro.jpg')] bg-cover bg-center px-4 py-14 mb-10 max-w-prose lg:mx-auto mx-2.5">
          <Image
            src="/images/brigeGroomIntoroLayer.png"
            width={0}
            height={0}
            sizes="100vw"
            className="mx-auto w-24 lg:w-50 mb-10"
            alt=""
          />
          <div className="text-center space-y-5 lg:space-y-10">
            <div>
              <p>
                皆さまいかがお過ごしでしょうか
                <br />
                このたび私たちは結婚式を挙げることになりました
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
              <p>敬具</p>
              <p>令和〇年〇月吉日</p>
            </div>
            <div>
              <p>廣野　晃司</p>
              <p>廣野　有希</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
