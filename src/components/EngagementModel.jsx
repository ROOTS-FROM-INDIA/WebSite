import engage from "../assets/engagement-model.svg";
import elipse from "../assets/Ellipse 197.svg";

function EngagementModel() {
  return (
    <div className="flex flex-col justify-around items-center text-center py-12 gap-10  bg-white">
      <h3>Our Engagement Model</h3>
      <div className="relative px-10 pt-10 flex flex-col gap-y-5 mx-10 sm:mx-20 md:mx-24 lg:mx-48 rounded text-center ">
        <p>
          Lorem ipsum dolor sit amet consectetur. Sollicitudin sodales facilisis
          consequat ut scelerisque sagittis. Id urna dignissim nam sit convallis
          quam eu maecenas.Lorem ipsum dolor sit amet consectetur. Sollicitudin
          sodales facilisis consequat ut scelerisque sagittis. Id urna dignissim
          nam sit convallis quam eu maecenas.
        </p>
      </div>
      <div className="flex justify-around sm:ml-20 md:ml-24 lg:ml-48 px-20">
        <div className="flex flex-col space-y-5 pt-10">
          <Model
            title={"Fixed Bid Model"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Sollicitudin sodales facilisis consequat ut."
            }
          />
          <Model
            title={"Time and Material"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Sollicitudin sodales facilisis consequat ut."
            }
          />
          <Model
            title={"Retainer Model"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Sollicitudin sodales facilisis consequat ut."
            }
          />
        </div>
        <div>
          <img src={engage} alt="" className="h-[500px] hidden lg:block" />
        </div>
      </div>
    </div>
  );
}

export default EngagementModel;

function Model({ title, content }) {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="hidden md:block">
        <img src={elipse} alt="" className="" />
      </div>
      <div className="flex-col border-secondary border-2 rounded-2xl md:border-0 p-3 md:text-left space-y-1">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}
