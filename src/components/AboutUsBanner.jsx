import Subtract from "../assets/Subtract.svg";
import Tubelight from "../assets/Tubelight.svg";
import Rectangle3pics from "../assets/Rectangle3pics.svg";
import peperrocketpic from "../assets/peperrocketpic.svg";
import MicboyAboutUs from "../assets/MicboyAboutUs.svg";
import AboutUsFooter from "../components/AboutUsFooter";
import AboutUsboypic from "../assets/AboutUsboypic.svg";
function AboutUsBanner() {
  return (
    <>
      <div className="flex w-full flex-col  bg-tertiary pb-28  md:w-full md:flex-row md:mt-28 ">
        <div className="flex w-28 h-24 shrink-0 mt-12 md:w-1/3 md:h-3/5  md:mb-3 md:mt-0">
          <img className=" md:h-auto md:w-96   " src={Subtract} />
        </div>
        <div className="md:flex-col md:justify-center md:items-center md:gap-5">
          <div className="flex w-full h-20  items-center justify-center md:mt-44">
            <h3 className="font-semibold ">About Us</h3>
          </div>
          <div className="flex  items-center md:w-96 justify-center">
            <p className="h-28 w-80 md:text-xs md:96 md:h-auto">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin sodales
              facilisis consequat ut scelerisque sagittis. Id urna dignissim nam
              sit convallis
            </p>
          </div>
          <div className="flex w-full h-20  items-center justify-center">
            <button className="button-secondary">Connect With Us</button>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col items-center gap-5 h-64 mt-14 md:flex-row md:w-full">
          <div className="hidden sm:block  md:flex-row md:w-2/5 ">
            <div className="flex md:flex  md:ml-10 ">
              <img className="" src={AboutUsboypic} />
            </div>
          </div>
          <img className="md:hidden" src={Tubelight} />

          <div className="sm:block md:flex-col md:w-3/5 md:gap-10 md:flex md:h-[356px] md:justify-between">
            <div>
              <h3 className="font-semibold">Mission & Vision</h3>
            </div>
            <div className="flex w-80 justify-center md:w-full">
              <p>
                Lorem ipsum dolor sit amet consectetur. Sollicitudin sodales
                facilisis consequat ut scelerisque sagittis. Id urna dignissim
                nam sit convallis
              </p>
            </div>
            <div className="ms:block  md:flex ">
              <p>
                Lorem ipsum dolor sit amet consectetur. Sollicitudin sodales
                facilisis consequat ut scelerisque sagittis. Id urna dignissim
                nam sit convallis
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center flex-col gap-5 mt-14">
          <div>
            <h3 className="font-semibold">Core Values</h3>
          </div>
          <div>
            <p className="h-28 w-80">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin sodales
              facilisis consequat ut scelerisque sagittis. Id urna dignissim nam
              sit convallis
            </p>
          </div>
          <div className="flex gap-4 mt-10">
            <div>
              <img src={Rectangle3pics} />
              <h1>Lorem Ipsum</h1>
            </div>
            <div>
              <img src={Rectangle3pics} />
              <h1>Lorem Ipsum</h1>
            </div>
            <div>
              <img src={Rectangle3pics} />
              <h1>Lorem Ipsum</h1>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-5 h-64 mt-16">
          <div>
            <img src={peperrocketpic} />
          </div>
          <div>
            <h3 className="font-semibold">Why Roots from India</h3>
          </div>
          <div className="flex w-80 justify-center">
            <p>
              Lorem ipsum dolor sit amet consectetur. Sollicitudin sodales
              facilisis consequat ut scelerisque sagittis. Id urna dignissim nam
              sit convallis
            </p>
          </div>
        </div>
        <div>
          <div className="flex w-full flex-col items-center gap-5  h-24 mt-16">
            <h3 className="font-semibold">How We Work</h3>
          </div>
          <div className="flex  justify-center ">
            <p className="w-80">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin sodales
              facilisis consequat ut scelerisque sagittis. Id urna dignissim nam
              sit convallis
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-6 bg-secondary mt-60 flex-col pb-20">
          <div>
            <img src={MicboyAboutUs} />
          </div>
          <div>
            <h1 className="text-white font-semibold">Get in Touch</h1>
          </div>
          <div>
            <p className="text-white">Lorem ipsum dolor sit amet. </p>
            <div className="flex justify-center">
              <p className="text-white ">consectetur</p>
            </div>
          </div>
          <div className=" flex bg-primary rounded">
            <button className="bg-primary w-48 h-12 text-white font-semibold">
              Connect with us
            </button>
          </div>
        </div>
        <div className="flex flex-col  mt-10 justify-center items-center gap-5 ">
          <h3 className="font-semibold">Contact us</h3>
          <p className="font-semibold">freelancing@rootsfromindia.com</p>
          <p className="font-semibold">207.555.0119</p>
        </div>
        <div>
          <AboutUsFooter />
        </div>
      </div>
    </>
  );
}

export default AboutUsBanner;
