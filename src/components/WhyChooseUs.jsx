import choose from "../assets/Component 11.svg";

function WhyChooseUs() {
  return (
    <div className="relative flex flex-col justify-around items-center text-center pt-12 gap-10  bg-secondary">
      {/* <div className="absolute bg-secondary h-full w-1/2"></div> */}
      <h3 className="text-white">Why Choose Us</h3>
      <div className="relative px-10 py-14 flex flex-col gap-y-5 mx-10 sm:mx-20 md:mx-24 lg:mx-48 rounded text-center ">
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur. Sollicitudin sodales facilisis
          consequat ut scelerisque sagittis. Id urna dignissim nam sit convallis
          quam eu maecenas.Lorem ipsum dolor sit amet consectetur. Sollicitudin
          sodales facilisis consequat ut scelerisque sagittis. Id urna dignissim
          nam sit convallis quam eu maecenas.
        </p>
        {/* <img src={choose} alt="" /> */}
        <div>
          <button className="button-alternative mt-14">Know More</button>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
