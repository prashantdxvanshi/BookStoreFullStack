import React, { useState,useEffect } from "react";
// import list from "../../public/list.json";
import axios from "axios";
import Cards from "./Cards";
import { Link } from "react-router-dom";
const Course = () => {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setbook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getbook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-10 pt-10 item-center justify-center text-center ">
          <h1 className="text-2xl md:text-4xl  font-semibold text-center">
            We're delighted to have you{" "}
            <span className="text-blue-500">Here!!</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum vel
            quaerat, voluptatibus repellendus, odit doloribus praesentium quam
            quibusdam, sequi modi delectus numquam iure explicabo nostrum ipsam
            sed aliquid cupiditate veniam.
          </p>
          <Link to="/">
            <button
              className="bg-blue-500 text-white rounded-md border px-4
        py-2 hover:bg-blue-600 mt-5 "
            >
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
