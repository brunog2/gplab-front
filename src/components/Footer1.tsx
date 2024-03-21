import { FunctionComponent } from "react";

const Footer1: FunctionComponent = () => {
  return (
    <div className="absolute top-[1246px] left-[-4px] bg-royalblue-100 w-[1444px] h-[469px] overflow-hidden flex flex-col items-center justify-center py-[25px] pr-[25px] pl-[22px] box-border text-left text-base text-white font-ibm-plex-sans">
      <div className="flex-1 relative w-[585.5px]">
        <div className="absolute top-[0px] left-[0px] w-[585.5px] h-[300.1px]">
          <b className="absolute top-[0px] left-[255.3px] text-5xl">GPLab</b>
          <div className="absolute top-[56px] left-[109.8px] text-justify inline-block w-[366px]">
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
  );
};

export default Footer1;
