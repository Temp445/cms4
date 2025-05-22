
import Navbar from "./Navbar";
import logo from "../assets/AceLogo.png";
import image from "../assets/Group.svg";
import image1 from "../assets/Group1.svg";
import image2 from "../assets/Group2.svg";
import image3 from "../assets/Group3.svg";
import image4 from "../assets/Group4.svg";
import image5 from "../assets/Group6.png";
import image7 from "../assets/Group7.png";
import object from "../assets/object.png";
import object1 from "../assets/object1.png";
import object2 from "../assets/object2.png";
import tool from "../assets/Tools.png";
import gear from "../assets/Gears.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {


  return (
    <div className=" bg-sky-700 relative min-h-fit overflow-hidden " id="top">
      <div className="absolute inset-0 bg- z-0"></div>

      <div className="relative min-h-fit overflow-hidden container mx-auto ">
        <div className="hidden 2xl:block absolute  right-28 top-48 -rotate-45"><Image src={image} alt="image" className="w-20 h-24" /></div>
        <div className=" hidden md:block absolute  right-28 top-30 "><Image src={image1} alt="image" className="w-20 h-24" /></div>
        <div className="hidden 2xl:block absolute  right-48 top-80 rotate-45 "><Image src={image3} alt="image" className="w-20 h-16" /></div>
        {/* <div className="absolute  right-8 top-48 -rotate-45"><Image src={image4} alt="image" className="w-20 h-24" /></div> */}
        <div className="absolute top-10  md:left-28 md:top-28 -rotate-45 rectangle opacity-20 md:opacity-90"><Image src={image5} alt="image" className=" md:w-16 md:h-16" /></div>
        <div className="absolute  right-96 bottom-32 -rotate-45 rectangle "><Image src={image5} alt="image" className="w-10 h-10" /></div>
        {/* <div className="absolute  right-[550px] top-32  "><Image src={image5} alt="image" className="w-5 h-5" /></div> */}
        <div className="absolute  bottom-10 left-5  md:bottom-32 -rotate-45  "><Image src={image5} alt="image" className="w-5 h-5" /></div>

        <div className=" md:hidden lg:block absolute  right-0 bottom-0 "><Image src={object} alt="image" className="h-24 w-24 md:w-52 md:h-52" /></div>
        <div className=" hidden lg:block absolute  right-52 bottom-0 "><Image src={gear} alt="image" className="w-10 h-10" /></div>

        {/* <div className="absolute  right-0 bottom-28  rectangle"><Image src={object1} alt="image" className="w-24 h-24" /></div> */}
        {/* <div className="absolute  left-28 top-28  rectangle"><Image src={object2} alt="image" className="w-16 h-16" /></div> */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-100 to-sky-200 z-0"></div> */}

                 <div className=" hidden lg:block absolute w-32 h-0.5 bg-white top-52 left-[600px] mx-auto  rounded"></div>

         {/* <div className="absolute top-20 right-40 w-64 h-64 rounded-full bg-cyan-400 opacity-80 blur-lg z-0 animate-pulse "></div> */}
        {/* <div className="flex absolute top-16 left-5 md:top-40 md:left-10 w-10 h-10 md:w-16 md:h-16  border border-purple-600 transform rotate-45 opacity-70 z-0 rectangle"></div> */}
        {/* <div className="flex absolute bottom-20 left-80 md:left-20 md:bottom-32 lg:bottom-20 lg:left-40 w-32 h-8 rounded-full bg-green-400 opacity-60 z-0"></div> */}
        {/* <div className="flex absolute right-3 bottom-5 md:right-10 md:bottom-10 lg:bottom-20 lg:right-20 w-16 h-1 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-blue-400 opacity-80 z-0"></div> */}
        <div className="flex absolute top-60  right-20 md:top-80 md:right-28 w-2 h-2 rounded-full border border-white z-0"></div>
        {/* <div className="hidden lg:flex absolute bottom-60 left-20 w-32 h-12 rounded-full bg-cyan-300 opacity-70 z-0"></div> */}
        {/* <div className="flex absolute top-80 left-3 md:top-96 md:left-56 w-5 h-5 md:w-12 md:h-12 rounded-full bg-cyan-400 opacity-80 z-0"></div> */}
        {/* <div className="hidden lg:flex absolute bottom-20 right-80 lg:right-60 w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-blue-500 opacity-70 z-0"></div> */}
        {/* <div className="flex absolute right-3 bottom-44 md:right-10 md:bottom-36 lg:right-20 lg:bottom-52 w-10 h-10 md:w-10 md:h-10 lg:w-16 lg:h-16 rounded-full bg-cyan-500 opacity-70 z-0"></div>  */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 container -mt-12 pb-5 md:mt-2 ">
          <div className="">
            {" "}
            <Navbar />{" "}
          </div>


          <div className="md:hidden flex gap-1 mx-auto justify-center w-full py-3 -ml-2">
            <Image src={logo} alt="logo" className="w-8 h-8" />
            <span className="text-base font-semibold mt-1 text-white">
              ACE CMS
            </span>
          </div>
      <div className="flex justify-center flex-col md:flex-row">
          <div className="relative  mt-20 w-1/2 hidden md:block"><Image src={image7} alt="image" className=" xl:w-[500px] xl:h-[400px] w-[400px] h-[300px] " />
        <div className="absolute  -right-10 bottom-0 rotate-12 "><Image src={tool} alt="image" className="w-14 h-14" /></div>
          
          </div>

          <div className=" py-0 pb-5 md:py-20 lg:py-24 text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl md:text-left md:ml-20 font-bold text-white mb-6">
              Streamline Your Calibration Processes {" "}
              <span className="relative">
               with ACE CMS
        {/* <div className="absolute  right-0 -top-8 -rotate-90 w-full"><Image src={image2} alt="image" width={100} className="w-96 h-52" /></div> */}

              </span>

            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto md:ml-16 lg:ml-20 text-left">
              Efficient, compliant, and cloud-based calibration management
              tailored for manufacturing excellence.
            </p>

            <div className="mt-10 ">
              <Link href="#contact"
                className=" text-white border border-black bg-black p-2 md:px-10 md:py-3  rounded-md font-bold  transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
