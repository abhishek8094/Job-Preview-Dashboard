import React from "react";
import locationIcon from "../assets/images/marker-pin-01.svg";
import coinsStack from "../assets/images/coins-stacked-03.svg";
import deleteIcon from "../assets/images/trash-03.svg";
import editIcon from "../assets/images/edit-02.svg";
import applicantIcon from "../assets/images/users-01 (1).svg";
import matchIcon from "../assets/images/user-check-01.svg";
import messageIcon from "../assets/message-square-01 (2).svg";
import eyeIcon from "../assets/images/eye.svg";
import avatarIcon from "../assets/Avatar.svg";
import figmaIcon from "../assets/images/image 1.svg";
import adobeIcon from "../assets/images/image 2.svg";
import adobeXDIcon from "../assets/images/image 6.svg";
import AtlassianImg from "../assets/images/Rectangle 43.svg";

const Section = () => {
  return (
    <div className="flex w-full">
      {/* left Section start */}
      <div className="w-[78%] ">
        {/* Role start  */}
        <div className="w-[662px] relative left-[60px] top-[5px]  h-[107px]">
          <div className="h-[53px] flex justify-between gap-[12px]">
            <div className="font-Poppins font-[700] text-[35px] leading-[52.5px] text-[#3D3D3D]">
              Senior Product Designer
            </div>
            <div className="font-Poppins font-[400] p-5 text-[14px] leading-[21px] text-[#88888]">
              posted 2days ago
            </div>
            <div className="flex text-sm w-[59px] h-[22px] mt-5 rounded-full border-1 bg-[#ABEFC6] text-[#ECFDF3]">
              <div className="w-[8px] h-[8px] m-[6px] text-sm rounded-full outline-0 bg-[#067647]"></div>
              <div className="font-Poppins font-[500] text-[12px] leading-[18px] items-center text-[#067647]">
                open
              </div>
            </div>
          </div>
          <div className=" relative top-5 flex  gap-[16px] w-[379px] h-[30px]">
            <div>
              <img
                className="w-[24px] h-[24px] mt-1"
                src={locationIcon}
                alt="location"
              />
            </div>
            <div className="font-Poppins font-[400] text-[20px] w-[143px] height-[30px] leading-[30px] text-[#5D5D5D]">
              Delaware, USA
            </div>

            <div className="flex w-[168px] h-[30px] gap-[12px]">
              <div>
                <img
                  className="w-[24px] h-[24px] mt-1"
                  src={coinsStack}
                  alt="coins"
                />
              </div>
              <div className="font-Poppins Font-[400] text-[20px] leading-[30px] text-[#5D5D5D]">
                $300k-$400k
              </div>
            </div>
          </div>
        </div>

        {/* Role end  */}
        <hr className="w-full p-4 border-1 relative top-6 border-[#E7E7E7]" />

        <div className="flex gap-28 p-6 ml-10">
          <div className="flex flex-col gap-3">
            <span className="text-[#6E6D6D] font-[400] font-Poppins">
              skills Required
            </span>
            <button className="flex rounded-md border-2 shadow-md px-2 py-1 w-24 bg-[#ffff] border-[#D0D5DD] ">
              <img src={figmaIcon} className="mt-1 mr-1" alt="figma-Icon" />
              <span>Figma</span>
            </button>
            <button className="flex rounded-md border-2 shadow-md px-1 py-1  bg-[#ffff] border-[#D0D5DD] ">
              <img src={adobeIcon} className="mt-1 mr-1" alt="adobe-Icon" />
              <span>Adobe illustrator</span>
            </button>

            <button className="flex rounded-md border-2 shadow-sm w-[105px] py-1 bg-[#ffff] border-[#D0D5DD] ">
              <img src={adobeXDIcon} className="mt-1 ml-1" alt="icon" />
              <span className="ml-1">Adobe XD</span>
            </button>
          </div>
          <div className="flex flex-col">
            <span className="text-[#6E6D6D] font-[400] font-Poppins">
              Preferred Language
            </span>
            <span className="text-[#3D3D3D] font-[400] font-Poppins py-2">
              English
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#6E6D6D] font-[400] font-Poppins ">
              Type
            </span>
            <span className="text-[#3D3D3D] font-[400] font-Poppins py-2">
              Full time
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#6E6D6D] font-[400] font-Poppins">
              Years of Experience
            </span>
            <span className="text-[#3D3D3D] font-[400] font-Poppins py-2">
              3+ Years of Experience
            </span>
          </div>
        </div>
        <hr className="w-full p-4 border-1 relative top-1 border-[#E7E7E7]" />

        {/* About the job start  */}
        <div className=" p-8 ml-4 relative left-5 ">
          <span className="text-[#6E6D6D] font-[400] font-Poppins">
            About the Job
          </span>
          <ol className="py-2">
            <li className="text-[#3D3D3D] font-Poppins font-[400] ">1. Handle the UI/UX research design</li>
            <li className="text-[#3D3D3D] font-Poppins font-[400] ">
              2. Work on researching on latest web applications designs & trends
            </li >
            <li className="text-[#3D3D3D] font-Poppins font-[400] ">3. Work on conceptualizing and visualizing</li>
            <li className="text-[#3D3D3D] font-Poppins font-[400] ">
              4. Work on creating graphics content and other graphic related works
            </li>
          </ol>
          <div>
            <span className="text-[#3D3D3D] font-Poppins font-[400] " > Benefits:</span>
            <ul>
              <li className="text-[#3D3D3D] font-Poppins font-[400] "> <span className="font-[700] relative bottom-1">.</span> Health insurance</li>
              <li className="text-[#3D3D3D] font-Poppins font-[400] "> <span className="font-[700] relative bottom-1">.</span>Provident Fund</li>
            </ul>
          </div>
          <div>
            <span className="text-[#3D3D3D] font-Poppins font-[400] " >Schedule</span>
            <ul>
              <li className="text-[#3D3D3D] font-Poppins font-[400] "><span className="font-[700] relative bottom-1" >.</span> Day Shift</li>
            </ul>
          </div>

          <span className="text-[#3D3D3D] font-Poppins font-[400] ">
            Supplement pay types:
            <ul>
              <li className="text-[#3D3D3D] font-Poppins font-[400] "> <span className="font-[700] relative bottom-1">.</span> Performance bonus</li>
            </ul>
          </span>
        </div>
        {/* About the job end  */}

        <hr className="w-full p-6 border-1 relative top-2 border-[#E7E7E7]" />

        <div className=" relative left-10 p-4 m-4 ">
          <div className="flex gap-3 ">
            <img src={AtlassianImg} alt="Atlassian-img" />
            <span className="flex justify-center items-center text-[#4f4f4f] font-[600]">Atlassian</span>
            <button className=" items-center bg-[#E0EBF9] text-[#003788] w-16 h-6 mt-2 font-[700] font-Poppins rounded-md">
              Follow
            </button>
          </div>

          <div className="flex gap-24 my-5">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-[#6E6D6d] font-Poppins font-[400]">Company size</span>
                <span className="text-[#3D3D3D font-[400] py-1">1k - 2k Employees</span>
              </div>

              <div className="flex flex-col my-2">
                <span className="text-[#6E6D6d] font-Poppins font-[400]">Sector</span>
                <span className="text-[#3D3D3D font-[400] py-1">Information Technology, Infrastructure</span>
              </div>

              <div className="flex flex-col my-2">
                <span className="text-[#6E6D6d] font-Poppins font-[400]">Founded In</span>
                <span className="text-[#3D3D3D font-[400] py-1">2019</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-[#6E6D6d] font-Poppins font-[400]">Type</span>
                <span className="text-[#3D3D3D font-[400] my-1">Private</span>
              </div>
              <div className="flex flex-col my-2">
                <span className="text-[#6E6D6d] font-Poppins font-[400]">Funding</span>
                <span className="text-[#3D3D3D font-[400] py-1">Bootstrapped</span>
              </div>

              <div className="flex flex-col my-2">
                <span className="text-[#6E6D6d] font-Poppins font-[400]">Founded By</span>
                <span className="text-[#3D3D3D font-[400] py-1">Scott Farquhar, Mike Cannon-Brookes</span>
              </div>
            </div>
          </div>
        </div>
        <span className="relative left-[70px] bottom-6 underline text-[#B0B0B0] font-[400] font-Poppins">Report this listing</span>
      </div>

      {/* right Section Start */}
      <div className="w-[22%] p-4 border-x-2 border-[#E7E7E7] ">
        <div className="flex  gap-[10px] w-full">
          <button className="p-2 border-[0.8px] border-[#DC4A2D] rounded-[8px] bg-[#FEF4F2] px-4 flex items-center justify-center">
            <img src={deleteIcon} className="mr-1" alt="delete-Icon" />
            <span className="text-[#DC4A2D]">Delete job</span>
          </button>

          <button className="bg-[#DC4A2D] flex py-4 px-10 rounded-[8px] border-2 border-[#3FED3CA] ">
            <img src={editIcon} className="mt-1" alt="edit-Icon" />
            <span className="text-white">Edit Job</span>
          </button>
        </div>

        <div className=" flex flex-col py-4  mt-5">
          <div className="flex justify-between items-center p-4">
            <div className="flex">
              <img src={applicantIcon} className="mx-2" alt="applicant-Icon" />
              <span>Applicants</span>
            </div>
            <span>400</span>
          </div>

          <hr className="bg-[#E7E7E7]" />

          <div className="flex justify-between items-center p-4">
            <div className="flex">
              <img src={matchIcon} className="mx-2" alt="match-Icon" />
              <span>Matches</span>
            </div>
            <span>400</span>
          </div>

          <hr className="bg-[#E7E7E7]" />

          <div className="flex justify-between items-center p-4">
            <div className="flex">
              <img src={messageIcon} className="mx-2" alt="message-Icon" />
              <span>Messages</span>
            </div>
            <span>400</span>
          </div>
          <hr className="bg-[#E7E7E7]" />

          <div className="flex justify-between items-center p-4">
            <div className="flex">
              <img src={eyeIcon} className="mx-2" alt="eye-Icon" />
              <span>Views</span>
            </div>
            <span>400</span>
          </div>
        </div>

        {/* Quote Container start  */}
        <div className="border-2 p-4 border-[#F7F7F7] bg-[#FFFFFF] shadow-lg rounded-[12px]">
          <span className="font-Poppins font-[500] p-4 leading-[30px] text-[#000000] ">
            "A quote from a Atlassian "
          </span>

          <div className="flex p-4 ">
            <img src={avatarIcon} alt="avatar-icon" />
            <div className="flex ml-4 flex-col">
              <span className="text-[#000000] font-[500] font-Poppins">
                Name
              </span>
              <span className="text-[#828282] font-[500] font-Poppins">
                Description
              </span>
            </div>
          </div>
        </div>
        {/* Quote Container end  */}
      </div>
    </div>
  );
};

export default Section;
