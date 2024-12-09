import {
  changeFavoritesAction,
  changeShowCityModalAction,
} from "@/app/store/weatherActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_CITY_TYPE } from "../SelectCity/selectCity.models";
import { IWeatherData } from "@/app/store/store.models";
import { useView } from "@/app/views/views.hook";

export interface IFavorites {
  name: string;
  temp_c: string;
  iconCode: string;
  color: string;
}

export const useFavourites = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [selected, setSelected] = useState<number[]>([]);
  const favorites = useSelector(
    (state: IWeatherData) => state?.weatherData?.favorites
  );
  const dispatch = useDispatch();
  const { updateFavorites } = useView();

  // initialize
  useEffect(() => {
    dispatch(
      changeFavoritesAction(
        JSON.parse(localStorage.getItem("favorites") || "[]") as IFavorites[]
      )
    );
  }, []);

  const handleAdd = () => {
    dispatch(
      changeShowCityModalAction({
        state: true,
        type: SELECT_CITY_TYPE.ADD,
      })
    );
  };

  const handleEdit = () => {
    setEditMode(!editMode);
    setSelected([]);
  };

  const updateSelected = (n: number) => {
    if (editMode) {
      if (selected.includes(n)) {
        setSelected(selected.filter((s) => s !== n));
      } else {
        setSelected(selected.concat(n));
      }
    }
  };

  const deleteFavourites = () => {
    const f: IFavorites[] = [];

    favorites.forEach((fav, index) => {
      if(!selected.includes(index)){
        f.push(fav);
      }
    })

    localStorage.setItem("favorites", JSON.stringify(f));
    dispatch(changeFavoritesAction(f));
    setEditMode(false);
  };

  return {
    favorites,
    handleAdd,
    handleEdit,
    editMode,
    updateSelected,
    selected,
    deleteFavourites,
  };
};
