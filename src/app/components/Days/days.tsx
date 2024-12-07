import * as S from "./days.style";
import useDays from "./days.hook";
import SingleDay from "@/app/atoms/SingleDay/singleDay";
import Dots from "@/app/icons/Dots/Dots";
import ModalDays from "@/app/atoms/ModalDays/modalDays";
import { formatSingleDigit, getMonth, getWeekDay } from "../components.utils";

export const Days = () => {
  const { days, handleClick, forecast, openModal, setOpenModal, date } =
    useDays();

  console.log("XX F = ", forecast);

  return (
    <S.Container>
      {openModal && <ModalDays setOpenModal={setOpenModal} />}
      <S.Settings>
        <div>
          Previsioni per i prossimi <b>{days}</b> giorni
        </div>
        <div onClick={handleClick}>
          <Dots height={"20px"} />
        </div>
      </S.Settings>
      <S.Wrap>
        {forecast?.forecastday?.map((f, index) => {
          return (
            <SingleDay
              key={index}
              weekDay={getWeekDay(f?.date)}
              day={formatSingleDigit(f?.date?.getDate())?.toString()}
              month={getMonth(f?.date)}
              iconCode={f?.day?.condition?.code?.toString()}
              temp_max={f?.day?.maxtemp_c?.toString()}
              temp_min={f?.day?.mintemp_c?.toString()}
            />
          );
        })}
      </S.Wrap>
    </S.Container>
  );
};
