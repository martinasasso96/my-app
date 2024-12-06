import { ICurrentResponse, ILocation, useGetCurrent } from "@/app/hooks";
import { formatDate } from "../components.utils";
import { useState } from "react";

const useWeatherPrimary = () => {
  const today = new Date();
  const formattedDate = formatDate(today);
  const [location, setLocation] = useState<ILocation>();
  const { refetch: refetchCurrent } = useGetCurrent();

  const getUserLocation = () => {
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
  };

  const handleClick = () => {
    getUserLocation();
  };

  return { handleClick, location, formattedDate };
};

export default useWeatherPrimary;
