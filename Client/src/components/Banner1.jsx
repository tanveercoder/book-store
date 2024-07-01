import React from 'react'

function Banner1() {
  return (
    <>
      <div className='py-10'>
        <div className="carousel max-w-screen-2xl container mx-auto md:px-20 px-4 mb-10">
          <div id="item1" className="carousel-item max-w-screen-2xl container mx-auto md:px-20 px-4">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="w-full" />
          </div>
          <div id="item2" className="carousel-item max-w-screen-2xl container mx-auto md:px-20 px-4">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full" />
          </div>
          <div id="item3" className="carousel-item max-w-screen-2xl container mx-auto md:px-20 px-4">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full" />
          </div>
          <div id="item4" className="carousel-item max-w-screen-2xl container mx-auto md:px-20 px-4">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full" />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2 mb-10">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
        </div>
        <hr className="border-t border-black-200
         my-10" />
      </div>
    </>
  )
}

export default Banner1
