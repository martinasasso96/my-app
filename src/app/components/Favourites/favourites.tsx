import { WEATHER_ICON_CODES } from "@/app/views/Dashboard/dashboard.models";
import * as S from "./favourites.style";
import Sunny from "@/app/icons/Sunny/Sunny";
import Cloudy from "@/app/icons/Cloudy/Cloudy";
import Rainy from "@/app/icons/Rainy/Rainy";
import Stormy from "@/app/icons/Stormy/Stormy";
import Snowy from "@/app/icons/Snowy/Snowy";
import { useFavourites } from "./favourites.hook";
import Add from "@/app/icons/Add/Add";
import Check from "@/app/icons/Check/Check";
import Trash from "@/app/icons/Trash/Trash";

const Favourites = () => {
  const icon = (iconCode: string) => {
    if (WEATHER_ICON_CODES?.sunny?.includes(iconCode || ""))
      return <Sunny height={"80px"} />;
    if (WEATHER_ICON_CODES?.cloudy?.includes(iconCode || ""))
      return <Cloudy height={"80px"} />;
    if (WEATHER_ICON_CODES?.rainy?.includes(iconCode || ""))
      return <Rainy height={"80px"} />;
    if (WEATHER_ICON_CODES?.stormy?.includes(iconCode || ""))
      return <Stormy height={"80px"} />;
    if (WEATHER_ICON_CODES?.snowy?.includes(iconCode || ""))
      return <Snowy height={"80px"} />;
  };

  const {
    favorites,
    handleAdd,
    handleEdit,
    editMode,
    selected,
    updateSelected,
    deleteFavourites,
  } = useFavourites();

  return (
    <S.Wrap>
      <S.TitleBar>
        <S.Title>Preferiti</S.Title>
        {favorites.length !== 0 && (
          <div onClick={handleAdd} style={{ marginRight: "15px" }}>
            <Add height={"30px"} color="#4881ae" />
          </div>
        )}
        {favorites.length !== 0 && (
          <div onClick={handleEdit} style={{ marginRight: "15px" }}>
            <Check height={"30px"} color="#4881ae" />
          </div>
        )}
        {editMode && (
          <div onClick={deleteFavourites}>
            <Trash height={"30px"} color="#4881ae" />
          </div>
        )}
      </S.TitleBar>

      {favorites?.length !== 0 ? (
        <S.BoxWrap>
          {favorites?.map((city: any, index: number) => {
            return (
              <S.Box
                key={index}
                style={{
                  backgroundColor:
                    editMode && selected.includes(index)
                      ? "#cc77dd"
                      : city?.color || "#6ea9d7",
                }}
                onClick={() => editMode && updateSelected(index)}
              >
                <div>{city?.name}</div>
                <S.Stats>
                  <div>{city?.temp_c}°</div>
                  {icon(city?.iconCode?.toString() || "")}
                </S.Stats>
              </S.Box>
            );
          })}
        </S.BoxWrap>
      ) : (
        <S.AddBox>
          <div onClick={handleAdd}>
            <Add height={"80px"} color="#4881ae" />
          </div>
        </S.AddBox>
      )}
    </S.Wrap>
  );
};

export default Favourites;
