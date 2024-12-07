import Close from "@/app/icons/Close/Close";
import * as S from "./centralModal.style";
import { ICentralModalProps } from "./centralModal.models";
import { useCentralModal } from "./centralModal.hook";

const CentralModal = ({ setOpenModal }: ICentralModalProps) => {
  const { handleChange, list, city, onSelect, onConfirm } = useCentralModal({
    setOpenModal,
  });

  return (
    <S.Wrap>
      <S.Modal>
        <S.Close onClick={() => setOpenModal(false)}>
          <Close />
        </S.Close>

        <S.Box>
          <S.Label>Seleziona la tua città:</S.Label>
          <input
            list="brow"
            onChange={(e) => handleChange(e)}
            value={city?.name}
            placeholder="Città..."
          />
          {list.length !== 0 && (
            <ul>
              {list.map((d) => {
                return <li onClick={() => onSelect(d)}>{d.name}</li>;
              })}
            </ul>
          )}
        </S.Box>

        <S.Button onClick={() => onConfirm()}>Aggiorna le previsioni</S.Button>
      </S.Modal>
    </S.Wrap>
  );
};

export default CentralModal;

/**
 * 
 * <input list="brow" onChange={(e) => handleChange(e)} />
        <datalist id="brow">
          {list.map((d) => {
            return <option value={d.name} />;
          })}
        </datalist>


        <input type="submit" value="Submit" />
 */
