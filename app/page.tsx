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
            <div className="w-[83px] h-[27px] font-poppins font-medium text-[18px] leading-[100%] tracking-[0] text-[#00000080]">Mountains</div>
          </div>

        </div>

        <div className="flex justify-center items-center relative left-[50px] gap-x-3 ">
          <div className="w-[254px] h-[416.533px] flex flex-col justify-center items-center gap-y-4 shadow-md shadow-gray-300 rounded-sm">
            <Image src="/trees.jpg" className="w-[264px] h-[283.556px] rounded-[7.82px] mb-[25px]" width={264} height={283.556} alt="trees" />
            <div className="flex">
              <p className="relative right-[72px]">Madrid</p>
              <p className="flex justify-center items-center relative left-[63px] gap-x-2 text-[#666666]"><Image src="/star.png" className="w-[15.644px] h-[15.644px] rounded-[7.82px] " alt="str" width={15.644} height={15.644}
              />4.8</p>
            </div>

            <div className="flex justify-around items-center gap-x-8 ">
              <Image src="/loc.png" className="w-[12.29px] h-[15.64px]" width={12.29} height={15.64} alt="location" />
              <p className="relative right-[30px] m-2 text-[#666666]">Spain</p>
              <div >
                <span className="w-[41.067px] h-[24px] ml-4 mr-4 text-[#999999] line-through">$950</span>
                <span className="w-[41px] h-[24px] font-poppins font-semibold text-[15.64px] leading-[23.47px] tracking-[0] text-center text-[#FA7436] rounded-[7.82px] bg-[#FFE7DB] p-2 "
                >$850</span>
              </div>

            </div>
          </div>
          <div className="w-[254px] h-[416.533px] flex flex-col justify-center items-center gap-y-4 shadow-md shadow-gray-300 rounded-sm">
            <Image src="/beach.png" className="w-[264px] h-[283.556px] rounded-[7.82px] mb-[25px] mb-[25px]" width={264} height={283.556} alt="trees" />
            <div className="flex">
              <p className="relative right-[72px]">Loga Sea</p>
              <p className="flex justify-center items-center relative left-[63px] gap-x-2 text-[#666666]"><Image src="/star.png" className="w-[15.644px] h-[15.644px] rounded-[7.82px] " alt="str" width={15.644} height={15.644}
              />4.8</p>
            </div>

            <div className="flex justify-around items-center gap-x-8 ">
              <Image src="/loc.png" className="w-[12.29px] h-[15.64px]" width={12.29} height={15.64} alt="location" />
              <p className="relative right-[30px] m-2 text-[#666666]">Germany</p>
              <div >
                <span className="w-[41.067px] h-[24px] ml-4 mr-4 text-[#999999] line-through">$950</span>
                <span className="w-[41px] h-[24px] font-poppins font-semibold text-[15.64px] leading-[23.47px] tracking-[0] text-center text-[#FA7436] rounded-[7.82px] bg-[#FFE7DB] p-2 "
                >$850</span>
              </div>

            </div>
          </div>

          <div className="w-[254px] h-[416.533px] flex flex-col justify-center items-center gap-y-4 shadow-md shadow-gray-300 rounded-sm">
            <Image src="/sand.png" className="w-[264px] h-[283.556px] rounded-[7.82px] mb-[25px]" width={264} height={283.556} alt="trees" />
            <div className="flex">
              <p className="relative right-[72px]">Desert</p>
              <p className="flex justify-center items-center relative left-[63px] gap-x-2 text-[#666666]"><Image src="/star.png" className="w-[15.644px] h-[15.644px] rounded-[7.82px] " alt="str" width={15.644} height={15.644}
              />4.8</p>
            </div>

            <div className="flex justify-around items-center gap-x-8 ">
              <Image src="/loc.png" className="w-[12.29px] h-[15.64px]" width={12.29} height={15.64} alt="location" />
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
            <Image src="/waterfall.png" className="w-[264px] h-[283.556px] mb-[25px] rounded-[7.82px]" width={264} height={283.556} alt="trees" />
            <div className="flex">
              <p className="relative right-[72px]">Falling</p>
              <p className="flex justify-center items-center relative left-[63px] gap-x-2 text-[#666666]"><Image src="/star.png" className="w-[15.644px] h-[15.644px] rounded-[7.82px] " alt="str" width={15.644} height={15.644}
              />4.8</p>
            </div>

            <div className="flex justify-around items-center gap-x-8 ">
              <Image src="/loc.png" className="w-[12.29px] h-[15.64px]" width={12.29} height={15.64} alt="location" />
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


      <div className="w-full bg-[#F7F8FC] py-[50px] flex justify-center mt-[30px]">
    
        <div className="w-[827.25px] h-[267px] flex items-center justify-between">

         
          <div className="w-[295.5px] h-[201px] flex flex-col justify-between">
            <div>
              <h2 className="text-[24px] font-bold leading-[30px] text-[#27302F]">
                What people say <br />
                <span className="text-[#FA7436]">about us.</span>
              </h2>
              <p className="text-[#666666] text-[14px] mt-2 leading-[20px]">
                Our Clients send us bunch of smilies with our <br /> services and we love them.
              </p>
            </div>

            
            <div className="flex gap-3 mt-3">
              <button className="w-[30px] h-[30px] rounded-full border border-[#E5E5E5] flex items-center justify-center">
                <span className="rotate-180 text-[#999]">&rarr;</span>
              </button>
              <button className="w-[30px] h-[30px] rounded-full bg-[#FA7436] text-white flex items-center justify-center">
                <span>&rarr;</span>
              </button>
            </div>
          </div>

    
          <div className="relative w-[405.75px] h-[209.25px]">

           
            <div className="absolute top-[35px] left-[25px] w-[376.5px] h-[174px] rounded-[7.5px] border-[1.5px] border-[#66666614] shadow-[0px_7.5px_22.5px_0px_#22222259] bg-white z-0 p-5 pl-7">
              <p className="text-[13px] text-[#222222] leading-[20px] mb-4 opacity-50">
                “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next.”
              </p>
              <p className="text-[13px] font-bold text-[#222] opacity-50">Jam Thoms</p>
              <p className="text-[11px] text-[#999999] opacity-50">CEO of Red Button</p>
            </div>

           
            <div className="relative z-10 bg-white rounded-md shadow-lg p-5 pl-7">
              <p className="text-[13px] text-[#222222] leading-[20px] mb-4">
                “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
              </p>
              <p className="text-[13px] font-bold text-[#222]">Mike taylor</p>
              <p className="text-[11px] text-[#999999]">Indore, India</p>
            </div>

            <img
              src='profile.png'
              alt="User"
              className="absolute -top-4 -left-4 w-[40px] h-[40px] rounded-full border-2 border-white z-20"
            />
          </div>
          <Image src="/element.png" className="absolute w-[126.423px] h-[141.045px]  left-[1074px] text-[#999999]" width={127} height={142} alt="kkk"
          />

        </div>
      </div>

      {/* break */}

      <div className="bg-[#FA7436] text-white rounded-[9px] py-16 px-4 relative overflow-hidden text-center rounded-sm w-[1118.9px] m-auto">

        <img
          src="/coconut.png"
          alt="Tree Illustration"
          className="absolute right-6 top-6  w-[80px] h-auto pointer-events-none "
        />


        <h2 className="text-[28px] sm:text-[36px] font-bold leading-tight mb-10 relative z-10">
          Subscribe and get exclusive <br />
          <span className="text-white">deals & offer</span>
        </h2>

        <form
          className="relative z-10 w-full max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-sm flex items-center justify-between  px-2 py-2 shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 text-gray-700 text-sm outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#FA7436] text-white px-6 py-3 rounded-sm font-medium hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* break */}

      <div className="max-w-6xl mx-auto mr-3 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className=" rounded-full flex items-center justify-center">
                <img
                  src="logo.png"
                  alt="Logo"
                  width={380}
                  height={380}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6 max-w-xs">
              Book your trip in minute, get full Control for much longer.
            </p>
            <div className="flex justify-center items-center gap-3 ">
          
              <div className="w-[37.853px] h-[37.853px] shadow-[0px_1.83px_9.15px_0px_#0000001A] shadow-md rounded-full flex justify-center items-center">
                <Image
                  src="/facebook.png"
                  className="w-[10px] h-[14px] text-[#444444] m-auto "
                  width={15} height={12}
                  alt="fb"
                />
              </div>

              <div className="flex items-center justify-center">
             <Image src="/social.png" className=" w-[45.423px] h-[45.423px] top-[120.23px] left-[62.46px] shadow-[0px_1.83px_9.15px_0px_#0000001A] rounded-full" width={45.423} height={45.423} alt="socia"/>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0px_1.83px_9.15px_0px_#0000001A] shadow-md">
                <Image src="/twitter.png" alt="twitter" width={15} height={12} className="w-[15px] h-[12px] "/>
              </div>
            </div>
          </div>


          <div>
            <h3 className="font-bold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Logistic
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Privacy & Policy
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="font-bold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Help/FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Affiliates
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="font-bold text-gray-800 mb-4">More</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Press Centre
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Our Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Low fare tips
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center pb-5">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Copyright, Travor 2022. All rights reserved.
          </p>
          <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
}
