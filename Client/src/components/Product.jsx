import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Product() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/book/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };
    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-12">
        <Link to="/" className="text-blue-500 hover:underline">
          &lt; Back to Books
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img className="w-full h-auto object-cover" src={book.image} alt={book.title} />
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl mb-4">{book.title}</h1>
          <p className="text-lg">{book.category}</p>
          <p className="text-lg">${book.price}</p>
          <div className="mt-6 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 duration-300">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
