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
    <div className="flex flex-col lg:flex-row w-full">
      {/* Left Section start */}
      <div className="w-full lg:w-[78%]">
        {/* Role start */}
        <div className="w-full lg:w-[662px] relative left-0 lg:left-[60px] top-0 lg:top-[5px] h-auto lg:h-[107px]">
          <div className="h-auto lg:h-[53px] flex flex-col lg:flex-row justify-between gap-4 lg:gap-[12px]">
            <div className="font-Poppins font-[700] text-[24px] lg:text-[35px] leading-[32px] lg:leading-[52.5px] text-[#3D3D3D]">
              Senior Product Designer
            </div>
            <div className="font-Poppins font-[400] text-[14px] mt-5 leading-[21px] text-[#888888]">
              posted 2 days ago
            </div>
            <div className="flex text-sm w-full lg:w-[59px] h-[22px] mt-2 lg:mt-5 rounded-full border border-[#ABEFC6] bg-[#ABEFC6] text-[#ECFDF3]">
              <div className="w-[8px] h-[8px] m-[6px] rounded-full bg-[#067647]"></div>
              <div className="font-Poppins font-[500] text-[12px] leading-[18px] text-[#067647]">
                Open
              </div>
            </div>
          </div>
          <div className="relative top-4 lg:top-5 flex flex-wrap lg:flex-nowrap gap-4 lg:gap-[16px] w-full lg:w-[379px] h-auto lg:h-[30px]">
            <div className="flex items-center">
              <img
                className="w-[24px] h-[24px] mt-1"
                src={locationIcon}
                alt="location"
              />
              <span className="font-Poppins font-[400] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-[#5D5D5D] ml-2">
                Delaware, USA
              </span>
            </div>
            <div className="w-2 h-2 bg-[#D1D1D1] rounded-full self-center"></div>
            <div className="flex items-center gap-2">
              <img
                className="w-[24px] h-[24px] mt-1"
                src={coinsStack}
                alt="coins"
              />
              <span className="font-Poppins font-[400] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-[#5D5D5D]">
                $300k-$400k
              </span>
            </div>
          </div>
        </div>
        {/* Role end */}

        <hr className="w-full border border-[#E7E7E7] my-4 lg:my-6" />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-28 p-4 lg:p-6 ml-4 lg:ml-10">
          {/* Skills Required */}
          <div className="flex flex-col gap-3">
            <span className="text-[#6E6D6D] font-Poppins font-[400]">
              Skills Required
            </span>
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center rounded-md border-2 shadow-md px-2 py-1 bg-white border-[#D0D5DD]">
                <img src={figmaIcon} className="w-5 h-5 mr-1" alt="Figma Icon" />
                <span className="text-sm">Figma</span>
              </button>
              <button className="flex items-center rounded-md border-2 shadow-md px-2 py-1 bg-white border-[#D0D5DD]">
                <img src={adobeIcon} className="w-5 h-5 mr-1" alt="Adobe Icon" />
                <span className="text-sm">Adobe Illustrator</span>
              </button>
              <button className="flex items-center rounded-md border-2 shadow-sm px-2 py-1 bg-white border-[#D0D5DD]">
                <img src={adobeXDIcon} className="w-5 h-5 mr-1" alt="Adobe XD Icon" />
                <span className="text-sm">Adobe XD</span>
              </button>
            </div>
          </div>

          {/* Preferred Language */}
          <div className="flex flex-col">
            <span className="text-[#6E6D6D] font-Poppins font-[400]">
              Preferred Language
            </span>
            <span className="text-[#3D3D3D] font-Poppins font-[400] py-2">
              English
            </span>
          </div>

          {/* Type */}
          <div className="flex flex-col">
            <span className="text-[#6E6D6D] font-Poppins font-[400]">
              Type
            </span>
            <span className="text-[#3D3D3D] font-Poppins font-[400] py-2">
              Full time
            </span>
          </div>

          {/* Years of Experience */}
          <div className="flex flex-col">
            <span className="text-[#6E6D6D] font-Poppins font-[400]">
              Years of Experience
            </span>
            <span className="text-[#3D3D3D] font-Poppins font-[400] py-2">
              3+ Years of Experience
            </span>
          </div>
        </div>

        <hr className="w-full border border-[#E7E7E7] my-4 lg:my-6" />

        {/* About the Job */}
        <div className="p-4 lg:p-8 ml-0 lg:ml-5">
          <span className="text-[#6E6D6D] font-Poppins font-[400]">
            About the Job
          </span>
          <ol className="py-2 list-decimal list-inside">
            <li className="text-[#3D3D3D] font-Poppins font-[400] py-1">
              Handle the UI/UX research design
            </li>
            <li className="text-[#3D3D3D] font-Poppins font-[400] py-1">
              Work on researching the latest web applications designs & trends
            </li>
            <li className="text-[#3D3D3D] font-Poppins font-[400] py-1">
              Work on conceptualizing and visualizing
            </li>
            <li className="text-[#3D3D3D] font-Poppins font-[400] py-1">
              Create graphics content and other graphic-related works
            </li>
          </ol>

          {/* Benefits */}
          <div className="mt-4">
            <span className="text-[#3D3D3D] font-Poppins font-[400]">
              Benefits:
            </span>
            <ul className="list-disc list-inside ml-4">
              <li className="text-[#3D3D3D] font-Poppins font-[400]">
                Health insurance
              </li>
              <li className="text-[#3D3D3D] font-Poppins font-[400]">
                Provident Fund
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div className="mt-4">
            <span className="text-[#3D3D3D] font-Poppins font-[400]">
              Schedule
            </span>
            <ul className="list-disc list-inside ml-4">
              <li className="text-[#3D3D3D] font-Poppins font-[400]">
                Day Shift
              </li>
            </ul>
          </div>

          {/* Supplement Pay Types */}
          <div className="mt-4">
            <span className="text-[#3D3D3D] font-Poppins font-[400]">
              Supplement pay types:
            </span>
            <ul className="list-disc list-inside ml-4">
              <li className="text-[#3D3D3D] font-Poppins font-[400]">
                Performance bonus
              </li>
            </ul>
          </div>
        </div>
        {/* About the Job end */}

        <hr className="w-full border border-[#E7E7E7] my-4 lg:my-6" />

        {/* Company Information */}
        <div className="p-4 lg:p-10 m-4">
          <div className="flex flex-col lg:flex-row items-center gap-3">
            <img src={AtlassianImg} alt="Atlassian-img" className="w-16 h-16" />
            <span className="text-[#4f4f4f] font-[600] text-lg">Atlassian</span>
            <button className="mt-2 lg:mt-0 bg-[#E0EBF9] text-[#003788] w-24 h-8 font-Poppins font-[700] rounded-md">
              Follow
            </button>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-8 my-5">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-[#6E6D6D] font-Poppins font-[400]">
                  Company size
                </span>
                <span className="text-[#3D3D3D] font-Poppins font-[400] block">
                  1k - 2k Employees
                </span>
              </div>

              <div>
                <span className="text-[#6E6D6D] font-Poppins font-[400]">
                  Sector
                </span>
                <span className="text-[#3D3D3D] font-Poppins font-[400] block">
                  Information Technology, Infrastructure
                </span>
              </div>

              <div>
                <span className="text-[#6E6D6D] font-Poppins font-[400]">
                  Founded In
                </span>
                <span className="text-[#3D3D3D] font-Poppins font-[400] block">
                  2019
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-[#6E6D6D] font-Poppins font-[400]">
                  Type
                </span>
                <span className="text-[#3D3D3D] font-Poppins font-[400] block">
                  Private
                </span>
              </div>

              <div>
                <span className="text-[#6E6D6D] font-Poppins font-[400]">
                  Funding
                </span>
                <span className="text-[#3D3D3D] font-Poppins font-[400] block">
                  Bootstrapped
                </span>
              </div>

              <div>
                <span className="text-[#6E6D6D] font-Poppins font-[400]">
                  Founded By
                </span>
                <span className="text-[#3D3D3D] font-Poppins font-[400] block">
                  Scott Farquhar, Mike Cannon-Brookes
                </span>
              </div>
            </div>
          </div>
        </div>

        <span className="block text-center lg:text-left text-[#B0B0B0] font-Poppins font-[400] underline mb-8">
          Report this listing
        </span>
      </div>
      {/* Left Section end */}

      {/* Right Section Start */}
      <div className="w-full lg:w-[28%] p-4 border-t lg:border-t-0 lg:border-l border-[#E7E7E7]">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[48px] w-full ml-4">
          <button className="p-2 border border-[#DC4A2D] rounded-md bg-[#FEF4F2] flex items-center justify-center">
            <img src={deleteIcon} className="mr-2 w-5 h-5" alt="Delete Icon" />
            <span className="text-[#DC4A2D] text-sm">Delete Job</span>
          </button>

          <button className="flex items-center justify-center bg-[#DC4A2D] py-2 px-4 rounded-md border-2 border-[#3FED3CA]">
            <img src={editIcon} className="mr-2 w-5 h-8" alt="Edit Icon" />
            <span className="text-white text-sm">Edit Job</span>
          </button>
        </div>

        {/* Statistics */}
        <div className="flex flex-col py-4 mt-5">
          {/* Applicants */}
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <img src={applicantIcon} className="mx-2 w-5 h-5" alt="Applicants Icon" />
              <span className="font-Poppins font-[500]">Applicants</span>
            </div>
            <span className="font-Poppins font-[500]">400</span>
          </div>
          <hr className="border-t border-[#E7E7E7]" />

          {/* Matches */}
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <img src={matchIcon} className="mx-2 w-5 h-5" alt="Matches Icon" />
              <span className="font-Poppins font-[500]">Matches</span>
            </div>
            <span className="font-Poppins font-[500]">400</span>
          </div>
          <hr className="border-t border-[#E7E7E7]" />

          {/* Messages */}
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <img src={messageIcon} className="mx-2 w-5 h-5" alt="Messages Icon" />
              <span className="font-Poppins font-[500]">Messages</span>
            </div>
            <span className="font-Poppins font-[500]">400</span>
          </div>
          <hr className="border-t border-[#E7E7E7]" />

          {/* Views */}
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <img src={eyeIcon} className="mx-2 w-5 h-5" alt="Views Icon" />
              <span className="font-Poppins font-[500]">Views</span>
            </div>
            <span className="font-Poppins font-[500]">400</span>
          </div>
        </div>

        {/* Quote Container */}
        <div className="border-2 border-[#F7F7F7] bg-white shadow-lg rounded-lg p-4 mt-4">
          <span className="font-Poppins font-[500] text-[#000000]">
            "A quote from Atlassian"
          </span>

          <div className="flex items-center mt-4">
            <img src={avatarIcon} className="w-10 h-10" alt="Avatar Icon" />
            <div className="flex flex-col ml-4">
              <span className="text-[#000000] font-Poppins font-[500]">Name</span>
              <span className="text-[#828282] font-Poppins font-[500]">Description</span>
            </div>
          </div>
        </div>
        {/* Quote Container end */}
      </div>
      {/* Right Section end */}
    </div>
  );
};

export default Section;
