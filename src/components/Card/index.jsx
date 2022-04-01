import { CardDiv, Img } from "./style";
import { useEffect, useState } from "react";
import Empty from "../../assets/empty.png";
import Empty2 from "../../assets/empty2.png";

const Card = ({ tech, setModalEdit, setEditValue }) => {
  const [dataTech, setDataTech] = useState([]);

  useEffect(() => {
    setEditValue(dataTech);
  }, [dataTech, setEditValue]);
  //dataTech
  const executeActions = (title, status, id) => {
    setDataTech({
      title: title,
      status: status,
      id: id,
    });
    setModalEdit(true);
    //useEffect
  };

  if (tech.length > 0) {
    return tech.map((value, index) => {
      return (
        <CardDiv
          key={index}
          onClick={() => executeActions(value.title, value.status, value.id)}
          id={value.id}
        >
          <h1>{value.title}</h1>
          <span>{value.status}</span>
        </CardDiv>
      );
    });
  } else {
    return (
      <Img>
        <img src={Empty2}></img>
        <h1>Você ainda não tem nenhuma tecnologia cadastrada.</h1>
      </Img>
    );
  }
};

export default Card;
