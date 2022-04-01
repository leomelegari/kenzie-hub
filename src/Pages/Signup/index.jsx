import { Container, BoxLogin, ContainerInput } from "./style.js";
import Logo from "../../assets/Logo.svg";
import Input from "../../components/Input/index.jsx";
import Button from "../../components/Button/index.jsx";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/index.js";
import { toast } from "react-toastify";
import { Link, useHistory, Redirect } from "react-router-dom";
import Select from "../../components/Select/index.jsx";

const Signup = ({ auth }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo de 6 digitos"),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onHandleSubmit = ({
    name,
    email,
    password,
    course_module,
    bio = " ",
    contact = " ",
  }) => {
    const user = { name, email, password, course_module, bio, contact };
    api
      .post("/users", user)
      .then((response) => {
        toast.success("Usuário cadastrado com sucesso!");
        return history.push("/");
      })
      .catch((err) => toast.error("Oops... Esse e-mail já está cadastrado"));
  };

  if(auth) {
    return <Redirect to="/dashboard" />
  };

  return (
    <Container>
      <div className="signup-header">
        <img src={Logo} alt="kenziehub logo" />
        <Link to="/">
          <Button>Voltar</Button>
        </Link>
      </div>
      <BoxLogin onSubmit={handleSubmit(onHandleSubmit)}>
        <div>
          <h1>Crie sua conta</h1>
          <span>Rápido e grátis, vamos nessa?!</span>
        </div>
        <ContainerInput>
          <label>Nome</label>
          <Input
            register={register}
            name="name"
            placeholder="Digite seu nome"
          />
          <span className="error">{errors.name?.message}</span>
        </ContainerInput>
        <ContainerInput>
          <label>Email</label>
          <Input
            register={register}
            name="email"
            placeholder="Digite seu e-mail"
          />
          <span>{errors.email?.message}</span>
        </ContainerInput>
        <ContainerInput>
          <label>Senha</label>
          <Input
            register={register}
            name="password"
            type="password"
            placeholder="Digite sua senha"
          />
          <span>{errors.password?.message}</span>
        </ContainerInput>
        <ContainerInput>
          <label>Confirmar senha</label>
          <Input
            register={register}
            name="confirmPassword"
            type="password"
            placeholder="Repita a senha"
          />
          <span>{errors.confirmPassword?.message}</span>
        </ContainerInput>
        <ContainerInput>
          <label>Selecionar módulo</label>
          <Select register={register} name="course_module">
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Módulo 1
            </option>
            <option value="Segundo módulo (Frontend Avançado)">Módulo 2</option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Módulo 3
            </option>
            <option value="Quarto módulo (Backend Avançado)">Módulo 4</option>
          </Select>
        </ContainerInput>
        <Button type="submit">Cadastrar</Button>
      </BoxLogin>
    </Container>
  );
};

export default Signup;
