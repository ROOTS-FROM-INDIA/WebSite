import aboutus from "../assets/about-us.svg";

function Aboutus() {
  return (
    <div className="relative flex flex-col justify-around items-center text-center px-4 mt-32 gap-10">
      <h3>About Us</h3>
      <div className="relative bg-primary px-10 py-14 flex flex-col gap-y-5 mx-10 sm:mx-20 md:mx-24 lg:mx-48 rounded text-center">
        <img
          className="absolute -top-40 -left-56 hidden md:block"
          src={aboutus}
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur. Sollicitudin sodales facilisis
          consequat ut scelerisque sagittis. Id urna dignissim nam sit convallis
          quam eu maecenas.Lorem ipsum dolor sit amet consectetur. Sollicitudin
          sodales facilisis consequat ut scelerisque sagittis. Id urna dignissim
          nam sit convallis quam eu maecenas.
        </p>
        <div>
          <button className="button-secondary mt-14">Know More</button>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
