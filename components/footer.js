import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
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
    window.open("https://t.me/Marquis_BetBlitz_CEO");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.location.href =
      "mailto:marquiskazimiez96655@gmail.com?subject=Hello there";
  }, []);

  return (
    <div
      className={`!m-[0] absolute top-[5137px] left-[7px] flex flex-col items-start justify-start gap-[90px] z-[14] text-left text-mini text-white font-inika md:pt-[1620px] md:box-border ${className}`}
    >
      <div className="w-[29px] relative h-4 overflow-hidden shrink-0 z-[0]" />
      <div className="w-[303px] relative h-7 z-[1]">
        <div className="absolute top-[0px] left-[31px] inline-block w-[272px] h-7 [text-shadow:0px_4px_4px_#000]">
          2024 BetBlitz. All Rights Reserved.
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-5 h-5 overflow-hidden object-cover"
          alt=""
          src="/frame-11@2x.png"
        />
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] w-[50px] h-[50px] absolute !m-[0] top-[42px] left-[117px] overflow-hidden shrink-0 bg-[url('/frame-53@3x.png')] bg-cover bg-no-repeat bg-[top] hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0] z-[2] md:flex"
        onClick={onFrameButtonClick}
        data-animate-on-scroll
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] w-[50px] h-[50px] absolute !m-[0] top-[42px] left-[226px] overflow-hidden shrink-0 bg-[url('/frame-52@3x.png')] bg-cover bg-no-repeat bg-[top] hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0] z-[3] md:flex"
        onClick={onFrameButton1Click}
        data-animate-on-scroll
      />
      <img
        className="w-[150px] h-[150px] absolute !m-[0] top-[-150px] left-[126px] rounded-[50%] object-cover hidden z-[4] md:flex"
        alt=""
        src="/founder@2x.png"
      />
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
