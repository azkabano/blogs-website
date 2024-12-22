import Image from "next/image";
import Heading from "../components/heading";


const MainPage = () => {


  return (
    <div className=" flex  items-center  flex-col">

      <section className="container w-full  min-h-[80vh]  max-lg:px-5 max-lg:py-5 grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-4  place-items-center">

        <div className="main-card-1 relative ">
          <div className="image">
            <Image
              src={"/main1.jpg"}
              alt="hero"
              width={550}
              height={700}
              className="  object-cover"
            />
          </div>
          <div className="content w-full absolute bg-black/25 h-full flex flex-col  justify-end  bottom-0 px-3 py-4">
            <div className="flex justify-start items-center font-mono text-white gap-3">
              <div className=" p-1 px-3  bg-[#E8800E] rounded-md">JAVASCRIPT</div>
              <p>March 27, 2018</p>
            </div>
            <p className="text-[20px] font-semibold mt-4 text-white">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</p>
          </div>
        </div>

        <div className="main-card-2 relative">
          <div className="main-card-1">
            <Image
              src={"/main2.jpg"}
              alt="hero"
              width={550}
              height={700}
              className="  object-cover"
            />
          </div>
          <div className="content absolute w-full bg-black/25 h-full flex flex-col  justify-end  bottom-0 px-3 py-4">
            <div className="flex justify-start items-center font-mono text-white gap-3">
              <div className=" p-1 px-3  bg-[#9112F9] rounded-md">JQUERY</div>
              <p>March 27, 2018</p>
            </div>
            <p className="text-[20px] font-semibold mt-4 text-white">Ask HN: Does Anybody Still Use JQuery?</p>
          </div>
        </div>
      </section>


      <Heading headingValue="Recent Posts" />

      <div className="container grid grid-cols-3    place-items-center gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 ">

        <div className="card flex flex-col  max-w-[350px]  text-white   overflow-hidden   m-2">
          <Image
            src={"/card.webp"}
            alt="hero"
            width={350}
            height={700}
            className="  object-cover"
          />
          <div className="content w-full  flex-wrap  h-full flex flex-col  justify-end py-1">
            <div className="flex justify-start items-center font-mono  gap-5">
              <div className=" p-1 px-3 text-black  bg-[#9112F9] rounded-md">JQUERY</div>
              <p className="text-black">March 27, 2018</p>
            </div>
            <p className="text-[18px] text-black  font-semibold mt-1  ">Ask HN: Does Anybody Still Use JQuery?</p>
          </div>
        </div>


        <div className="card flex flex-col  max-w-[350px]  text-white   overflow-hidden   m-2">
          <Image
            src={"/card.webp"}
            alt="hero"
            width={350}
            height={700}
            className="  object-cover"
          />
          <div className="content w-full  flex-wrap  h-full flex flex-col  justify-end py-1">
            <div className="flex justify-start items-center font-mono  gap-5">
              <div className=" p-1 px-3 text-black  bg-[#9112F9] rounded-md">JQUERY</div>
              <p className="text-black">March 27, 2018</p>
            </div>
            <p className="text-[18px] text-black  font-semibold mt-1  ">Ask HN: Does Anybody Still Use JQuery?</p>
          </div>
        </div>



        <div className="card flex flex-col  max-w-[350px]  text-white   overflow-hidden   m-2">
          <Image
            src={"/card.webp"}
            alt="hero"
            width={350}
            height={700}
            className="  object-cover"
          />
          <div className="content w-full  flex-wrap  h-full flex flex-col  justify-end py-1">
            <div className="flex justify-start items-center font-mono  gap-5">
              <div className=" p-1 px-3 text-black  bg-[#9112F9] rounded-md">JQUERY</div>
              <p className="text-black">March 27, 2018</p>
            </div>
            <p className="text-[18px] text-black  font-semibold mt-1  ">Ask HN: Does Anybody Still Use JQuery?</p>
          </div>
        </div>





      </div>





    </div>
  );
};

export default MainPage;
