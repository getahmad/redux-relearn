import { Provider } from "react-redux";
import logo from "./logo.svg";
import store from "./store"
import Todos from "./components/Todos"
import Form from "./components/Form"
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <img src={logo} alt="" style={{ width: "100px" }} />
        <h1>react</h1>
        <Todos/>
        <Form/>
      </div>
    </Provider>
  );
}

export default App;
