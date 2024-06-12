import { useState, useCallback } from "react";
import Menu from "./menu";
import PortalPopup from "./portal-popup";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  const [isMenuPopupOpen, setMenuPopupOpen] = useState(false);

  const onFrameButtonClick = useCallback(() => {
    window.open("https://t.me/Marquis_BetBlitz_CEO");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://t.me/BetBlitzOfficial1");
  }, []);

  const openMenuPopup = useCallback(() => {
    setMenuPopupOpen(true);
  }, []);

  const closeMenuPopup = useCallback(() => {
    setMenuPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className={`w-[1728px] fixed !m-[0] top-[0px] left-[0px] [backdrop-filter:blur(20px)] bg-gray h-[70px] overflow-hidden shrink-0 z-[19] ${className}`}
      >
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[20px] left-[719px] w-[115px] h-[27px] md:hidden"
          onClick={onFrameButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_30px_#000] rounded-3xs [background:linear-gradient(90deg,_#1aff06,_#fff505)] w-[115px] h-[27px] overflow-hidden" />
          <div className="absolute top-[0px] left-[9px] text-2xs font-black font-inknut-antiqua text-black text-center inline-block w-[97px] h-[22px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.7)]">
            Join VIP
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[22px] left-[502px] w-[115px] h-[27px] md:hidden"
          onClick={onFrameButton1Click}
        >
          <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_30px_#000] rounded-3xs [background:linear-gradient(90deg,_#fff505,_#1aff06)] w-[115px] h-[27px] overflow-hidden" />
          <div className="absolute top-[0px] left-[9px] text-2xs font-black font-inknut-antiqua text-black text-center inline-block w-[97px] h-[22px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.7)]">
            Free daily Tips
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[21px] left-[376px] w-10 h-[31px] hidden md:flex"
          onClick={openMenuPopup}
        >
          <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_#000] rounded-xl bg-white w-10 h-[5px] overflow-hidden" />
          <div className="absolute top-[13px] left-[0px] shadow-[0px_4px_4px_#000] rounded-xl bg-white w-10 h-[5px] overflow-hidden" />
          <div className="absolute top-[26px] left-[0px] shadow-[0px_4px_4px_#000] rounded-xl bg-white w-10 h-[5px] overflow-hidden" />
        </button>
        <img
          className="absolute top-[1px] left-[21px] w-[70px] h-[70px] overflow-hidden object-cover"
          alt=""
          src="/frame-14@2x.png"
        />
      </div>
      {isMenuPopupOpen && (
        <PortalPopup placement="Top right">
          <Menu onClose={closeMenuPopup} />
        </PortalPopup>
      )}
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
