import { MainDiv, MainHeaderDiv, TechCard } from "./style";
import Button from "../Button/index";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "../Card";

const Main = ({ newTech, setModal, setModalEdit, setEditValue }) => {
  return (
    <MainDiv>
      <MainHeaderDiv>
        <h1>Tecnologias</h1>
        <Button onClick={() => setModal(true)}>
          <AiOutlinePlus />
        </Button>
      </MainHeaderDiv>
      <TechCard>
        <Card tech={newTech} setModalEdit={setModalEdit} setEditValue={setEditValue}/>
      </TechCard>
    </MainDiv>
  );
};

export default Main;
