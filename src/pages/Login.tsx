import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Login: FunctionComponent = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameInput1Value, setFrameInput1Value] = useState("");
  const navigate = useNavigate();

  const onGPLabTextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1715px] overflow-hidden text-left text-13xl text-white font-ibm-plex-sans">
      <div className="absolute top-[1246px] left-[-4px] bg-royalblue-100 w-[1444px] h-[469px] overflow-hidden flex flex-col items-center justify-center py-[25px] pr-[25px] pl-[22px] box-border text-base">
        <div className="flex-1 relative w-[585.5px]">
          <div className="absolute top-[0px] left-[0px] w-[585.5px] h-[300.1px]">
            <b className="absolute top-[0px] left-[255.3px] text-5xl">GPLab</b>
            <div className="absolute top-[56px] left-[109.8px] text-justify inline-block w-[366px]">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                risus feugiat lectus risus sed ullamcorper. Auctor semper
                fermentum
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                volutpat integer vel. In rhoncus elementum nunc, malesuada mi
                sed. Nibh est sit lobortis id semper.
              </p>
            </div>
            <div className="absolute h-[5.33%] w-[12.3%] top-[68.98%] right-[43.84%] bottom-[25.69%] left-[43.86%]">
              <img
                className="absolute h-full w-[22.22%] top-[0%] right-[77.78%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
              <img
                className="absolute h-full w-[22.22%] top-[0%] right-[38.89%] bottom-[0%] left-[38.89%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-8.svg"
              />
              <img
                className="absolute h-[81.25%] w-[22.22%] top-[12.5%] right-[0%] bottom-[6.25%] left-[77.78%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
            </div>
            <img
              className="absolute top-[248px] left-[0px] w-[585px] h-0.5 object-contain"
              alt=""
              src="/vector-4.svg"
            />
            <div className="absolute top-[279.1px] left-[196.3px] w-[193px] h-[21px] text-center">
              <div className="absolute top-[0px] left-[14px] inline-block w-[179px]">
                2024 All Right Reserved
              </div>
              <img
                className="absolute h-[66.67%] w-[7.25%] top-[19.05%] right-[92.75%] bottom-[14.29%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[271px] left-[34px] w-[1024px] h-[788px] overflow-hidden text-black">
        <div className="absolute top-[282px] left-[0px] w-[590px] h-[73px]">
          <div className="absolute top-[0px] left-[0px]" />
        </div>
        <div className="absolute top-[0px] left-[387px] rounded-xl bg-lavender w-[637px] h-[788px] overflow-hidden">
          <b className="absolute top-[38px] left-[187px] text-[80px] inline-block w-[264px] h-[104px] text-gray-200">
            <span>GP</span>
            <span className="text-royalblue-100">Lab</span>
          </b>
          <div className="absolute top-[219px] left-[42px] w-[495px] h-[147px] flex flex-col items-start justify-start gap-[14px]">
            <b className="relative inline-block w-[148px] h-[39px] shrink-0">
              E-mail
            </b>
            <input
              className="[border:none] [outline:none] bg-white relative rounded-xl w-[495px] h-[94px] overflow-hidden shrink-0"
              type="text"
              value={frameInputValue}
              onChange={(event) => setFrameInputValue(event.target.value)}
            />
          </div>
          <div className="absolute top-[394px] left-[42px] w-[495px] h-[147px] flex flex-col items-start justify-start gap-[14px]">
            <b className="relative inline-block w-[148px] h-[39px] shrink-0">
              Senha
            </b>
            <input
              className="[border:none] [outline:none] bg-white relative rounded-xl w-[495px] h-[94px] overflow-hidden shrink-0"
              type="text"
              value={frameInput1Value}
              onChange={(event) => setFrameInput1Value(event.target.value)}
            />
          </div>
          <button className="cursor-pointer [border:none] py-2.5 px-[25px] bg-royalblue-100 absolute top-[668px] left-[201px] rounded-xl overflow-hidden flex flex-row items-center justify-center">
            <div className="relative text-13xl font-ibm-plex-sans text-gray-100 text-center inline-block w-[165px] shrink-0">
              Entrar
            </div>
          </button>
        </div>
      </div>
      <div className="absolute top-[30px] left-[19px] w-[1372px] h-28 overflow-hidden text-gray-200">
        <div className="absolute top-[0px] left-[0px] rounded-lg w-[1325px] flex flex-row items-center justify-start p-5 box-border gap-[990px]">
          <b className="relative cursor-pointer" onClick={onGPLabTextClick}>
            <span>GP</span>
            <span className="text-royalblue-100">Lab</span>
          </b>
          <div className="flex flex-row items-start justify-start gap-[19px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[122px] h-[51px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl box-border border-[1px] border-solid border-royalblue-100" />
              <div className="absolute top-[12px] left-[34px] text-xl font-semibold font-ibm-plex-sans text-royalblue-100 text-left">
                Entrar
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[122px] h-[51px]"
              onClick={onRectangleButton1Click}
            >
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl bg-royalblue-100" />
              <div className="absolute top-[12px] left-[15px] text-xl font-semibold font-ibm-plex-sans text-white text-left">
                Cadastrar
              </div>
            </button>
          </div>
        </div>
        <img
          className="absolute top-[66px] left-[5.7px] w-[268.5px] h-[45.8px] object-contain"
          alt=""
          src="/vector-5.svg"
        />
      </div>
    </div>
  );
};

export default Login;
