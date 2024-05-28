import { useEffect, useState } from "react";
import TableData from "../../components/TableData/TableData";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { DataSelectors } from "../../store/selectors";
import { Button } from "@mui/material";
import { ButtonModalWrapper, HomeContainer } from "./styles";
import ModalCreate from "../../components/ModalCreateData/ModalCreate";

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
        visible={isVisibleCreateModal}
        setVisible={setIsVisibleCreateModal}
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
