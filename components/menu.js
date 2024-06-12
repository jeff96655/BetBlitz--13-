import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";

const Menu = ({ className = "", onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    window.open("https://t.me/BetBlitzOfficial1");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://t.me/Marquis_BetBlitz_CEO");
  }, []);

  return (
    <div
      className={`w-[226px] h-[248px] rounded-t-none rounded-br-none rounded-bl-xl [background:linear-gradient(118.04deg,_#f11d00,_#000)] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-full max-h-full ${className}`}
      data-animate-on-scroll
    >
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[92px] left-[56px] w-[115px] h-[27px]"
        onClick={onFrameButtonClick}
      >
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_30px_#000] rounded-3xs [background:linear-gradient(90deg,_#fff505,_#1aff06)] w-[115px] h-[27px] overflow-hidden" />
        <div className="absolute top-[0px] left-[9px] text-2xs font-black font-inknut-antiqua text-black text-center inline-block w-[97px] h-[22px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.7)]">
          Free daily Tips
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[152px] left-[56px] w-[115px] h-[27px]"
        onClick={onFrameButton1Click}
      >
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_30px_#000] rounded-3xs [background:linear-gradient(90deg,_#1aff06,_#fff505)] w-[115px] h-[27px] overflow-hidden" />
        <div className="absolute top-[0px] left-[9px] text-2xs font-black font-inknut-antiqua text-black text-center inline-block w-[97px] h-[22px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.7)]">
          Join VIP
        </div>
      </button>
      <div
        className="absolute top-[16px] left-[170px] w-[33.9px] h-[29.8px] cursor-pointer"
        onClick={onClose}
      >
        <div className="absolute top-[25.7px] left-[0.1px] shadow-[0px_4px_4px_#000] rounded-3xs bg-white w-10 h-[5px] overflow-hidden [transform:_rotate(-40deg)] [transform-origin:0_0]" />
        <div className="absolute top-[0.3px] left-[3.2px] shadow-[0px_4px_4px_#000] rounded-3xs bg-white w-10 h-[5px] overflow-hidden [transform:_rotate(40deg)] [transform-origin:0_0]" />
      </div>
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Menu;
