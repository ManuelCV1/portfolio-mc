import "./App.css";
import { Navbar } from "./Navbar";
import { Profile } from "./Profile";
import { Proyects } from "./Proyects";
import { proyectsInfo } from "./consts/proyectsInfo";
import { Contacto } from "./Contacto";
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
