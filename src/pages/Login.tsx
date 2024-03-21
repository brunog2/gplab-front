import { FunctionComponent, useState } from "react";
import Header from "../components/Header";
import Footer1 from "../components/Footer1";

const Login: FunctionComponent = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameInput1Value, setFrameInput1Value] = useState("");
  return (
    <div className="relative bg-white w-full h-[1715px] overflow-hidden text-left text-13xl text-black font-ibm-plex-sans">
      <Header />
      <div className="absolute top-[553px] left-[34px] w-[590px] h-[73px]">
        <div className="absolute top-[0px] left-[0px]" />
      </div>
      <div className="absolute top-[271px] left-[421px] rounded-xl bg-lavender w-[637px] h-[788px] overflow-hidden">
        <b className="absolute top-[38px] left-[187px] text-[80px] inline-block w-[264px] h-[104px] text-gray-200">
          <span>GP</span>
          <span className="text-royalblue-100">Lab</span>
        </b>
        <div className="absolute top-[219px] left-[42px] w-[495px] h-[147px]">
          <input
            className="[border:none] [outline:none] bg-white absolute top-[53px] left-[0px] rounded-xl w-[495px] h-[94px] overflow-hidden"
            type="text"
            value={frameInputValue}
            onChange={(event) => setFrameInputValue(event.target.value)}
          />
          <b className="absolute top-[0px] left-[0px] inline-block w-[148px] h-[39px]">
            Telefone
          </b>
        </div>
        <div className="absolute top-[394px] left-[42px] w-[495px] h-[147px]">
          <input
            className="[border:none] [outline:none] bg-white absolute top-[53px] left-[0px] rounded-xl w-[495px] h-[94px] overflow-hidden"
            type="text"
            value={frameInput1Value}
            onChange={(event) => setFrameInput1Value(event.target.value)}
          />
          <b className="absolute top-[0px] left-[0px] inline-block w-[148px] h-[39px]">
            Senha
          </b>
        </div>
        <button className="cursor-pointer [border:none] py-2.5 px-[25px] bg-royalblue-100 absolute top-[668px] left-[201px] rounded-xl overflow-hidden flex flex-row items-center justify-center">
          <div className="relative text-13xl font-ibm-plex-sans text-gray-100 text-center inline-block w-[165px] shrink-0">
            Entrar
          </div>
        </button>
      </div>
      <Footer1 />
      <img
        className="absolute top-[96px] left-[24.7px] w-[268.5px] h-[45.8px] object-contain"
        alt=""
        src="/vector-5.svg"
      />
    </div>
  );
};

export default Login;
