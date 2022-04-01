import Button from "../Button";
import Input from "../Input";
import {
  ModalDiv,
  ContainerInput,
  ModalContainer,
  ContainerHeader,
} from "./style";
import { useForm } from "react-hook-form";
import Select from "../Select";
import api from "../../services";
import { useState } from "react";
import { toast } from "react-toastify";

const ModalEdit = ({
  setModalEdit,
  editValue,
  newTech,
  setNewTech,
  removeTech,
}) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const editTech = ({status}) => {
    console.log(status);
    api
      .put(
        `/users/techs/${editValue.id}`,
        {
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => toast.info("Status atualizado!"));
    setModalEdit(false);
  };

  const deleteTech = () => {
    api
      .delete(`/users/techs/${editValue.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => toast.success("Tecnologia removida com sucesso!"));
      setModalEdit(false);
  };

  return (
    <ModalDiv>
      <ModalContainer onSubmit={handleSubmit(editTech)}>
        <ContainerHeader>
          <h1>Tecnologia - detalhes</h1>
          <Button onClick={() => setModalEdit(false)}>X</Button>
        </ContainerHeader>
        <ContainerInput>
          <label>Nome</label>
          <Input
            register={register}
            name="title"
            value={editValue.title}
            disabled
          />
          <span className="error">{errors.title?.message}</span>
        </ContainerInput>
        <ContainerInput>
          <label>Status</label>
          <Select register={register} name="status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
        </ContainerInput>
        <div className="container-button">
          <Button type="submit">Salvar alterações</Button>
          <Button type="button" onClick={deleteTech}>Excluir</Button>
        </div>
      </ModalContainer>
    </ModalDiv>
  );
};

export default ModalEdit;
