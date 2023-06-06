import "./App.css";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { Proyects } from "./components/Proyects";
import { proyectsInfo } from "./consts/proyectsInfo";
import { Contacto } from "./components/Contacto";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Profile />
          <Proyects proyectsInfo={proyectsInfo} />
          <Contacto />
        </main>
      </div>
    </Provider>
  );
}

export default App;
