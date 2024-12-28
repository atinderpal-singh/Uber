import React from 'react'
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {

    const locations = ['24B, Near Kapoor\'s cafe, Coding, Punjab',
        "24B, Near cafe, Coding, Punjab",
        "24B, Coding, Punjab"
    ]
  return (
    <div>
        {/* This is just a Sample Data */}
        {
            locations.map(function(elem,index){
                return(
                    <div key={index} onClick={()=>{
                        props.setVehiclePanelOpen(true)
                        props.setPanelOpen(false)
                    }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl  items-center justify-start my-2'>
            <h2 className='bg-[#eee] h-8  flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{elem}</h4>
        </div>
                )
            })
        }
    </div>
  )
}

export default LocationSearchPanel