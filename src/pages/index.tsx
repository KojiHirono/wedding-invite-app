import AccessMap from "@/components/AccessMap";
import BrideGroomIntro from "@/components/BrideGroomIntro";
import CountdownTimer from "@/components/CountdownTimer";
import GreetingSection from "@/components/GreetingSection";
import InvitationCover from "@/components/InvitationCover";
import Image from "next/image";
import { useEffect } from "react";

/**
 * ホームコンポーネント
 *
 * @returns
 */
export default function Home() {
  useEffect(() => {
    console.log(
      `   
   君、こんなところまで来たか…             
   参考にならないと思うが、楽しんでってくれ
   
ピカチュウ                     
▕▔╲┊┊┊┊┊┊┊┊┊╱▔▏
┊╲┈╲╱▔▔▔▔▔╲╱┈╱┊
┊┊╲┈╭╮┈┈┈╭╮┈╱┊┊
┊┊╱┈╰╯┈▂┈╰╯┈╲┊┊
┊┊▏╭╮▕━┻━▏╭╮▕┊┊
┊┊╲╰╯┈╲▂╱┈╰╯╱┊┊              
                                          
   出席選択で「かおなし」を悲しませないで…
`,
    );
  }, []);
  return (
    <>
      <main>
        <InvitationCover />
        <BrideGroomIntro />
        <CountdownTimer />
        <div
          // gradient-to-r が効かない端末対応
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(115,154,148,0.5), var(--color-custom-green-4))",
          }}
          className="from-custom-green-1/50 to-custom-green-4 relative bg-gradient-to-b py-12"
        >
          <GreetingSection />
          <AccessMap />
          <Image
            src="/images/footer_left.svg"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute bottom-0 left-0 w-10 md:w-20"
            alt=""
          />
          <Image
            src="/images/footer_right.svg"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute right-0 bottom-0 w-10 md:w-20"
            alt=""
          />
        </div>
      </main>
    </>
  );
}
