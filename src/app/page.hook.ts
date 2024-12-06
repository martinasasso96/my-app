"use client";

import { useCallback, useEffect, useState } from "react";
import { ICurrentResponse, ILocation, useGetCurrent } from "./hooks/Current";
// import { useGetForecast } from "./hooks/Forecast";

const usePage = () => {
  const [location, setLocation] = useState<ILocation>();

  const { refetch: refetchCurrent } = useGetCurrent();

  /* const { refetch: refetchForecast } = useGetForecast({
    city: location,
    days: 3,
    onSuccess: (data: ICurrentResponse) => {
      console.log("forecast = ", data);
    },
  }); */

  const getUserLocation = useCallback(() => {
    // if geolocation is supported by the users browser
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // save the geolocation coordinates in two variables
          const { latitude, longitude } = position.coords;
          // update the value of userlocation variable
          refetchCurrent({
            city: `${latitude},${longitude}`,
            onSuccess: (data: ICurrentResponse) => {
              console.log("current = ", data);
              setLocation(data?.location);
            },
          });
        },
        // if there was an error getting the users location
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
    // if geolocation is not supported by the users browser
    else {
      console.error("Geolocation is not supported by this browser.");
    }
  },[]);

  useEffect(() => {
    getUserLocation();
    console.log("XX HERE");
  }, [getUserLocation]);

  const handleClick = () => {
    getUserLocation();
  };

  return { handleClick, location };
};

export default usePage;
