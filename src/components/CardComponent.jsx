import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import timerImg from "../assets/timer.png";
import pickupImg from "../assets/aeroplane.png";

library.add(faHeartSolid, faHeartRegular);

const CardComponent = ({
  title,
  imageUrl,
  price,
  stay,
  stayInSmallScreen,
  pickup,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-[320px] max-sm:w-[200px] rounded-xl shadow-lg text-left ">
      <div className="relative">
        <img
          src={imageUrl}
          alt=""
          width={300}
          height={300}
          className="rounded-xl mx-auto my-2 max-sm:w-48"
        />
        <div
          className="absolute w-8 h-8 bg-white top-2 sm:right-6 max-sm:right-2 focus:outline-none rounded-lg cursor-pointer"
          onClick={() => handleLike()}
        >
          <FontAwesomeIcon
            icon={isLiked ? faHeartSolid : faHeartRegular}
            className={`mx-2 my-2  cursor-pointer ${
              isLiked ? "text-[#db2d2e]" : "text-black"
            }`}
          />
        </div>
        <div className="absolute sm:w-36 max-sm:w-16 -bottom-1 mt-2 sm:right-6 max-sm:right-2 rounded-lg bg-white flex max-sm:gap-1 sm:justify-between">
          <img
            src={timerImg}
            alt=""
            className="sm:w-4 sm:h-4 max-sm:h-2 max-sm:w-2 ml-2 mt-1 sm:mr-2"
          />
          <p className="sm:text-xs max-sm:text-[6px] font-bold mr-4 my-1 hidden sm:block">
            {stay}
          </p>
          <p className="sm:text-xs max-sm:text-[6px] font-bold mr-4 my-1 sm:hidden">
            {stayInSmallScreen}
          </p>
        </div>
      </div>
      <p className="font-bold text-sm max-sm:text-[10px] ml-4 mb-2">{title}</p>
      <div className="flex gap-2 w-9/12 sm:ml-4 max-sm:ml-2 mb-2">
        <img
          src={pickupImg}
          alt=""
          height={15}
          width={15}
          className="max-sm:w-4 max-sm:h-4"
        />
        <p className="text-xs max-sm:text-[7px]">Pickup: {pickup}</p>
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex flex-col">
          <h6 className="ml-4 text-xs max-sm:text-[8px]">Starts at</h6>
          <p className="text-gray-400 max-sm:text-[8px] max-sm:-mt-1 text-xs ml-4">
            ₹<span className="line-through">32,579 </span>{" "}
            <span className="text-base max-sm:text-xs font-bold text-black">
              ₹{price}
            </span>
          </p>
          <p className="text-gray-400 max-sm:text-[7px] text-[10px] ml-4">
            *Excluding all taxes
          </p>
        </div>
        <button className="h-9 bg-[#db2d2e] rounded-lg mr-4 mt-2 text-white max-sm:text-[7px] text-xs border-none">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
