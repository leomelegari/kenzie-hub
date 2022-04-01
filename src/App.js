import GlobalStyle from "./styles/global";
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";


function App() {
  return (
    <div className="container-app">
      <GlobalStyle />
      <ToastContainer theme="dark" position="top-center"/>
      <Routes />
    </div>
  );
}

export default App;
