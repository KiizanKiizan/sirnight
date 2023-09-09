import Image from "next/image";
import { Animation } from "../baseParts/Animation";

export const CatchCopy = () => {
  return (
    <div className="w-full bg-clay text-center">
      <div className="relative z-20">
        <Animation options={{ threshold: 1, triggerOnce: true }}>
          <h2 className="text-[10vw] sm:text-5xl !leading-[1.5em] tracking-widest font-bold mt-[100px] [writing-mode:vertical-rl] text-left inline-block mx-auto">
            好印象なコーデを
            <br />
            お届けします。
          </h2>
        </Animation>
      </div>
      <div className="relative z-10 w-full overflow-hidden -mt-[28vw] sm:-mt-32">
        <Image
          id="catchcopy"
          src="/images/keyVisuals/sub/1.webp"
          alt="catchcopy-1"
          className="origin-top"
          width={640}
          height={960}
          priority
        />
      </div>
    </div>
  );
};
