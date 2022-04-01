import Button from "../Button";
import Input from "../Input";
import {
  ModalDiv,
  ContainerInput,
  ModalContainer,
  ContainerHeader,
} from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../Select";
import api from "../../services";
import { useState } from "react";
import { toast } from "react-toastify";

const Modal = ({ setModal, setNewTech, newTech }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const addTech = ({ title, status }) => {
    api
      .post(
        "/users/techs",
        {
          title: title,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setNewTech([...newTech, response.data]);
        toast.info("Nova tecnologia cadastrada!");
      })
      .catch(err => toast.error("Oops... Tecnologia já cadastrada!"))

    setModal(false);
  };

  return (
    <ModalDiv>
      <ModalContainer onSubmit={handleSubmit(addTech)}>
        <ContainerHeader>
          <h1>Cadastrar tecnologia</h1>
          <Button onClick={() => setModal(false)}>X</Button>
        </ContainerHeader>
        <ContainerInput>
          <label>Nome</label>
          <Input
            register={register}
            name="title"
            placeholder="Nome da tecnologia"
          />
          <span className="error">{errors.title?.message}</span>
        </ContainerInput>
        <ContainerInput>
          <label>Selecionar status</label>
          <Select register={register} name="status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
        </ContainerInput>
        <Button type="submit">Cadastrar tecnologia</Button>
      </ModalContainer>
    </ModalDiv>
  );
};

export default Modal;
