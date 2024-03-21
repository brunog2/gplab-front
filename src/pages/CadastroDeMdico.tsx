import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CadastroDeMdico: FunctionComponent = () => {
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

  return (
    <div className="relative bg-white w-full h-[1715px] overflow-hidden text-left text-13xl text-black font-ibm-plex-sans">
      <footer className="absolute top-[1246px] left-[-4px] bg-royalblue-100 w-[1444px] h-[469px] overflow-hidden flex flex-col items-center justify-center py-[25px] pr-[25px] pl-[22px] box-border text-left text-base text-white font-ibm-plex-sans">
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
      </footer>
      <img
        className="absolute top-[96px] left-[24.7px] w-[268.5px] h-[45.8px] object-contain"
        alt=""
        src="/vector-5.svg"
      />
      <b className="absolute top-[342px] left-[634px] inline-block w-[316px] h-[42px]">
        Cadastro de médico
      </b>
      <input
        className="[border:none] [outline:none] bg-whitesmoke absolute top-[483px] left-[634px] rounded-xl w-[415px] h-[60px] overflow-hidden"
        type="text"
        value={frameInputValue}
        onChange={(event) => setFrameInputValue(event.target.value)}
      />
      <input
        className="[border:none] [outline:none] bg-whitesmoke absolute top-[642px] left-[634px] rounded-xl w-[415px] h-[60px] overflow-hidden"
        type="text"
        value={frameInput1Value}
        onChange={(event) => setFrameInput1Value(event.target.value)}
      />
      <input
        className="[border:none] [outline:none] bg-whitesmoke absolute top-[797px] left-[634px] rounded-xl w-[415px] h-[60px] overflow-hidden"
        type="text"
        value={frameInput2Value}
        onChange={(event) => setFrameInput2Value(event.target.value)}
      />
      <b className="absolute top-[430px] left-[634px] inline-block w-[148px] h-[39px]">
        Nome
      </b>
      <b className="absolute top-[589px] left-[634px] inline-block w-[148px] h-[39px]">
        CRM
      </b>
      <b className="absolute top-[744px] left-[634px] inline-block w-[148px] h-[39px]">
        Telefone
      </b>
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
      <div className="absolute top-[232px] left-[0px] bg-silver-100 w-[268px] h-[1014px] overflow-hidden" />
      <div className="absolute top-[30px] left-[26px] rounded-lg w-[1387px] flex flex-row items-center justify-start py-2 px-5 box-border gap-[1100px]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-13xl font-bold font-ibm-plex-sans text-left inline-block"
          onClick={onGPLabClick}
        >
          <span className="text-gray-200">GP</span>
          <span className="text-royalblue-100">Lab</span>
        </button>
        <div className="relative w-[124px] h-[66px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-12 h-[62px] bg-[url('/public/user-male@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[73px] w-[51px] h-[66px] bg-[url('/public/logout@3x.png')] bg-cover bg-no-repeat bg-[top]"
            onClick={onLogoutClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CadastroDeMdico;
