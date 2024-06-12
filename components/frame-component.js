import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
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

  const onGmailLoginClick = useCallback(() => {
    window.location.href =
      "mailto:marquiskazimiez96655@gmail.com?subject=Hello there";
  }, []);

  const onTelegramClick = useCallback(() => {
    window.open("https://t.me/Marquis_BetBlitz_CEO");
  }, []);

  return (
    <div
      className={`w-[1112px] !m-[0] absolute top-[4479px] left-[-2px] flex flex-row items-center justify-end gap-[60px] z-[16] text-center text-xl text-whitesmoke font-inika lg:w-[920px] md:hidden ${className}`}
    >
      <div
        className="h-[286px] w-[227px] relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0] md:hidden"
        data-animate-on-scroll
      >
        <img
          className="absolute top-[0px] left-[35px] rounded-[50%] w-[150px] h-[150px] object-cover"
          alt=""
          src="/founder@2x.png"
        />
        <div className="absolute top-[174px] left-[0px] w-[220px] h-[52px]">
          <b className="absolute top-[0px] left-[0px] inline-block w-[220px] [text-shadow:0px_4px_4px_#000]">
            <p className="m-0">Marquis Kazimiez</p>
            <p className="m-0">{`(Founder & CEO)`}</p>
          </b>
        </div>
        <div className="absolute top-[236px] left-[49px] w-[122px] h-[50px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[72px] w-[50px] h-[50px] bg-[url('/gmail-login@3x.png')] bg-cover bg-no-repeat bg-[top]"
            onClick={onGmailLoginClick}
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[50px] h-[50px] bg-[url('/telegram@3x.png')] bg-cover bg-no-repeat bg-[top]"
            onClick={onTelegramClick}
          />
        </div>
      </div>
      <div
        className="h-[228px] w-[227px] relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
        data-animate-on-scroll
      >
        <img
          className="absolute top-[0px] left-[39px] rounded-[50%] w-[150px] h-[150px] object-cover"
          alt=""
          src="/cofounder@2x.png"
        />
        <b className="absolute top-[176px] left-[0px] inline-block w-[227px] [text-shadow:0px_4px_4px_#000]">
          <p className="m-0">{`Noel Ovide Alasdier `}</p>
          <p className="m-0">(Co-Founder)</p>
        </b>
      </div>
      <div
        className="h-[228px] w-[227px] relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
        data-animate-on-scroll
      >
        <img
          className="absolute top-[0px] left-[39px] rounded-[50%] w-[150px] h-[150px] object-cover"
          alt=""
          src="/turkey@2x.png"
        />
        <b className="absolute top-[172px] left-[0px] inline-block w-[227px] [text-shadow:0px_4px_4px_#000]">
          <p className="m-0">{`GÜLBAHAR ILHAMI `}</p>
          <p className="m-0">(BetBlitz Turkey Source)</p>
        </b>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
