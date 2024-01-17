import React from "react";
import Linkedin from "../assets/Linkedin.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
function AboutUsFooter() {
  return (
    <>
      <div className="flex w-full justify-center items-center flex-col mt-16 bg-tertiary gap-9 pb-16 pt-16">
        <p className="font-semibold">Follow us on social media</p>
        <div className="flex gap-5 ">
          <div className=" bg-secondary rounded-full border-1 p-3">
            <img src={Linkedin} />
          </div>
          <div className=" bg-secondary rounded-full border-1 p-3">
            <img className=" bg-secondary" src={instagram} />
          </div>
          <div className=" bg-secondary rounded-full border-1 p-3">
            <img className=" bg-secondary" src={facebook} />
          </div>
        </div>
        <p> © 2023 RootsfromIndia | All Rights Reserved </p>
      </div>
    </>
  );
}
export default AboutUsFooter;
