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

const Login = ({ auth, setAuth }) => {
  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo de 6 digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onHandleSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token } = response.data;
        const { user } = response.data;

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:data", JSON.stringify(user));

        toast.success("Login realizado com sucesso!");
        setAuth(true);
        return history.push("/dashboard");
      })
      .catch((err) => toast.error("E-mail ou senha inválidos"));
  };

  if(auth) {
    return <Redirect to="/dashboard" />
  };

  return (
    <Container>
      <img src={Logo} alt="kenziehub logo" />
      <BoxLogin onSubmit={handleSubmit(onHandleSubmit)}>
        <div>
          <h1>Login</h1>
        </div>
        <ContainerInput>
          <label>E-mail</label>
          <Input
            register={register}
            name="email"
            placeholder="Digite seu e-mail"
          />
          <span className="error">{errors.email?.message}</span>
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
        <Button type="submit">Entrar</Button>
        <span className="error">Ainda não possui uma conta?</span>
        <Link to="/signup">
          <Button type="button">Cadastre-se</Button>
        </Link>
      </BoxLogin>
    </Container>
  );
};

export default Login;
