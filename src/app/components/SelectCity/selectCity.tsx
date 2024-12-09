import Close from "@/app/icons/Close/Close";
import * as S from "./selectCity.style";
import { useSelectCity } from "./selectCity.hook";
import { ISelectCityProps } from "./selectCity.models";

const SelectCity = ({ type }: ISelectCityProps) => {
  const { handleChange, list, city, onSelect, onConfirm, data, closeModal } =
    useSelectCity({
      type,
    });

  return (
    <S.Wrap>
      <S.Modal>
        <S.CloseWrap>
          <S.Close onClick={closeModal}>
            <Close />
          </S.Close>
        </S.CloseWrap>

        <S.Box>
          <S.Label>{data.label}</S.Label>
          <input
            list="brow"
            onChange={(e) => handleChange(e)}
            value={city?.name}
            placeholder="Città..."
          />
          {list.length !== 0 && (
            <ul>
              {list.map((d, index) => {
                return (
                  <li key={index} onClick={() => onSelect(d)}>
                    {d.name}
                  </li>
                );
              })}
            </ul>
          )}
        </S.Box>

        <S.Button onClick={() => onConfirm()}>{data.buttonLabel}</S.Button>
      </S.Modal>
    </S.Wrap>
  );
};

export default SelectCity;
