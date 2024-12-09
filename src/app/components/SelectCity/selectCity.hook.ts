import { ILocation, useAutocomplete } from "@/app/hooks";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { SELECT_CITY_TYPE, ISelectCityProps } from "./selectCity.models";
import { useView } from "@/app/views/views.hook";
import { IFavorites } from "../Favourites/favourites.hook";
import { organizeSelectCity } from "./selectCity.organize";
import { changeShowCityModalAction } from "@/app/store/weatherActions";

export const useSelectCity = ({ type }: ISelectCityProps) => {
  const [list, setList] = useState<ILocation[]>([]);
  const [city, setCity] = useState<ILocation>({ name: " " });
  const { refetch: refetchAutocomplete } = useAutocomplete();
  const { updateAll, updateFavorites } = useView();
  const dispatch = useDispatch();

  const onAutocompleteSuccess = useCallback((city: string) => {
    refetchAutocomplete({
      city,
      onSuccess: (data: any) => {
        setList(data?.slice(0, 3));
      },
    });
  }, []);

  const handleChange = (e: any) => {
    setCity({ name: e.target.value });
    if (e.target.value.length === 0) {
      setList([]);
    }
    if (e.target.value.length > 2) {
      onAutocompleteSuccess(e.target.value);
    }
  };

  const onSelect = (value: ILocation) => {
    setCity(value);
    setList([]);
  };

  const closeModal = () => {
    dispatch(
      changeShowCityModalAction({
        state: false,
        type: SELECT_CITY_TYPE.ADD,
      })
    );
  };

  const onConfirm = () => {
    if (type === SELECT_CITY_TYPE.CURRENT) {
      updateAll(city);
    } else {
      updateFavorites(city?.name);
    }
    closeModal();
  };

  return {
    handleChange,
    list,
    city,
    setCity,
    onSelect,
    onConfirm,
    data: organizeSelectCity(type),
    closeModal,
  };
};
