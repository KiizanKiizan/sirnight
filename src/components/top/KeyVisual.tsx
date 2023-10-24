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
    <div className="relative h-screen overflow-hidden">
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
              imageNames={{ left: "3-1", right: "3-2" }}
              leftAnimateClass="animate-seventhFadeOutPanel"
              rightAnimateClass="animate-thirdFadeOutPanel"
              isLeftSquare={false}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "4-1", right: "4-2" }}
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
              imageNames={{ left: "7-1", right: "7-2" }}
              isLeftSquare={false}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "8-1", right: "8-2" }}
              isLeftSquare={true}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "9-1", right: "9-2" }}
              isLeftSquare={false}
            />
          </li>
        </ul>
        <ul>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "1-2", right: "1-1" }}
              isLeftSquare={true}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "2-2", right: "2-1" }}
              isLeftSquare={false}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "3-2", right: "3-1" }}
              isLeftSquare={true}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "4-2", right: "4-1" }}
              isLeftSquare={false}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "5-2", right: "5-1" }}
              isLeftSquare={true}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "6-2", right: "6-1" }}
              isLeftSquare={false}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "7-2", right: "7-1" }}
              isLeftSquare={true}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "8-2", right: "8-1" }}
              isLeftSquare={false}
            />
          </li>
          <li>
            <KeyVisualColumn
              imageNames={{ left: "9-2", right: "9-1" }}
              isLeftSquare={true}
            />
          </li>
        </ul>
      </div>
      <span
        className={`absolute inset-x-0 bottom-32 z-10 mx-auto block w-fit rounded-full bg-themeGray px-6 py-1 font-lora text-clay ${
          isLabelVisible ? "" : "opacity-0 transition duration-1000"
        }`}
      >
        Scroll
      </span>
    </div>
  );
};
