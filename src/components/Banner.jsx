import { Link } from "react-router-dom";
import middle from "../assets/middle-finger.svg";

function Banner() {
  return (
    <>
      <div className="relative flex flex-col-reverse sm:flex-row items-center justify-start bg-tertiary text-center sm:text-left sm:pt-20 md:h-box p-4">
        <svg
          className="absolute top-16 left-0 w-28 sm:w-48 md:w-96"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 118 103"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 99.9587C7.66129 101.943 15.7054 103 24.0005 103C75.89 103 117.955 61.6376 117.955 10.614C117.955 7.02453 117.747 3.48284 117.341 0H0V99.9587Z"
            fill="#F3B95E"
          />
        </svg>

        <div className="sm:w-1/2 z-20 flex-col justify-between">
          <div className="flex flex-col items-center sm:items-start justify-around space-y-10 ml-5 my-5 md:ml-24 pl-5">
            <div className="text-neutral1 text-2xl sm:text-4xl md:text-5xl font-semibold">
              Lorem ipsum dolor sit amet{" "}
              <span className="text-secondary font-semibold">consectetur</span>.
            </div>
            <p className="text-neutral2 font-medium">
              Lorem ipsum dolor sit amet consectetur. Montes diam vulputate
              morbi scelerisque ipsum rutrum duis. Et lacus gravida feugiat.
            </p>
            <div className="bg-tertiary">
              <Link
                to={"/contactus"}
                className="button-secondary sm:bg-white sm:text-secondary"
              >
                Connect With Us
              </Link>
            </div>
          </div>
        </div>
        <div className="relative flex flex-1 w-full h-[1100px] sm:w-1/2">
          <img
            src={middle}
            alt=""
            className="md:absolute -top-20 right-0 w-full h-full z-20"
          />
          <div className="hidden md:block absolute flex-1 h-full w-96 right-0 top-0 bg-secondary rounded-b-full z-10"></div>
        </div>
      </div>
      <div className="w-full h-24 bg-white"></div>
    </>
  );
}

export default Banner;
