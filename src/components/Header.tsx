import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGPLabClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/cadastro-de-usurio");
  }, [navigate]);

  return (
    <div className="absolute top-[30px] left-[19px] rounded-lg w-[1325px] flex flex-row items-center justify-start p-5 box-border gap-[990px] text-left text-xl text-royalblue-100 font-ibm-plex-sans">
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-13xl font-bold font-ibm-plex-sans text-left inline-block"
        onClick={onGPLabClick}
      >
        <span className="text-gray-200">GP</span>
        <span className="text-royalblue-100">Lab</span>
      </button>
      <div className="flex flex-row items-start justify-start relative gap-[19px]">
        <button className="cursor-pointer p-0 bg-[transparent] relative rounded-31xl box-border w-[122px] h-[51px] z-[0] border-[1px] border-solid border-royalblue-100" />
        <button
          className="cursor-pointer [border:none] p-0 bg-royalblue-100 relative rounded-31xl w-[122px] h-[51px] z-[1]"
          onClick={onRectangleButton1Click}
        />
        <div className="absolute my-0 mx-[!important] top-[12px] left-[34px] font-semibold z-[2]">
          Entrar
        </div>
        <div className="absolute my-0 mx-[!important] top-[12px] left-[156px] font-semibold text-white z-[3]">
          Cadastrar
        </div>
      </div>
    </div>
  );
};

export default Header;
