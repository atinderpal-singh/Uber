import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import mapImage from "../assets/map.png";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)


  const useGSAPAnimation = (ref, state) => {
    useGSAP(() => {
      gsap.to(ref.current, {
        transform: state ? "translateY(0)" : "translateY(100%)",
      });
    }, [state]);
  };

  useGSAPAnimation(finishRidePanelRef, finishRidePanel);

  return (
    <div className="h-screen">
      <div className="fixed p-4 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber logo"
        />
        <Link
          to="/captain-home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img className="h-full w-full object-cover" src={mapImage} alt="" />
      </div>
      <div className="h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative" 
      onClick={()=>{
        setFinishRidePanel(true);
      }}>
        <h5
          className="p-1 text-center absolute top-0 w-[90%]"
          onClick={() => {}}
        >
          <i className="ri-arrow-up-wide-line text-3xl text-gray-800"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg ">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full h-screen z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}
        />
      </div>
    </div>
  );
};

export default CaptainRiding;
