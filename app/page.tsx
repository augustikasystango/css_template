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
          <Image src="/suitcase.png" alt="suitcase" className="w-[353px] h-[398px] top-[77px] left-[818px] absolute" width={453} height={77}/>
        </div>
      </div>

  {/* break here */}
      <div className="flex justify-between items-center mt-[380px] w-[866px] ml-auto mr-auto h-[122px] bg-white">
        <div className="flex flex-col gap-y-3"><p>Destination <span><Image src="/arrow.png" alt="arrow" className="w-[10px] h-[5px] border-[2px]
" width={10} height={5}/></span></p><p className="text-[13px]">Search Location</p></div>
        <div className="flex flex-col gap-y-3"><p>Date</p><p className="text-[13px]">Type Date</p></div>
        <div className="flex justify-center items-center">
        <div className="flex flex-col gap-y-3"><p>Guest</p><p className="text-[13px]">Number of Guest</p></div>
          <button className="ml-4  rounded-[5px] px-[46px] py-[13px] bg-[#FF621F] text-white">Explore now</button>
        </div>
      </div>

    </div>
  );
}
