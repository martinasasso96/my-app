import Close from "@/app/icons/Close/Close";
import * as S from "./errorModal.style";
import { useErrorModal } from "./errorModal.hook";
import Alert from "@/app/icons/Alert/Alert";

const ErrorModal = () => {
  const { closeModal, error } = useErrorModal();

  return (
    <S.Wrap>
      <S.Modal>
        <S.CloseWrap>
          <S.Close onClick={closeModal}>
            <Close />
          </S.Close>
        </S.CloseWrap>
        <S.IconError>
          <Alert height={"100px"} color="#db0909" />
          <p>Ops...</p>
          <p>Qualcosa è andato storto</p>
          <p>
            [{error?.code} - {error?.message}]
          </p>
        </S.IconError>
      </S.Modal>
    </S.Wrap>
  );
};

export default ErrorModal;
