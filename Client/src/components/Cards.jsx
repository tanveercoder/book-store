// import React from "react";

// function Cards({ item }) {
//   return (
//     <>
//       <div className="mt-4 my-3 p-3">
//         <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
//           <figure>
//             <img className="w-full h-auto object-cover" src={item.image} alt="Shoes" />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               {item.name}
              
//             </h2>
//             <div className="badge badge-secondary bg-brown-400">{item.category}</div>
//             <div>
//             {/* <p >{item.title}</p> */}
//             </div>
//             <div className="card-actions justify-between">
//               <div className="badge badge-outline">${item.price}</div>
//               <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-brown-500 hover:text-white duration-200">
//                 Add to Cart
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;

// import React from "react";

// function Cards({ item }) {
//   return (
//     <>
//       <div className="mt-4 my-3 p-3">
//         <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
//           <figure>
//             <img className="w-full h-auto object-cover" src={item.image} alt="Shoes" />
//           </figure>
//           <div className="card-body">
//             {/* <h2 className="card-title">
//               {item.name}
              
//             </h2> */}
//             <div className="badge badge-secondary bg-brown-400">{item.category}</div>
//             <div>
//             {/* <p >{item.title}</p> */}
//             </div>
//             <div className="card-actions justify-between">
//               <div className="badge badge-outline">${item.price}</div>
              
//             </div>
//             <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-brown-500 hover:text-white duration-200">
//                 Add to Cart
//               </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;
import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="mt-4 my-3 p-3" onClick={() => handleCardClick(item._id)}>
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img className="w-full h-auto object-cover" src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
        <div className="badge badge-secondary bg-blue-400 border border-blue-400">
  {item.category}
</div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
          </div>
          <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-400 hover:text-white duration-200">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

