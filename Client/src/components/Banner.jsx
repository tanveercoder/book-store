import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10  mb-3 pb-5">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
          <div className="quote-section my-10">
  <p className="text-lg md:text-2xl font-semibold text-center italic my-6">
    "A reader lives a thousand lives before he dies. The man who never reads lives only one."
  </p>
  <p className="text-md md:text-xl text-center">
    - George R.R. Martin
  </p>
</div>
            <p className="text-sm md:text-xl">
            Welcome to our bookstore, where every page is an adventure waiting to unfold. 
  Discover tales that captivate, stories that inspire, and worlds that enchant. 
  Dive into a realm of imagination and let your literary journey begin!
            </p>
            
          </div>
         
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src="https://wordpress.bigissue.com/wp-content/uploads/2022/02/1502_Bookstore_Hero-1536x864.jpg"
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
           <br />
        </div>
       
      </div>
    </>
  );
}

export default Banner;
