import React from "react";
import banner from "../../public/Banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  flex flex-col md:flex-row my-10">
        <div className=" order-2 md:order-1 w-full  md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello,welcomes here to learn something{" "}
              <span className="text-blue-500">new everyday!!!!!</span>
            </h1>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
              libero soluta veniam accusantium numquam repudiandae recusandae,
              aspernatur nobis tenetur quasi vero neque repellendus sunt.
            </p>
            <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="input"
              required
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minlength="3"
              maxlength="30"
              title="Only letters, numbers or dash"
            />
          </label>
          </div>
          <button className="btn btn-soft btn-primary mt-3">Secondary</button>
        </div>
        <div className=" order-1 w-1/2 md:w-1/2">
        <img src={banner} className=" w-90 h-90 rounded-3xl mx-2 mt-20   "alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
