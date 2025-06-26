import Image from "next/image";

export default function Home() {
  return (

    <div className="bg-[#FBFBEC] relative">
      <div className="flex justify-around items-center mt-4 bg-[#FBFBEC]">
        <div className="">
          <Image src="/logo.png" alt="logo" width={100} height={50} />
        </div>
        <div className="flex justify-between items-center gap-x-10 ">
          <li className="list-none">Home</li>
          <li className="list-none">Services</li>
          <li className="list-none">Blog</li>
          <li className="list-none">Destination</li>
          <li className="list-none">About Us</li>
        </div>
        <button className="p-2 m-2 border border-orange-300  rounded-md text-center w-[90px]">Login</button>


      </div>

      <p className="text-[#07AC9E] font-normal text-[21px] leading-[120%] tracking-[0.28em] 
  align-middle 
  capitalize 
  font-roboto w-[200px] h-[25px] top-[178px] left-[158px] absolute ">Save Journey</p>
      <Image
        src="/airplane.png"
        alt="airplane"
        className="relative left-[390px] "
        width={493}
        height={143}
      />
      <div className="flex items-center justify-center  ">
        <div className="w-[464px] h-[226px] top-[219px] left-[152px] gap-[12px] absolute flex flex-col gap-y-2"
        >
          <p className="w-[460px] h-[127px] font-semibold text-[51px] leading-[120%] tracking-[0em] align-middle capitalize font-inter">Make your <span className="font-inter font-semibold text-[51px] leading-[120%] tracking-[0em] align-middle capitalize text-[#FF621F]"
          >Holiday</span> Memorable</p>
          <p className="w-[464px] h-[87px] font-inter font-normal text-[21px] leading-[138%] tracking-[0em] align-middle text-[#4A4A4A]">
            Travor is one of the most popular Travel agency for those who want to explore the wold and try to make adventure
          </p>
          <button className=" w-[177px] h-[50px]  rounded-[5px] px-[46px] py-[13px] bg-[#FF621F] text-white mt-6"
          >Plan Trip</button>

        </div>
        <div
        >
          <Image src="/suitcase.png" alt="suitcase" className="w-[353px] h-[398px] top-[77px] left-[818px] absolute" width={453} height={77} />
        </div>
      </div>

      {/* break here */}
      <div className="flex justify-between items-center mt-[380px] w-[866px] ml-auto mr-auto h-[122px] bg-white">
        <div className="flex flex-col gap-y-3"><p>Destination <span><Image src="/arrow.png" alt="arrow" className="w-[10px] h-[5px] border-[2px]
" width={10} height={5} /></span></p><p className="text-[13px]">Search Location</p></div>
        <div className="flex flex-col gap-y-3"><p>Date</p><p className="text-[13px]">Type Date</p></div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-y-3"><p>Guest</p><p className="text-[13px]">Number of Guest</p></div>
          <button className="ml-4  rounded-[5px] px-[46px] py-[13px] bg-[#FF621F] text-white">Explore now</button>
        </div>
      </div>



      {/* break here */}
      <div className="mt-8 mb-2 p-4 bg-[#F7F8FC]">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <p className="w-[353px] h-[37px]  left-[420.9px] font-inter font-bold text-[32.63px] leading-[36.7px] tracking-[0%]]"
          >Things you need <span className=" text-[#FF621F] font-inter font-bold text-[32.63px] leading-[36.7px] tracking-[0]"
          >to do</span> </p>
          <p className=" w-[300.609375px] h-[66px]  font-inter font-normal text-[16px] leading-[21.75px] tracking-[0] text-center text-[#666666] "
          >We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford. </p>

          <div className="flex justify-between gap-x-5 items-center ">
            <div className="flex flex-col w-[251.484375px] h-[200.953125px] rounded-[5.44px]  shadow-[0px_4px_7px_0px_#00000033] p-8">
              <Image src="/Group.png" alt="group" className="mt-2 w-[32.625px] h-[32.625px] top-[199.83px] left-[27.19px]" width={32.625} height={32.625}
              />
              <p className=" font-inter font-semibold text-[16.31px] leading-[23.11px] tracking-[0] w-[62px] h-[24px] mt-6"
              >Sign Up</p>
              <p className="mt-6 font-inter font-normal text-[12.88px] leading-[17.67px] tracking-[0] text-[#666666] w-[197.109375px] h-[36px] "
              >Completes all the work associated with planning and processing</p>
            </div>


            <div className="flex flex-col w-[251.484375px] h-[200.953125px] rounded-[5.44px]  shadow-[0px_4px_7px_0px_#00000033] p-8">
              <Image src="/Group2.png" alt="group" className="mt-2 w-[32.625px] h-[32.625px] top-[199.83px] left-[27.19px]" width={32.625} height={32.625}
              />
              <p className=" font-inter font-semibold text-[16.31px] leading-[23.11px] tracking-[0] w-[127px] h-[24px] mt-6"
              >Worth of Money</p>
              <p className="mt-6 font-inter font-normal text-[12.88px] leading-[17.67px] tracking-[0] text-[#666666] w-[197.109375px] h-[36px] "
              >After successful access then book from exclusive deals & pricing</p>
            </div>


            <div className="flex flex-col w-[251.484375px] h-[200.953125px] rounded-[5.44px]  shadow-[0px_4px_7px_0px_#00000033] p-8">
              <Image src="/location.png" alt="group" className="mt-2 w-[32.625px] h-[32.625px] top-[199.83px] left-[27.19px]" width={32.625} height={32.625}
              />
              <p className=" font-inter font-semibold text-[16.31px] leading-[23.11px] tracking-[0] w-[120px] h-[24px] mt-6"
              >Exiciting Travel</p>
              <p className="mt-6 font-inter font-normal text-[12.88px] leading-[17.67px] tracking-[0] text-[#666666] w-[197.109375px] h-[36px] "
              >Start and explore a wide range of exciting travel experience.</p>
            </div>
          </div>
        </div>

      </div>

      {/* break */}
      <div className="bg-[#F7F8FC] mt-[100px] w-[1195px] h-[524.533px] flex flex-col
">
        <p className="font-roboto font-normal text-[21px] leading-[120%] tracking-[0] align-middle capitalize w-[143px] h-[25px] text-[#07AC9E] relative left-[121px]"
        >Most attractive</p>
        <div className="flex items-center justify-around">
          <div className="font-inter font-semibold text-[36px] leading-[112%] tracking-[0] text-center capitalize"
          >Popular Destination</div>
          <div className="flex justify-center items-center w-[363px] h-[65px] top-[27px] left-[806px] gap-[32px] pt-[10px] pr-[12px] pb-[10px] pl-[12px]">
            <div className="w-[96px] h-[45px] text-center text-white rounded-[10px] gap-[10px] pt-[9px] pr-[19px] pb-[9px] pl-[19px] bg-[#07AC9E]"
            >Beach</div>
            <div className="w-[83px] h-[27px] font-poppins font-medium text-[18px] leading-[100%] tracking-[0] text-[#00000080]"
            >Waterfall</div>
            <div  className="w-[83px] h-[27px] font-poppins font-medium text-[18px] leading-[100%] tracking-[0] text-[#00000080]">Mountains</div>
          </div>

        </div>

        <div className="flex justify-center items-center relative left-[50px] gap-x-3 ">
          <div className="w-[254px] h-[416.533px] flex flex-col justify-center items-center gap-y-4 shadow-md shadow-gray-300 rounded-sm">
            <Image src="/trees.jpg" className="w-[264px] h-[283.556px] rounded-[7.82px] mb-[25px]" width={264} height={283.556} alt="trees"/>
            <div className="flex">
              <p className="relative right-[72px]">Madrid</p> 
              <p className="flex justify-center items-center relative left-[63px] gap-x-2 text-[#666666]"><Image src="/star.png" className="w-[15.644px] h-[15.644px] rounded-[7.82px] " alt="str" width={15.644} height={15.644}
              />4.8</p>
            </div>

            <div className="flex justify-around items-center gap-x-8 ">
              <Image src="/loc.png" className="w-[12.29px] h-[15.64px]" width={12.29} height={15.64} alt="location"/>
              <p className="relative right-[30px] m-2 text-[#666666]">Spain</p>
              <div >
                <span className="w-[41.067px] h-[24px] ml-4 mr-4 text-[#999999] line-through">$950</span>
                <span className="w-[41px] h-[24px] font-poppins font-semibold text-[15.64px] leading-[23.47px] tracking-[0] text-center text-[#FA7436] rounded-[7.82px] bg-[#FFE7DB] p-2 "
                >$850</span>
              </div>

            </div>
          </div>
          <div className="w-[254px] h-[416.533px] flex flex-col justify-center items-center gap-y-4 shadow-md shadow-gray-300 rounded-sm">
            <Image src="/beach.png" className="w-[264px] h-[283.556px] rounded-[7.82px] mb-[25px] mb-[25px]" width={264} height={283.556} alt="trees"/>
            <div className="flex">
              <p className="relative right-[72px]">Loga Sea</p> 
              <p className="flex justify-center items-center relative left-[63px] gap-x-2 text-[#666666]"><Image src="/star.png" className="w-[15.644px] h-[15.644px] rounded-[7.82px] " alt="str" width={15.644} height={15.644}
              />4.8</p>
            </div>

            <div className="flex justify-around items-center gap-x-8 ">
              <Image src="/loc.png" className="w-[12.29px] h-[15.64px]" width={12.29} height={15.64} alt="location"/>
              <p className="relative right-[30px] m-2 text-[#666666]">Germany</p>
              <div >
                <span className="w-[41.067px] h-[24px] ml-4 mr-4 text-[#999999] line-through">$950</span>
                <span className="w-[41px] h-[24px] font-poppins font-semibold text-[15.64px] leading-[23.47px] tracking-[0] text-center text-[#FA7436] rounded-[7.82px] bg-[#FFE7DB] p-2 "
                >$850</span>
              </div>

            </div>
          </div>
      
          <div className="w-[254px] h-[416.533px] flex flex-col justify-center items-center gap-y-4 shadow-md shadow-gray-300 rounded-sm">
            <Image src="/sand.png" className="w-[264px] h-[283.556px] rounded-[7.82px] mb-[25px]" width={264} height={283.556} alt="trees"/>
            <div className="flex">
              <p className="relative right-[72px]">Desert</p> 
              <p className="flex justify-center items-center relative left-[63px] gap-x-2 text-[#666666]"><Image src="/star.png" className="w-[15.644px] h-[15.644px] rounded-[7.82px] " alt="str" width={15.644} height={15.644}
              />4.8</p>
            </div>

            <div className="flex justify-around items-center gap-x-8 ">
              <Image src="/loc.png" className="w-[12.29px] h-[15.64px]" width={12.29} height={15.64} alt="location"/>
              <p className="relative right-[30px] m-2 text-[#666666]">UK</p>
              <div >
                <span className="w-[41.067px] h-[24px] ml-4 mr-4 text-[#999999] line-through">$950</span>
                <span className="w-[41px] h-[24px] font-poppins font-semibold text-[15.64px] leading-[23.47px] tracking-[0] text-center text-[#FA7436] rounded-[7.82px] bg-[#FFE7DB] p-2 "
                >$850</span>
              </div>

            </div>
          </div>
          {/* <div className="w-[264px] h-[416.533px] ">4</div> */}
          <div className="w-[254px] h-[416.533px] flex flex-col justify-center items-center gap-y-4 shadow-md shadow-gray-300 rounded-sm">
            <Image src="/waterfall.png" className="w-[264px] h-[283.556px] mb-[25px] rounded-[7.82px]" width={264} height={283.556} alt="trees"/>
            <div className="flex">
              <p className="relative right-[72px]">Falling</p> 
              <p className="flex justify-center items-center relative left-[63px] gap-x-2 text-[#666666]"><Image src="/star.png" className="w-[15.644px] h-[15.644px] rounded-[7.82px] " alt="str" width={15.644} height={15.644}
              />4.8</p>
            </div>

            <div className="flex justify-around items-center gap-x-8 ">
              <Image src="/loc.png" className="w-[12.29px] h-[15.64px]" width={12.29} height={15.64} alt="location"/>
              <p className="relative right-[30px] m-2 text-[#666666]">India</p>
              <div >
                <span className="w-[41.067px] h-[24px] ml-4 mr-4 text-[#999999] line-through">$950</span>
                <span className="w-[41px] h-[24px] font-poppins font-semibold text-[15.64px] leading-[23.47px] tracking-[0] text-center text-[#FA7436] rounded-[7.82px] bg-[#FFE7DB] p-2 "
                >$850</span>
              </div>

            </div>
          </div>

        </div>

      </div>


      {/* break */}

      <div className="w-[1440px] h-[447px] relative top-[100px]">

      </div>
    </div>
  );
}
