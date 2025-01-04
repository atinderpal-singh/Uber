import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import mapImage from "../assets/map.png";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);

  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);

  const useGSAPAnimation = (ref, state) => {
    useGSAP(() => {
      gsap.to(ref.current, {
        transform: state ? "translateY(0)" : "translateY(100%)",
      });
    }, [state]);
  };

  // Usage for ridePopUpPanel
  useGSAPAnimation(ridePopUpPanelRef, ridePopUpPanel);

  // Usage for confirmRidePopUpPanel
  useGSAPAnimation(confirmRidePopUpPanelRef, confirmRidePopUpPanel);

  return (
    <div className="h-screen">
      <div className="fixed p-4 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber logo"
        />
        <Link
          to="/home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img className="h-full w-full object-cover" src={mapImage} alt="" />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopUpPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white"
      >
        <RidePopUp
          setRidePopUpPanel={setRidePopUpPanel}
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
        />
      </div>
      <div
        ref={confirmRidePopUpPanelRef}
        className="fixed w-full h-screen z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white"
      >
        <ConfirmRidePopUp
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          setRidePopUpPanel={setRidePopUpPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
