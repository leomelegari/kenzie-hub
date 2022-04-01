import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Modal from "../../components/Modal";
import ModalEdit from "../../components/EditModal";
import Navbar from "../../components/Navbar";
import api from "../../services";
import { Animation, Line } from "./style";
import { Redirect } from "react-router-dom";

const Dashboard = ({ auth, setAuth }) => {
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [editValue, setEditValue] = useState([]);
  const [newTech, setNewTech] = useState([]);
  const [data] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:data")) || ""
  );
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  useEffect(() => {
    api
      .get(`/users/${data.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setNewTech(response.data.techs);
      });
  }, [newTech, data.id, token]);

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <Animation>
      {modalEdit && (
        <ModalEdit
          setModalEdit={setModalEdit}
          editValue={editValue}
          newTech={newTech}
          setNewTech={setNewTech}
        />
      )}
      {modal && (
        <Modal setModal={setModal} setNewTech={setNewTech} newTech={newTech} />
      )}
      <Navbar setAuth={setAuth} />
      <Line />
      <Header name={data.name} module={data.course_module} />
      <Line />
      <Main
        newTech={newTech}
        setModal={setModal}
        setModalEdit={setModalEdit}
        setEditValue={setEditValue}
      />
    </Animation>
  );
};

export default Dashboard;
