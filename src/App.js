import logo from "./logo.svg";
import "./App.css";
import Products from "./Products";
import Input from "./Input";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCart from "./NavbarCart";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Input /> */}
        <NavbarCart />
        <Products />
      </Provider>
    </div>
  );
}

export default App;
