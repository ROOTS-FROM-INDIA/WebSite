import middle from "../assets/middle-finger.svg";

function Banner() {
  return (
    <div className="relative flex flex-col-reverse sm:flex-row items-center justify-start bg-tertiary text-center sm:text-left px-4">
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

      <div className="sm:w-1/2 z-20">
        <div className="flex flex-col items-center md:items-start justify-around space-y-10 ml-5 my-5 md:mt-48 md:ml-24 md:my-20">
          <div className="text-neutral1 text-2xl sm:text-4xl md:text-5xl font-semibold">
            Lorem ipsum dolor sit amet{" "}
            <span className="text-secondary font-semibold">consectetur</span>.
          </div>
          <p className="text-neutral2 font-medium">
            Lorem ipsum dolor sit amet consectetur. Montes diam vulputate morbi
            scelerisque ipsum rutrum duis. Et lacus gravida feugiat.
          </p>
          <button className="button-secondary sm:bg-white sm:text-secondary">
            Connect With Us
          </button>
        </div>
      </div>
      <div className="md:relative sm:w-1/2 mt-24">
        <img src={middle} alt="" className="md:absolute -top-72 right-0 w-full" />
      </div>
    </div>
  );
}

export default Banner;
