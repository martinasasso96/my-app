import { useModalDays } from "./modalDays.hook";
import { IModalDaysProps } from "./modalDays.models";
import * as S from "./modalDays.style";

const ModalDays = ({ setOpenModal }: IModalDaysProps) => {
  const { handleClick, days } = useModalDays(setOpenModal);
  return (
    <S.Wrap>
      <S.Modal>
        <S.Option onClick={() => handleClick(3)} selected={days === 3}>
          3
        </S.Option>
        <S.Option onClick={() => handleClick(5)} selected={days === 5}>
          5
        </S.Option>
        <S.Option onClick={() => handleClick(7)} selected={days === 7}>
          7
        </S.Option>
      </S.Modal>
    </S.Wrap>
  );
};

export default ModalDays;
