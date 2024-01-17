import one from "../assets/client-logos/logo 2.svg";
import two from "../assets/client-logos/Rectangle 4157.svg";
import three from "../assets/client-logos/Rectangle 4187.svg";
import four from "../assets/client-logos/Rectangle 4188.svg";
import five from "../assets/client-logos/Rectangle 4189.svg";
import six from "../assets/client-logos/Rectangle 4190.svg";
import seven from "../assets/client-logos/unnamed 1.svg";
import eight from "../assets/client-logos/Urumee 1.svg";

function OurClients() {
  return (
    <div className="flex flex-col justify-around items-center text-center pt-12 gap-10  bg-neutral3">
      <h3>Our Clients</h3>
      <div className="relative px-10 py-14 flex flex-col gap-y-5 mx-10 sm:mx-20 md:mx-24 lg:mx-48 rounded text-center ">
        <p>
          Lorem ipsum dolor sit amet consectetur. Sollicitudin sodales facilisis
          consequat ut scelerisque sagittis. Id urna dignissim nam sit convallis
          quam eu maecenas.Lorem ipsum dolor sit amet consectetur. Sollicitudin
          sodales facilisis consequat ut scelerisque sagittis. Id urna dignissim
          nam sit convallis quam eu maecenas.
        </p>

        <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 space-y-10">
          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
          <img src={four} alt="" />
          <img src={five} alt="" />
          <img src={six} alt="" />
          <img src={seven} alt="" />
          <img src={eight} alt="" />
        </div>
      </div>
    </div>
  );
}

export default OurClients;
