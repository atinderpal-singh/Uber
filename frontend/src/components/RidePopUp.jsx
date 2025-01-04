import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute top-0 w-[93%]"
        onClick={() => {
          props.setRidePopUpPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-300"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>

      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h2 className="text-lg font-medium">Mr Heu</h2>
        </div>
        <h5 className="text-lg font-semibold">4 KM</h5>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-range-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Urban Estate, Patiala
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Urban Estate, Patiala
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between mt-5">
        <button
          onClick={() => {
            props.setRidePopUpPanel(false);
          }}
          className=" bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg "
        >
          Ignore
        </button>
        <button
          onClick={() => {
            props.setConfirmRidePopUpPanel(true);
            props.setRidePopUpPanel(false);
          }}
          className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg "
        >
          Accept
        </button>
        
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
