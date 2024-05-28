import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { DataSelectors } from "../../store/selectors";
import { Button } from "@mui/material";
import { ButtonModalWrapper, HomeContainer } from "./styles";
import ModalCreate from "../../components/Modal/ModalCreate/ModalCreate";
import TableData from "../../components/Table/TableData/TableData";

const HomePage = () => {
  const { fetchAsyncData } = useActions();
  const [isVisibleCreateModal, setIsVisibleCreateModal] = useState(false);

  const { data } = useAppSelector(DataSelectors);

  const handleModalOnOpen = () => {
    setIsVisibleCreateModal(true);
  };

  useEffect(() => {
    fetchAsyncData();
  }, []);

  return (
    <HomeContainer>
      <TableData data={data} />
      <ModalCreate
        isVisible={isVisibleCreateModal}
        setIsVisible={setIsVisibleCreateModal}
      />

      <ButtonModalWrapper>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleModalOnOpen}
        >
          Добавить документ
        </Button>
      </ButtonModalWrapper>
    </HomeContainer>
  );
};

export default HomePage;
