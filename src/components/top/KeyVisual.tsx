import { useCallback, useEffect, useRef, useState } from "react";
import { KeyVisualColumn } from "./KeyVisualColumn";

export const KeyVisual = () => {
  const [isLabelVisible, setIsLabelVisible] = useState(true);
  const isAnimated = useRef(false);

  const toggleVisibility = useCallback(() => {
    if (isAnimated.current) return;
    if (window.scrollY > 10) {
      isAnimated.current = true;
      setIsLabelVisible(false);
    }
  }, [isAnimated, setIsLabelVisible]);

  useEffect(() => {
    const keyVisuals = document.getElementById("key-visuals") as HTMLElement;
    window.addEventListener("scroll", toggleVisibility);
    setTimeout(() => {
      for (let i = 0; i < keyVisuals?.children.length; i++) {
        const child = keyVisuals?.children[i];
        child.classList.add("animate-infiniteScrollKeyVisual");
      }
    }, 3000);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  return (
    <div className="w-hull h-screen overflow-hidden relative">
      <div id="key-visuals">
        <ul>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "1-1", right: "1-2" }}
              leftAnimateClass="animate-sixthFadeOutPanel"
              rightAnimateClass="animate-firstFadeOutPanel"
              isLeftSquare={false}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "2-1", right: "2-2" }}
              leftAnimateClass="animate-secondFadeOutPanel"
              rightAnimateClass="animate-fifthFadeOutPanel"
              isLeftSquare={true}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "3-2", right: "3-1" }}
              leftAnimateClass="animate-seventhFadeOutPanel"
              rightAnimateClass="animate-thirdFadeOutPanel"
              isLeftSquare={false}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "4-2", right: "4-1" }}
              leftAnimateClass="animate-fourthFadeOutPanel"
              rightAnimateClass="animate-eighthFadeOutPanel"
              isLeftSquare={true}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "5-1", right: "5-2" }}
              isLeftSquare={false}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "6-1", right: "6-2" }}
              isLeftSquare={true}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "7-2", right: "7-1" }}
              isLeftSquare={false}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "8-2", right: "8-1" }}
              isLeftSquare={true}
            />
          </li>
        </ul>
        <ul>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "1-1", right: "1-2" }}
              isLeftSquare={false}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "2-1", right: "2-2" }}
              isLeftSquare={true}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "3-2", right: "3-1" }}
              isLeftSquare={false}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "4-2", right: "4-1" }}
              isLeftSquare={true}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "5-1", right: "5-2" }}
              isLeftSquare={false}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "6-1", right: "6-2" }}
              isLeftSquare={true}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "7-2", right: "7-1" }}
              isLeftSquare={false}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "8-2", right: "8-1" }}
              isLeftSquare={true}
            />
          </li>
        </ul>
      </div>
      <span
        className={`absolute bottom-32 inset-x-0 z-10 block bg-themeGray py-1 px-6 font-lora w-fit mx-auto text-clay rounded-full ${
          isLabelVisible ? "" : "transition opacity-0 duration-1000"
        }`}
      >
        Scroll
      </span>
    </div>
  );
};
