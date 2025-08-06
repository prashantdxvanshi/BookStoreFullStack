import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="my-8 p-3">
        <div className="card dark:bg-slate-900 dark:text-white w-92 shadow-sm hover:scale-105 duration-300">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="bg-blue-500 text-white border rounded-full px-2">{item.category}</div>
            </h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="px-3 py-2 rounded-md bg-gray-900  text-white hover:bg-zinc-700 cursor-pointer">
               Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
