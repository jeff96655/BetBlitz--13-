import { useEffect } from "react";
import Footer from "../components/footer";
import FrameComponent from "../components/frame-component";
import Header from "../components/header";

const BetBlitzOfficial = () => {
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
  return (
    <div className="w-full h-[5290px] relative [background:linear-gradient(90.38deg,_#f11d00,_#8b1100)] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-center text-xl text-whitesmoke font-inknut-antiqua md:h-[6900px]">
      <div className="w-[971px] !m-[0] absolute top-[172px] left-[0px] flex flex-row items-center justify-end gap-[424px] z-[0] text-left text-21xl text-black lg:w-[1000px] lg:gap-[270px] lg:items-center lg:justify-center lg:pr-[200px] lg:box-border md:flex-col md:gap-[1px] md:pr-[590px] md:pb-[111px] md:box-border sm:pr-[580px] sm:box-border">
        <div className="w-[25px] relative h-[17px] overflow-hidden shrink-0" />
        <div
          className="h-[103px] relative font-black inline-block [filter:drop-shadow(0px_4px_10px_#000)] [&.animate]:animate-[2s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-[26px] [&.animate]:md:animate-[2s_linear_0s_1_normal_forwards_fade-in] md:opacity-[0] [&.animate]:sm:animate-[2s_linear_0s_1_normal_forwards_fade-in] sm:opacity-[0]"
          data-animate-on-scroll
        >
          <span className="text-whitesmoke">Welcome</span>
          <span>{` `}</span>
          <span className="text-lime">to</span>
          <span>{` `}</span>
          <span className="text-yellow">BetBlitz</span>
        </div>
      </div>
      <div className="!m-[0] absolute top-[350px] left-[0px] flex flex-row items-center justify-end gap-[470px] z-[1] lg:flex-row lg:gap-[280px] lg:pr-0 lg:box-border md:w-[1000px] md:flex-row md:gap-[470px] md:items-center md:justify-end md:pt-[50px] md:pr-[970px] md:pb-[444px] md:box-border">
        <div className="w-[30px] relative h-[61px] overflow-hidden shrink-0" />
        <div className="w-[476px] relative h-[200px]">
          <img
            className="absolute top-[0px] left-[260px] w-[200px] h-[200px] object-cover [&.animate]:animate-[15s_linear_0s_infinite_alternate-reverse_forwards_bounce-top] opacity-[1] md:w-[100px] md:h-[100px]"
            alt=""
            src="/dice-cube@2x.png"
            data-animate-on-scroll
          />
          <img
            className="absolute top-[0px] left-[0px] w-[200px] h-[200px] object-cover [&.animate]:animate-[15s_linear_0s_infinite_normal_none_rotate-center] opacity-[1] md:w-[100px] md:h-[100px]"
            alt=""
            src="/football-ball@2x.png"
            data-animate-on-scroll
          />
        </div>
      </div>
      <div className="w-[1095px] !m-[0] absolute top-[636px] left-[0px] flex flex-row items-center justify-end gap-[413px] z-[2] lg:pr-[200px] lg:box-border md:flex-row md:gap-[413px] md:pr-[690px] md:pb-0 md:box-border sm:pr-[670px] sm:box-border">
        <div className="w-[33px] relative h-[85px] overflow-hidden shrink-0" />
        <div
          className="h-[312px] w-[702px] relative font-medium inline-block shrink-0 [text-shadow:0px_4px_4px_#000] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-lg md:w-[395px]"
          data-animate-on-scroll
        >
          Your premier destination for daily football betting tips and exclusive
          VIP packages designed to skyrocket your winning potential. Whether
          you're a die-hard football fan or a seasoned bettor, BetBlitz is your
          ultimate platform for expert insights, meticulous analysis, and
          unparalleled success in football betting.
        </div>
      </div>
      <div className="w-[931px] !m-[0] absolute top-[931px] left-[0px] flex flex-row items-center justify-end gap-[518px] z-[3] lg:w-[740px] md:pt-[65px] md:pr-[340px] md:box-border">
        <div className="w-5 relative h-8 overflow-hidden shrink-0" />
        <img
          className="w-[390px] relative h-[390px] object-cover"
          alt=""
          src="/stadium@2x.png"
        />
      </div>
      <div className="!m-[0] absolute top-[1321px] left-[0px] flex flex-row items-center justify-end gap-[367px] z-[4] lg:w-[890px] lg:gap-[367px] lg:items-center lg:justify-end lg:pr-0 lg:box-border md:pr-[485px] md:box-border">
        <div className="w-2 relative h-[119px] overflow-hidden shrink-0" />
        <div
          className="h-[468px] w-[702px] relative font-medium inline-block shrink-0 [text-shadow:0px_4px_4px_#000] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-lg md:w-[395px]"
          data-animate-on-scroll
        >
          At BetBlitz, we're passionate about football and dedicated to
          delivering top-notch betting tips to our community of football
          enthusiasts. With years of experience in the industry, our team of
          expert tipsters leaves no stone unturned in analyzing every aspect of
          the game to provide you with the most accurate and insightful
          predictions available. From match previews to player analysis, we
          cover it all to ensure that you're equipped with the knowledge you
          need to make informed betting decisions.
        </div>
      </div>
      <div className="w-[904px] !m-[0] absolute top-[1789px] left-[3px] flex flex-row items-center justify-end gap-[513px] z-[5] lg:pr-[170px] lg:box-border md:pt-[200px] md:pr-[510px] md:box-border">
        <div className="w-[25px] relative h-[116px] overflow-hidden shrink-0" />
        <img
          className="h-[434px] w-[390px] relative object-cover [&.animate]:animate-[15s_linear_0s_infinite_normal_forwards_rotate-center] opacity-[1]"
          alt=""
          src="/chip@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="w-[862px] !m-[0] absolute top-[2223px] left-[0px] flex flex-row items-start justify-end gap-[544px] z-[6] text-21xl md:pt-[190px] md:pr-[340px] md:box-border">
        <div className="w-5 relative h-[51px] overflow-hidden shrink-0" />
        <div
          className="h-[103px] w-[300px] relative font-black inline-block shrink-0 [text-shadow:0px_4px_4px_#000] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] lg:w-[650px]"
          data-animate-on-scroll
        >
          Our Services
        </div>
      </div>
      <div className="w-[1177px] !m-[0] absolute top-[2412px] left-[-2px] flex flex-row items-start justify-end gap-[157px] z-[7] text-left text-6xl text-black font-inika lg:w-[1020px] md:flex-col md:pl-[15px] md:pt-[200px] md:pr-0 md:box-border">
        <div
          className="h-[242px] w-[394px] relative shadow-[0px_0px_100px_rgba(0,_0,_0,_0.7)] rounded-xl [background:linear-gradient(180deg,_#fff505,_#f11d00)] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0]"
          data-animate-on-scroll
        >
          <b className="absolute top-[20px] left-[112px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.4)]">
            Free daily Tips
          </b>
          <div className="absolute top-[72px] left-[12px] text-mini text-center inline-block w-[371px]">
            With BetBlitz, every day is an opportunity to triumph. Gain access
            to our meticulously curated daily betting tips, handpicked to
            maximize your chances of success across a diverse range of leagues
            and competitions. we've got you covered with expertly crafted
            predictions that turn knowledge into profit.
          </div>
        </div>
        <div
          className="h-[242px] w-[394px] relative shadow-[0px_0px_100px_rgba(0,_0,_0,_0.7)] rounded-xl [background:linear-gradient(180deg,_#fff505,_#f11d00)] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0]"
          data-animate-on-scroll
        >
          <b className="absolute top-[20px] left-[44px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.4)]">
            Unlock the VIP Experience
          </b>
          <div className="absolute top-[72px] left-[12px] text-mini text-center inline-block w-[371px]">
            Ready to take your winnings to the next level? Dive into the
            exclusive world of BetBlitz VIP. Our VIP package offers access to
            our premium 100% sure fixed odds with guaranteed winning three times
            a week. Experience the thrill of victory with every wager, as our
            VIP fixed odds pave the way to consistent and substantial returns on
            your investment.
          </div>
        </div>
      </div>
      <div className="w-[957px] !m-[0] absolute top-[2722px] left-[3px] flex flex-row items-center justify-end gap-[460px] z-[8] text-11xl lg:pr-[150px] lg:box-border md:pt-[600px] md:pr-[600px] md:box-border">
        <div className="w-2 relative h-[46px] overflow-hidden shrink-0" />
        <div
          className="h-[154px] w-[549px] relative font-black inline-block shrink-0 [text-shadow:0px_4px_4px_#000] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-xl md:w-[300px]"
          data-animate-on-scroll
        >
          Transparency, Integrity and Trust
        </div>
      </div>
      <div className="w-[1038px] !m-[0] absolute top-[2936px] left-[3px] flex flex-row items-center justify-end gap-[386px] z-[9] text-white lg:w-[890px] md:w-[890px] md:pt-[520px] md:pr-[485px] md:box-border">
        <div className="w-[15px] relative h-[90px] overflow-hidden shrink-0" />
        <div
          className="h-[353px] w-[702px] relative font-medium inline-block shrink-0 [text-shadow:0px_4px_4px_#000] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-mini md:w-[395px]"
          data-animate-on-scroll
        >
          At BetBlitz, integrity is at the core of everything we do. We believe
          in transparency, providing you with detailed analyses, performance
          tracking, and historical data to empower your betting decisions. With
          our commitment to responsible gambling practices, you can bet with
          confidence, knowing that your journey with BetBlitz is guided by
          ethical principles and a dedication to fair play.
        </div>
      </div>
      <div className="!m-[0] absolute top-[3331px] left-[-2px] flex flex-row items-center justify-end gap-[486px] z-[10] lg:gap-[320px] md:flex-col md:gap-[486px] md:py-0 md:pr-0 md:pl-2.5 md:box-border">
        <div className="w-5 relative h-[91px] overflow-hidden shrink-0" />
        <img
          className="h-[435px] w-[390px] relative object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/darts-target-and-money@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="w-[960px] !m-[0] absolute top-[3808px] left-[0px] flex flex-row items-center justify-end gap-[404px] z-[11] text-11xl lg:w-[810px] lg:gap-[404px] md:w-[490px] md:pl-0 md:pt-[550px] md:box-border">
        <div className="w-[45px] relative h-[34px] overflow-hidden shrink-0" />
        <div
          className="h-[77px] w-[549px] relative font-black inline-block shrink-0 [text-shadow:0px_4px_4px_#000] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-xl"
          data-animate-on-scroll
        >
          Join the Winning Team
        </div>
      </div>
      <div className="w-[1038px] !m-[0] absolute top-[3939px] left-[-2px] flex flex-row items-center justify-end gap-[338px] z-[12] text-white lg:w-[880px] md:w-[410px] md:pt-[500px] md:box-border">
        <div className="w-px relative h-[70px] overflow-hidden shrink-0" />
        <div
          className="h-[353px] w-[702px] relative font-medium inline-block shrink-0 [text-shadow:0px_4px_4px_#000] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] lg:text-xl lg:w-[702px] md:text-mini md:w-[395px]"
          data-animate-on-scroll
        >
          Whether you're a casual bettor looking to add excitement to matchday
          or a serious investor seeking lucrative returns, BetBlitz is your
          ultimate destination for football betting success. Join us now and
          experience the thrill of victory with every wager. Elevate your game,
          amplify your wins, and make every matchday a triumph with BetBlitz –
          where winning is not just a possibility, but a guarantee.
        </div>
      </div>
      <div className="w-[953px] !m-[0] absolute top-[4347px] left-[7px] flex flex-row items-end justify-end gap-[410px] z-[13] text-11xl lg:w-[800px] lg:pt-2.5 lg:box-border md:flex md:w-[480px] md:pt-[500px] md:box-border">
        <div className="w-[34px] relative h-[43px] overflow-hidden shrink-0" />
        <div className="w-[549px] relative font-black inline-block shrink-0 [text-shadow:0px_4px_4px_#000] md:text-xl">
          Core team members of BetBlitz
        </div>
      </div>
      <Footer />
      <div className="!m-[0] absolute top-[5334px] left-[85px] hidden flex-col items-start justify-start gap-[70px] z-[15] font-inika md:flex md:pt-0 md:pr-[5px] md:box-border">
        <div
          className="w-[227px] h-[226px] relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          <img
            className="absolute top-[0px] left-[38px] rounded-[50%] w-[150px] h-[150px] object-cover"
            alt=""
            src="/cofounder@2x.png"
          />
          <b className="absolute top-[174px] left-[0px] inline-block w-[227px] [text-shadow:0px_4px_4px_#000]">
            <p className="m-0">{`Noel Ovide Alasdier `}</p>
            <p className="m-0">(Co-Founder)</p>
          </b>
        </div>
        <div
          className="w-[227px] h-[226px] relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          <img
            className="absolute top-[0px] left-[38px] rounded-[50%] w-[150px] h-[150px] object-cover"
            alt=""
            src="/turkey@2x.png"
          />
          <b className="absolute top-[174px] left-[0px] inline-block w-[227px] [text-shadow:0px_4px_4px_#000]">
            <p className="m-0">{`GÜLBAHAR ILHAMI `}</p>
            <p className="m-0">(BetBlitz Turkey Source)</p>
          </b>
        </div>
      </div>
      <FrameComponent />
      <div className="w-[1103px] !m-[0] absolute top-[4837px] left-[7px] flex flex-row items-center justify-end gap-[60px] z-[17] font-inika lg:w-[920px] md:hidden md:flex-row md:pt-0 md:box-border">
        <div
          className="h-[228px] w-[227px] relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          <img
            className="absolute top-[0px] left-[39px] rounded-[50%] w-[150px] h-[150px] object-cover"
            alt=""
            src="/italy@2x.png"
          />
          <b className="absolute top-[169px] left-[0px] inline-block w-[227px] [text-shadow:0px_4px_4px_#000]">
            <p className="m-0">{`Alberto Luca `}</p>
            <p className="m-0">(BetBlitz Italy Source)</p>
          </b>
        </div>
        <div
          className="h-[228px] w-[227px] relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          <img
            className="absolute top-[0px] left-[39px] rounded-[50%] w-[150px] h-[150px] object-cover"
            alt=""
            src="/cyprus@2x.png"
          />
          <b className="absolute top-[171px] left-[0px] inline-block w-[227px] [text-shadow:0px_4px_4px_#000]">
            <p className="m-0">{`Helena Sevket `}</p>
            <p className="m-0">(BetBlitz Cyprus Source)</p>
          </b>
        </div>
        <div
          className="h-[228px] w-[227px] relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          <img
            className="absolute top-[0px] left-[39px] rounded-[50%] w-[150px] h-[150px] object-cover"
            alt=""
            src="/france@2x.png"
          />
          <b className="absolute top-[173px] left-[0px] inline-block w-[227px] [text-shadow:0px_4px_4px_#000]">
            <p className="m-0 whitespace-pre-wrap">Maël Dieudonné</p>
            <p className="m-0">(BetBlitz France Source)</p>
          </b>
        </div>
      </div>
      <div className="w-[305px] !m-[0] absolute top-[5884px] left-[43px] hidden flex-col items-start justify-center gap-[60px] z-[18] font-inika lg:w-[920px] md:flex md:flex-col md:pl-[35px] md:pt-[100px] md:box-border">
        <div
          className="w-[227px] h-[228px] relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          <img
            className="absolute top-[0px] left-[39px] rounded-[50%] w-[150px] h-[150px] object-cover"
            alt=""
            src="/italy@2x.png"
          />
          <b className="absolute top-[169px] left-[0px] inline-block w-[227px] [text-shadow:0px_4px_4px_#000]">
            <p className="m-0">{`Alberto Luca `}</p>
            <p className="m-0">(BetBlitz Italy Source)</p>
          </b>
        </div>
        <div
          className="w-[227px] h-[228px] relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          <img
            className="absolute top-[0px] left-[39px] rounded-[50%] w-[150px] h-[150px] object-cover"
            alt=""
            src="/cyprus@2x.png"
          />
          <b className="absolute top-[171px] left-[0px] inline-block w-[227px] [text-shadow:0px_4px_4px_#000]">
            <p className="m-0">{`Helena Sevket `}</p>
            <p className="m-0">(BetBlitz Cyprus Source)</p>
          </b>
        </div>
        <div
          className="w-[227px] h-[228px] relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          <img
            className="absolute top-[0px] left-[39px] rounded-[50%] w-[150px] h-[150px] object-cover"
            alt=""
            src="/france@2x.png"
          />
          <b className="absolute top-[173px] left-[0px] inline-block w-[227px] [text-shadow:0px_4px_4px_#000]">
            <p className="m-0 whitespace-pre-wrap">Maël Dieudonné</p>
            <p className="m-0">(BetBlitz France Source)</p>
          </b>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default BetBlitzOfficial;
