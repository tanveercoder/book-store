import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className=" mt-19 py-20 max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Welcome to Our Bookstore!
           
          </h1>
          <p className="mt-12 text-lg md:text-xl">
            Step into a world of boundless imagination and endless discovery. Whether you're looking for a gripping novel, an inspiring biography, or the latest bestsellers, we have something special for every reader. Dive into our collection and let the adventures begin!
          </p>
          <Link to="/">
            <button className="mt-6 bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-slate-400 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
