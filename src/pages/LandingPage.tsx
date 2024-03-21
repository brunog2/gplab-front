import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: FunctionComponent = () => {
  const [rectangleInputValue, setRectangleInputValue] = useState("");
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRectangleInputClick = useCallback(() => {
    navigate("/cadastro-de-usurio");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[4360px] overflow-hidden text-left text-base text-darkslategray-100 font-ibm-plex-sans">
      <div className="absolute top-[0px] left-[0px] bg-lavender w-[1440px] h-[842px]" />
      <div className="absolute top-[1154px] left-[1440px] rounded-[50%] bg-lightskyblue w-[800px] h-[800px] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
      <div className="absolute top-[45px] left-[120px] w-[837px] h-[51px] flex flex-row items-center justify-between text-13xl text-gray-200">
        <b className="relative">
          <span>GP</span>
          <span className="text-royalblue-100">Lab</span>
        </b>
        <div className="w-[526px] flex flex-row items-center justify-between">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xl [text-decoration:underline] font-medium font-ibm-plex-sans text-royalblue-100 text-left inline-block">
            Início
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xl font-ibm-plex-sans text-darkslategray-300 text-left inline-block">
            Sobre
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xl font-ibm-plex-sans text-darkslategray-300 text-left inline-block">
            Aplicação
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xl font-ibm-plex-sans text-darkslategray-300 text-left inline-block">
            História
          </button>
        </div>
      </div>
      <div className="absolute top-[45px] left-[1102px] flex flex-row items-start justify-between text-xl text-royalblue-100">
        <div className="w-[122px] h-[51px] flex flex-col items-center justify-end">
          <button
            className="cursor-pointer p-0 bg-[transparent] relative rounded-31xl box-border w-[122px] h-[51px] border-[1px] border-solid border-royalblue-100"
            onClick={onRectangleButtonClick}
          />
          <div className="relative font-semibold mt-[-39px]">Entrar</div>
        </div>
        <div className="w-[122px] h-[51px] flex flex-col items-center justify-end text-white">
          <input
            className="[border:none] [outline:none] bg-royalblue-100 relative rounded-31xl w-[122px] h-[51px] cursor-pointer"
            type="text"
            value={rectangleInputValue}
            onChange={(event) => setRectangleInputValue(event.target.value)}
            onClick={onRectangleInputClick}
          />
          <div className="relative font-semibold mt-[-39px]">Cadastrar</div>
        </div>
      </div>
      <b className="absolute top-[247px] left-[120px] text-45xl text-gray-200">
        Lorem Ipsum
      </b>
      <div className="absolute top-[432px] left-[120px] text-darkslategray-200 inline-block w-[419px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
        viverra amet faucibus.
      </div>
      <div className="absolute top-[553px] left-[34px] w-[590px] h-[73px]">
        <div className="absolute top-[0px] left-[0px] rounded-31xl bg-white" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[8px] left-[504px] w-14 h-14">
          <img
            className="absolute top-[0px] left-[0px] w-14 h-14"
            alt=""
            src="/frame-3.svg"
          />
        </button>
        <select className="absolute top-[26px] left-[34px] bg-[transparent] [border:none] w-[152px] h-[21px] py-0 px-[26px] box-border font-ibm-plex-sans text-base text-black" />
        <select className="absolute top-[26px] left-[354px] bg-[transparent] [border:none] w-[104px] h-[21px] py-0 px-[26px] box-border font-ibm-plex-sans text-base text-black" />
      </div>
      <div className="absolute top-[870px] left-[0px] bg-royalblue-100 w-[1440px] h-[134px]" />
      <b className="absolute top-[1020px] left-[120px] text-29xl">
        Our Consulting Specialists
      </b>
      <div className="absolute top-[1122px] left-[425px] rounded-xl bg-royalblue-100 w-[285px] h-[285px]" />
      <b className="absolute top-[1266px] left-[149px] text-5xl inline-block text-gray-200 w-[155px] h-[30px]">
        Covid-19 Test
      </b>
      <div className="absolute top-[1305px] left-[149px] text-darkslategray-200 inline-block w-[241px] h-[63px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
        viverra amet faucibus.
      </div>
      <div className="absolute top-[1122px] left-[120px] rounded-xl box-border w-[285px] h-[285px] border-[1px] border-solid border-gray-200" />
      <div className="absolute top-[1162px] left-[149px] rounded-[50%] bg-aliceblue w-[92px] h-[92px]" />
      <img
        className="absolute h-[1.03%] w-[3.13%] top-[27.2%] right-[84.93%] bottom-[71.77%] left-[11.94%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <b className="absolute top-[1266px] left-[759px] text-5xl inline-block text-gray-200 w-[132px] h-[30px]">
        Suppliment
      </b>
      <div className="absolute top-[1305px] left-[759px] text-darkslategray-200 inline-block w-[241px] h-[63px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
        viverra amet faucibus.
      </div>
      <div className="absolute top-[1122px] left-[730px] rounded-xl box-border w-[285px] h-[285px] border-[1px] border-solid border-gray-200" />
      <div className="absolute top-[1162px] left-[759px] rounded-[50%] bg-aliceblue w-[92px] h-[92px]" />
      <b className="absolute top-[1266px] left-[454px] text-5xl inline-block text-white w-[136px] h-[30px]">
        Heart Lungs
      </b>
      <div className="absolute top-[1305px] left-[454px] text-white inline-block w-[241px] h-[63px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
        viverra amet faucibus.
      </div>
      <div className="absolute top-[1162px] left-[454px] rounded-[50%] bg-aliceblue w-[92px] h-[92px]" />
      <b className="absolute top-[1266px] left-[1064px] text-5xl inline-block text-gray-200 w-[159px] h-[30px]">
        Mental Health
      </b>
      <div className="absolute top-[1305px] left-[1064px] text-darkslategray-200 inline-block w-[241px] h-[63px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
        viverra amet faucibus.
      </div>
      <div className="absolute top-[1122px] left-[1035px] rounded-xl box-border w-[285px] h-[285px] border-[1px] border-solid border-gray-200" />
      <div className="absolute top-[1162px] left-[1064px] rounded-[50%] bg-aliceblue w-[92px] h-[92px]" />
      <img
        className="absolute h-[0.89%] w-[2.99%] top-[27.25%] right-[63.82%] bottom-[71.86%] left-[33.19%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute h-[0.99%] w-[3.13%] top-[27.22%] right-[42.57%] bottom-[71.79%] left-[54.31%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute h-[0.85%] w-[2.36%] top-[27.27%] right-[21.74%] bottom-[71.88%] left-[75.9%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[2013px] left-[0px] bg-lavender w-[1440px] h-[616px]" />
      <b className="absolute top-[2169px] left-[120px] text-29xl inline-block w-[502px] text-royalblue-100">
        <p className="m-0">
          <span className="text-gray-200">What</span>
          <span className="text-darkslategray-100">{` `}</span>
          <span>Our Member’s</span>
        </p>
        <p className="m-0 text-gray-200">Saying About Us</p>
      </b>
      <div className="absolute top-[2315px] left-[120px] inline-block w-[419px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
        viverra amet faucibus.
      </div>
      <div className="absolute top-[2406px] left-[371px] font-semibold inline-block w-[117px]">
        100+ Reviews
      </div>
      <img
        className="absolute top-[2391px] left-[120px] rounded-[50%] w-[52px] h-[52px] object-cover"
        alt=""
        src="/ellipse-7@2x.png"
      />
      <img
        className="absolute top-[2391px] left-[154px] rounded-[50%] w-[53px] h-[52px] object-cover"
        alt=""
        src="/ellipse-8@2x.png"
      />
      <img
        className="absolute top-[2391px] left-[189px] rounded-[50%] w-[52px] h-[52px] object-cover"
        alt=""
        src="/ellipse-9@2x.png"
      />
      <img
        className="absolute top-[2391px] left-[223px] rounded-[50%] w-[52px] h-[52px] object-cover"
        alt=""
        src="/ellipse-10@2x.png"
      />
      <img
        className="absolute top-[2391px] left-[257px] rounded-[50%] w-[53px] h-[52px] object-cover"
        alt=""
        src="/ellipse-11@2x.png"
      />
      <img
        className="absolute top-[2391px] left-[292px] rounded-[50%] w-[52px] h-[52px] object-cover"
        alt=""
        src="/ellipse-12@2x.png"
      />
      <div className="absolute top-[2169px] left-[730px] rounded-xl bg-white box-border w-[590px] h-[305px] border-[1px] border-solid border-darkgray">
        <div className="absolute top-[146px] left-[52px] inline-block w-[494px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
          viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sem velit viverra amet
          faucibus.
        </div>
        <div className="absolute top-[54px] left-[122px] font-semibold inline-block w-[132px]">
          Jane Cooper
        </div>
        <div className="absolute top-[78px] left-[122px] text-[12px] inline-block w-[132px]">
          12/4/17
        </div>
        <img
          className="absolute top-[54px] left-[506px] rounded-sm w-10 h-10"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute top-[54px] left-[466px] rounded-sm w-10 h-10"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute top-[54px] left-[426px] rounded-sm w-10 h-10"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute top-[54px] left-[386px] rounded-sm w-10 h-10"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute top-[54px] left-[346px] rounded-sm w-10 h-10"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute top-[49px] left-[52px] rounded-[50%] w-[52px] h-[52px] object-cover"
          alt=""
          src="/ellipse-10@2x.png"
        />
      </div>
      <div className="absolute top-[3389px] left-[120px] rounded-xl bg-royalblue-100 w-[1200px] h-[350px]" />
      <b className="absolute top-[1557px] left-[730px] text-29xl inline-block w-[502px]">
        Why You Choose Us?
      </b>
      <div className="absolute top-[1652px] left-[761px] inline-block w-[402px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="absolute top-[1683px] left-[761px] inline-block w-[402px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="absolute top-[1715px] left-[761px] inline-block w-[402px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="absolute top-[1749px] left-[761px] inline-block w-[402px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="absolute top-[1783px] left-[761px] inline-block w-[402px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="absolute top-[1838px] left-[730px] font-medium text-royalblue-100 inline-block w-[402px]">
        Learn More
      </div>
      <img
        className="absolute top-[1557px] left-[120px] rounded-xl w-[530px] h-[306px] object-cover"
        alt=""
        src="/rectangle-11@2x.png"
      />
      <img
        className="absolute h-[0.23%] w-[0.83%] top-[42.32%] right-[42.22%] bottom-[57.45%] left-[56.94%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/vector.svg"
      />
      <b className="absolute top-[2779px] left-[120px] text-29xl inline-block w-[502px]">
        <p className="m-0">{`The Future `}</p>
        <p className="m-0">
          <span>{`of `}</span>
          <span className="text-royalblue-100">Quality Health</span>
        </p>
      </b>
      <div className="absolute top-[2928px] left-[120px] inline-block w-[468px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
        feugiat lectus risus sed ullamcorper. Auctor semper fermentum volutpat
        integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit
        lobortis id semper.
      </div>
      <div className="absolute top-[3022px] left-[120px] inline-block w-[468px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
        feugiat lectus risus sed ullamcorper. Auctor semper fermentum volutpat
        integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit
        lobortis id semper.
      </div>
      <div className="absolute top-[3120px] left-[120px] inline-block w-[468px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
        feugiat lectus risus sed ullamcorper. sed. Nibh est sit lobortis id
        semper.
      </div>
      <div className="absolute top-[3211px] left-[120px] font-medium text-royalblue-100 inline-block w-[402px]">
        Learn More
      </div>
      <img
        className="absolute top-[2779px] left-[654px] rounded-xl w-[666px] h-[460px] object-cover"
        alt=""
        src="/rectangle-15@2x.png"
      />
      <img
        className="absolute h-[0.23%] w-[0.83%] top-[73.81%] right-[84.58%] bottom-[25.96%] left-[14.58%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[3570px] left-[242px] rounded-[150px] bg-white w-[956px] h-[85px]" />
      <div className="absolute top-[3585px] left-[1125px] rounded-[50%] bg-royalblue-100 w-14 h-14" />
      <div className="absolute top-[3481px] left-[455px] text-[40px] font-semibold text-white">
        Subscribe To Our Newsletter
      </div>
      <img
        className="absolute h-[0.23%] w-[0.83%] top-[82.75%] right-[19.51%] bottom-[17.02%] left-[79.65%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[3889px] left-[0px] bg-royalblue-100 w-[1440px] h-[471px]" />
      <div className="absolute top-[4050px] left-[120px] text-white inline-block w-[366px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
          feugiat lectus risus sed ullamcorper. Auctor semper fermentum
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
          Nibh est sit lobortis id semper.
        </p>
      </div>
      <div className="absolute top-[3986px] left-[120px] text-5xl font-semibold text-white">
        GPLab
      </div>
      <div className="absolute top-[3986px] left-[954px] text-5xl font-semibold text-white">
        Address
      </div>
      <div className="absolute top-[3986px] left-[652px] w-[136px] h-[166px] text-white">
        <div className="absolute top-[0px] left-[0px] text-5xl font-semibold">
          Useful Links
        </div>
        <div className="absolute top-[64px] left-[0px] font-medium">
          About Us
        </div>
        <div className="absolute top-[91px] left-[0px] font-medium">
          Privacy Policy
        </div>
        <div className="absolute top-[118px] left-[0px] font-medium">
          Our Mission
        </div>
        <div className="absolute top-[145px] left-[0px] font-medium">
          Our Team
        </div>
      </div>
      <div className="absolute top-[4194px] left-[120px] w-[72px] h-4 flex flex-row items-center justify-start gap-[11px]">
        <img className="relative w-4 h-4" alt="" src="/vector.svg" />
        <img className="relative w-4 h-4" alt="" src="/group-8.svg" />
        <img className="relative w-4 h-[13px]" alt="" src="/vector.svg" />
      </div>
      <img
        className="absolute top-[4050px] left-[954px] rounded-[10px] w-[366px] h-40 object-cover"
        alt=""
        src="/rectangle-18@2x.png"
      />
      <img
        className="absolute top-[4290px] left-[119.5px] max-h-full w-[1200.5px]"
        alt=""
        src="/vector-4.svg"
      />
      <div className="absolute top-[4314px] left-[624px] h-[21px] flex flex-row items-center justify-start text-center text-white">
        <img className="relative w-3.5 h-3.5" alt="" src="/vector.svg" />
        <div className="relative inline-block w-[179px] shrink-0">
          2024 All Right Reserved
        </div>
      </div>
      <img
        className="absolute top-[396.9px] left-[119.7px] w-[278.6px] h-[30.8px] object-contain"
        alt=""
        src="/vector-5.svg"
      />
      <div className="absolute top-[750px] left-[120px] w-[145px] flex flex-col items-center justify-start text-45xl text-white">
        <b className="relative">24/7</b>
        <div className="relative text-base">Online Support</div>
      </div>
      <div className="absolute top-[750px] left-[356px] w-[154px] flex flex-col items-center justify-start text-45xl text-white">
        <b className="relative">100+</b>
        <div className="relative text-base">Doctors</div>
      </div>
      <div className="absolute top-[750px] left-[601px] w-[130px] flex flex-col items-center justify-start text-45xl text-white">
        <b className="relative">1M+</b>
        <div className="relative text-base">Active Patients</div>
      </div>
      <img
        className="absolute top-[764px] left-[307px] max-w-full overflow-hidden h-[79px]"
        alt=""
        src="/vector-6.svg"
      />
      <img
        className="absolute top-[764px] left-[554px] max-w-full overflow-hidden h-[79px]"
        alt=""
        src="/vector-6.svg"
      />
      <img
        className="absolute top-[1654px] left-[730px] w-4 h-4 overflow-hidden"
        alt=""
        src="/emojionemonotoneheavycheckmark.svg"
      />
      <img
        className="absolute top-[1688px] left-[730px] w-4 h-4 overflow-hidden"
        alt=""
        src="/emojionemonotoneheavycheckmark.svg"
      />
      <img
        className="absolute top-[1720px] left-[730px] w-4 h-4 overflow-hidden"
        alt=""
        src="/emojionemonotoneheavycheckmark.svg"
      />
      <img
        className="absolute top-[1754px] left-[730px] w-4 h-4 overflow-hidden"
        alt=""
        src="/emojionemonotoneheavycheckmark.svg"
      />
      <img
        className="absolute top-[1788px] left-[730px] w-4 h-4 overflow-hidden"
        alt=""
        src="/emojionemonotoneheavycheckmark.svg"
      />
      <img
        className="absolute top-[243px] left-[690px] w-[747px] h-[494px] object-cover"
        alt=""
        src="/doctors@2x.png"
      />
    </div>
  );
};

export default LandingPage;
