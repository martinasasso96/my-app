import { SELECT_CITY_TYPE } from "./selectCity.models";

export const organizeSelectCity = (type: SELECT_CITY_TYPE) => {
  if (type === SELECT_CITY_TYPE?.CURRENT) {
    return {
      label: "Seleziona la città da monitorare:",
      buttonLabel: "Calcola le previsioni",
    };
  }
  return {
    label: "Seleziona una nuova città da aggiungere ai tuoi preferiti:",
    buttonLabel: "Aggiungi ai preferiti",
  };
};
