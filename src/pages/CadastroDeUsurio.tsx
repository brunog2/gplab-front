import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CadastroDeUsurio: FunctionComponent = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameInput1Value, setFrameInput1Value] = useState("");
  const [frameInput2Value, setFrameInput2Value] = useState("");
  const navigate = useNavigate();

  const onGPLabClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onLogoutClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1715px] overflow-hidden text-left text-13xl text-black font-ibm-plex-sans">
      <div className="absolute top-[26px] left-[19px] rounded-lg w-[1387px] flex flex-row items-center justify-start py-2 px-5 box-border gap-[1050px]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-13xl font-bold font-ibm-plex-sans text-left inline-block"
          onClick={onGPLabClick}
        >
          <span className="text-gray-200">GP</span>
          <span className="text-royalblue-100">Lab</span>
        </button>
        <div className="flex flex-row items-start justify-start gap-[25px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-12 h-[62px] bg-[url('/public/user-male@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[55px] h-[62px] bg-[url('/public/gear@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[51px] h-[66px] bg-[url('/public/logout@3x.png')] bg-cover bg-no-repeat bg-[top]"
            onClick={onLogoutClick}
          />
        </div>
      </div>
      <div className="absolute top-[1246px] left-[-4px] bg-royalblue-100 w-[1444px] h-[469px] overflow-hidden flex flex-col items-center justify-center py-[25px] pr-[25px] pl-[22px] box-border text-base text-white">
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
      <img
        className="absolute top-[96px] left-[24.7px] w-[268.5px] h-[45.8px] object-contain"
        alt=""
        src="/vector-5.svg"
      />
      <b className="absolute top-[287px] left-[627px] inline-block w-[316px] h-[42px]">
        Cadastro de usuário
      </b>
      <input
        className="[border:none] [outline:none] bg-whitesmoke absolute top-[428px] left-[627px] rounded-xl w-[415px] h-[60px] overflow-hidden"
        type="text"
        value={frameInputValue}
        onChange={(event) => setFrameInputValue(event.target.value)}
      />
      <input
        className="[border:none] [outline:none] bg-whitesmoke absolute top-[587px] left-[627px] rounded-xl w-[415px] h-[60px] overflow-hidden"
        type="text"
        value={frameInput1Value}
        onChange={(event) => setFrameInput1Value(event.target.value)}
      />
      <input
        className="[border:none] [outline:none] bg-whitesmoke absolute top-[905px] left-[625px] rounded-xl w-[415px] h-[60px] overflow-hidden"
        type="text"
        value={frameInput2Value}
        onChange={(event) => setFrameInput2Value(event.target.value)}
      />
      <select className="absolute top-[764px] left-[787px] rounded-xl bg-whitesmoke [border:none] w-[155px] h-10 overflow-hidden py-[7px] px-[23px] box-border font-ibm-plex-sans text-xl text-silver" />
      <select className="absolute top-[764px] left-[954px] rounded-xl bg-whitesmoke [border:none] w-[88px] h-10 overflow-hidden py-[7px] px-[13px] box-border font-ibm-plex-sans text-xl text-silver" />
      <select className="absolute top-[765px] left-[680px] rounded-xl bg-whitesmoke [border:none] w-[95px] h-10 overflow-hidden py-[7px] px-[13px] box-border font-ibm-plex-sans text-xl text-silver" />
      <b className="absolute top-[375px] left-[627px] inline-block w-[148px] h-[39px]">
        Nome
      </b>
      <b className="absolute top-[534px] left-[627px] inline-block w-[148px] h-[39px]">
        Endereço
      </b>
      <b className="absolute top-[852px] left-[625px] inline-block w-[148px] h-[39px]">
        Telefone
      </b>
      <b className="absolute top-[693px] left-[627px] inline-block w-[316px] h-[39px]">
        Data de nascimento
      </b>
      <img
        className="absolute top-[764px] left-[620px] w-12 h-[42px] object-cover"
        alt=""
        src="/calendar@2x.png"
      />
      <button className="cursor-pointer [border:none] py-2.5 px-[25px] bg-royalblue-100 absolute top-[1145px] left-[1170px] rounded-xl overflow-hidden flex flex-row items-center justify-center">
        <div className="relative text-13xl font-ibm-plex-sans text-gray-100 text-center inline-block w-[165px] shrink-0">
          Cadastrar
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-2.5 px-[25px] bg-royalblue-200 absolute top-[1145px] left-[909px] rounded-xl overflow-hidden flex flex-row items-center justify-center">
        <div className="relative text-13xl font-ibm-plex-sans text-gray-100 text-center inline-block w-[165px] shrink-0">
          Cancelar
        </div>
      </button>
      <div className="absolute top-[232px] left-[-4px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-lavender w-[316px] h-[1014px] overflow-hidden text-29xl text-gray-200">
        <b className="absolute top-[91px] left-[81px] inline-block w-[157px] h-[46px]">
          <span>GP</span>
          <span className="text-royalblue-100">Lab</span>
        </b>
        <div className="absolute top-[228px] left-[16px] rounded-lg w-[284px] h-[538px] overflow-hidden flex flex-col items-start justify-center py-8 px-2.5 box-border gap-[20px] text-5xl text-black">
          <button
            className="cursor-pointer [border:none] p-2.5 bg-[transparent] overflow-hidden flex flex-row items-center justify-center gap-[10px]"
            onClick={onFrameButton2Click}
          >
            <img
              className="relative w-[30px] h-[38px] object-cover"
              alt=""
              src="/home@2x.png"
            />
            <b className="relative text-5xl inline-block font-ibm-plex-sans text-black text-left w-[116px] h-[31px] shrink-0">
              Home
            </b>
          </button>
          <div className="self-stretch relative h-[202px] overflow-hidden shrink-0">
            <div className="absolute top-[10px] left-[0px] w-[264px] h-[68px] overflow-hidden">
              <img
                className="absolute top-[10px] left-[10px] w-[29px] h-12 object-cover"
                alt=""
                src="/add-user-male@2x.png"
              />
              <b className="absolute top-[18.5px] left-[46px] inline-block w-[116px] h-[31px]">
                Cadastro
              </b>
              <img
                className="absolute top-[21px] left-[215px] w-7 h-8 object-cover"
                alt=""
                src="/expand-arrow@2x.png"
              />
            </div>
            <div className="absolute top-[78px] left-[-6px] w-[235px] h-[120px] overflow-hidden flex flex-col items-center justify-center p-2.5 box-border">
              <button
                className="cursor-pointer [border:none] py-4 px-0 bg-[transparent] overflow-hidden flex flex-row items-center justify-start gap-[10px]"
                onClick={onFrameButton3Click}
              >
                <img
                  className="relative w-[41px] h-8 object-cover"
                  alt=""
                  src="/medical-doctor@2x.png"
                />
                <b className="relative text-5xl font-ibm-plex-sans text-black text-left">
                  Médico
                </b>
              </button>
              <button className="cursor-pointer [border:none] py-4 px-0 bg-[transparent] overflow-hidden flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[41px] h-8 object-cover"
                  alt=""
                  src="/user@2x.png"
                />
                <b className="relative text-5xl font-ibm-plex-sans text-black text-left">
                  Usuário
                </b>
              </button>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] self-stretch overflow-hidden flex flex-row items-center justify-center gap-[10px]">
            <img
              className="relative w-[34px] h-[33px] object-cover"
              alt=""
              src="/gear@2x.png"
            />
            <b className="self-stretch flex-1 relative text-5xl font-ibm-plex-sans text-black text-left">
              Configurações
            </b>
          </button>
          <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] self-stretch overflow-hidden flex flex-row items-center justify-center gap-[10px]">
            <img
              className="relative w-[33px] h-[39px] object-cover"
              alt=""
              src="/logout@2x.png"
            />
            <b className="self-stretch flex-1 relative text-5xl font-ibm-plex-sans text-black text-left">
              Sair
            </b>
          </button>
        </div>
        <div className="absolute top-[804px] left-[110px] rounded-[50%] bg-white w-[60px] h-[60px]" />
        <img
          className="absolute top-[820px] left-[127px] w-[26px] h-[29px] object-cover"
          alt=""
          src="/expand-arrow@3x.png"
        />
        <div className="absolute top-[197.4px] left-[calc(50%_-_124px)] box-border w-[253px] h-1 border-t-[4px] border-solid border-white" />
      </div>
    </div>
  );
};

export default CadastroDeUsurio;
