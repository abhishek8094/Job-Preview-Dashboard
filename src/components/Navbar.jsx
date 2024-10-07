import JobIcon from "../assets/images/briefcase-02.svg";
import MessageIcon from "../assets/images/message-square-01.svg";
import coinIcon from "../assets/images/coins-hand.svg";
import userIcon from "../assets/images/users-01.svg";
import bellIcon from "../assets/images/bell-02.svg";
import AtlassianIcon from "../assets/images/Rectangle 5.svg";
import DownArrowIcon from "../assets/images/chevron-down.png";

const Navbar = () => {
  return (
    <nav className="w-full p-2 text-[#FFFF]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 h-auto lg:h-[65px] mt-4 mb-4">
        <div className="w-[100px] h-[61px] bg-[#E7E7E7] flex items-center justify-center">
          <div className="w-[49px] h-[30px] text-[#DC4A2D] text-[20px] font-[700] text-center">
            Logo
          </div>
        </div>

        {/* Navbar Middle Part */}
        <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-auto">
          <div className="w-[109px] h-[58px] bg-[#DC4A2D] border-2 border-[#FCB4A5] rounded-[49px] mt-2.5 lg:mt-0 shadow-[ 0px 4px 4px 0px #00000040]">
            <div className="w-[80px] mx-3 flex p-3 gap-2 h-[30px]">
              <div className="w-[24px] h-[24px]">
                <img src={JobIcon} className="mt-1" alt="job-icon" />
              </div>
              <div className="w-[48px] h-[30px] text-[#FFFFFF]">Jobs</div>
            </div>
          </div>
          <div className="w-full lg:w-[450px] flex justify-between h-[74px] shadow-lg p-5 ml-2 rounded-[36px] border-[0.5px] border-[#D1D1D1] bg-[#ffff] shadow-[0px 4px 4px 0px #00000040 inset]">
            <div className="flex h-[30px] gap-[8px]">
              <img src={MessageIcon} className="w-[24px] h-[24px] mt-1" alt="message-icon" />
              <div className="Font-Poppins text-[#B0B0B0] font-[400] text-[16px] lg:text-[20px] leading-[30px]">
                Messages
              </div>
            </div>
            <div className="flex h-[30px] gap-[16px]">
              <img src={coinIcon} className="w-[24px] h-[24px] mt-1" alt="coin-Icon" />
              <div className="font-Poppins font-[400] text-[16px] lg:text-[20px] leading-[30px] text-[#B0B0B0]">
                Payments
              </div>
              <div className="flex h-[30px] gap-[8px]">
                <img src={userIcon} className="w-[24px] h-[24px] mt-1" alt="user-Icon" />
                <div className="font-Poppins font-[400] text-[16px] lg:text-[20px] leading-[30px] text-[#B0B0B0]">
                  Application
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar Middle end */}

        {/*Right Navbar start */}
        <div className="flex gap-[16px] items-center">
          <div className="relative w-[32px] h-[32px]">
            <div className="w-2 h-2 bg-[#DC4A2D] rounded-full absolute right-0 top-0"></div>
            <img src={bellIcon} className="w-full h-full" alt="bell-icon" />
          </div>
          <div className="flex items-center gap-[6px]">
            <img src={AtlassianIcon} className="w-[40px] h-[40px] rounded-[26px]" alt="Atlassian-icon" />
            <img src={DownArrowIcon} className="w-[20px] h-[20px] mt-2" alt="downarrow-icon" />
          </div>
        </div>
        {/* Right Navbar end */}
      </div>

      {/* Rectangle 38 */}
      <div className="w-full h-auto lg:h-[71.39px] border-2 bg-[#ffffff] text-black border-[#E7E7E7]">
        <div className="flex flex-wrap lg:flex-nowrap w-full lg:w-[608px] h-auto lg:h-[26.64px] py-4 lg:py-0 font-[400] text-[16px] lg:text-[20px] leading-[30px] gap-4 lg:gap-[72px] justify-center mt-4  lg:justify-center">
          <div className="text-[#DC4A2D]">
            Job Preview
            <div className="underline w-[100px] h-[2.13px] bg-[#DC4A2D]"></div>
          </div>
          <div className="font-[400] text-[#3b3a3a88]">Applicants</div>
          <div className="font-[400] text-[#3b3a3a88]">Match</div>
          <div className="font-[400] text-[#3b3a3a88]">Messages</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
