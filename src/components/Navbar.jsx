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
      <div className="flex justify-center gap-60 items-center h-[65px] mt-5 mb-4 relative ">
        <div className="w-[100px] h-[61px] bg-[#E7E7E7] p-[9px, 28px, 9px, 28px]">
          <div className="w-[49px] h-[30px] text-[#DC4A2D] text-[20px] font-[700] relative top-4 left-6 leading-[30px]">
            Logo
          </div>
        </div>

        {/* Navbar Middle Part  */}
        <div className="w-[683px] flex h-[78.85px]">
          <div className="w-[109px] h-[58px] bg-[#DC4A2D] border-2 border-[#FCB4A5] rounded-[49px] mt-2.5 shadow-[ 0px 4px 4px 0px #00000040]">
            <div className="w-[80px] mx-3 flex p-3 gap-2 h-[30px]">
              <div className="w-[24px] h-[24px]">
                <img src={JobIcon} className="mt-1" alt="job-icon" />
              </div>
              <div className="w-[48px] h-[30px] text-[#FFFFFF]">Jobs</div>
            </div>
          </div>
          <div className="w-[450px] flex justify-between h-[74px] shadow-lg p-5 ml-2 rounded-[36px] border-[0.5px] border-[#D1D1D1] bg-[#ffff] shadow-[0px 4px 4px 0px #00000040 inset] ">
            <div className="w-[133px] flex h-[30px] gap-[8px]">
              <div className="w-[24px] h-[24px]">
                <img src={MessageIcon} className="mt-1" alt="message-icon" />
              </div>
              <div className="w-[101px] h-[30px] Font-Poppins text-[#B0B0B0] font-[400] size-[20px] leading-[30px]">
                Messages
              </div>
            </div>

            <div className="w-[349px] flex h-[30px] gap-[16px]">
              <div className="w-[24px] h-[24px]">
                <img src={coinIcon} className="mt-1" alt="coin-Icon" />
              </div>
              <div className="w-[100px] h-[30px] font-Poppins font-[400] size-[20px] leading-[30px] text-[#B0B0B0]">
                Payments
              </div>

              <div className="w-[209px] flex h-[30px] gap-[8px]">
                <div className="w-[24px] h-[24px]">
                  <img src={userIcon} className="mt-1" alt="user-Icon" />
                </div>
                <div className="w-[114px] h-[30px] Font-Poppins font-[400] size-[20px] leading-[30px] text-[#B0B0B0]">
                  Application
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar Middle end   */}

        {/*Right  Navbar   start */}
        <div className="w-[134]  h-[60px] flex gap-[16px] leading-[16px] p-[10px]">
          <div className="w-[32px] h-[32px]">
            <div className="w-2 h-2 relative left-6  bg-[#DC4A2D] rounded-full"></div>
            <img src={bellIcon} className="relative bottom-1.5" alt="bell-icon" />
          </div>
          <div className="w-[60px] flex h-[40px] gap-[6px]">
            <div className="w-[40px] h-[40px] rounded-[26px]">
              <img src={AtlassianIcon} alt="Atlassian-icon" />
            </div>
            <div className="w-[20px] h-[20px]">
              <img src={DownArrowIcon} className="mt-2" alt="downarrow-icon" />
            </div>
          </div>
        </div>
        {/* Right Navbar   end */}
      </div>

      {/* Rectangle 38 start */}
      <div className="w-full h-[71.39px] border-2 bg-[#ffffff] text-black border-[#E7E7E7]  ">
        <div className="w-[608px] h-[26.64px] relative top-4 font-[400] size-[20px] leading-[30px] left-[50px] flex gap-[72px]">
          <div className="text-[#DC4A2D]">
            Job Preview
            <div className="underline w-[65px] h-[2.13px] bg-[#DC4A2D] relative top-5 left-1"></div>
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
