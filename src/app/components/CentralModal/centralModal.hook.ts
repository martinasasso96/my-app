import { ILocation, useAutocomplete } from "@/app/hooks";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { ICentralModalProps } from "./centralModal.models";
import { IWeatherData } from "@/app/store/store.models";
import { useView } from "@/app/views/views.hook";

export const useCentralModal = ({ setOpenModal }: ICentralModalProps) => {
  const [list, setList] = useState<ILocation[]>([]);
  const [city, setCity] = useState<ILocation>({});
  const { refetch: refetchAutocomplete } = useAutocomplete();
  const { updateAll } = useView();

  const onAutocompleteSuccess = useCallback((city: string) => {
    refetchAutocomplete({
      city,
      onSuccess: (data: any) => {
        console.log("autocomplete = ", data);
        setList(data?.slice(0, 3));
      },
    });
  }, []);

  const handleChange = (e: any) => {
    setCity(e.target.value);
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

  const onConfirm = () => {
    updateAll(city);
    setOpenModal(false);
  };

  return { handleChange, list, city, setCity, onSelect, onConfirm };
};
