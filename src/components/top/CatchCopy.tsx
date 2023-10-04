import Image from "next/image";
import { Animation } from "../baseParts/Animation";

export const CatchCopy = () => {
  return (
    <div className="w-full bg-clay text-center">
      <div className="relative z-20">
        <Animation options={{ threshold: 1, triggerOnce: true }}>
          <h2 className="mx-auto mt-[100px] inline-block text-left text-[10vw] font-bold !leading-[1.5em] tracking-widest [writing-mode:vertical-rl] sm:text-5xl">
            好印象なコーデを
            <br />
            お届けします。
          </h2>
        </Animation>
      </div>
      <div className="relative z-10 mt-[-28vw] w-full overflow-hidden sm:-mt-32">
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
