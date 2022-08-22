import React from "react";

const Shop = () => {
  const imageStyle = `w-full h-full object-cover `;
  const desStyle = `absolute bottom-0 left-0 bg-white px-5 py-3 mb-5 ml-6 uppercase font-bold hover:scale-110 cursor-pointer transition-all`;
  return (
    <div className="container m-auto px-10 md:px-5 lg:px-2.5">
      <div className="text-center mt-20">
        <h1 className="uppercase font-bold text-[#252B42] text-2xl mb-2.5 ">
          EDITOR’S PICK
        </h1>
        <p className="text-sm text-[#737373] mb-12">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-[30px] grid-rows-[500px_500px_240px_240px] md:grid-rows-[240px_240px] transition ">
        <div className="col-span-1 lg:col-span-5 lg:row-span-2 relative">
          <img
            className={imageStyle}
            src="https://images.unsplash.com/photo-1512794268250-65fd4cd7441f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="man"
          />
          <div className={desStyle}>Man</div>
        </div>
        <div className="col-span-1 lg:col-span-2 lg:row-span-2 relative">
          <img
            className={imageStyle}
            src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="woman"
          />
          <div className={desStyle}>Woman</div>
        </div>
        <div className="col-span-1 lg:col-span-2 lg:row-span-1 relative">
          <img
            className={imageStyle}
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
            alt="accessories"
          />
          <div className={desStyle}>Accessories</div>
        </div>
        <div className="col-span-1 lg:col-span-2 lg:row-span-1 relative">
          <img
            className={imageStyle}
            src="https://images.unsplash.com/photo-1510025369388-f613ec4bc10b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="kids"
          />
          <div className={desStyle}>Kids</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
