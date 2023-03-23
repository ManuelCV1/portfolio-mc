import "./App.css";
import { Navbar } from "./Navbar";
import { Profile } from "./Profile";
import { Proyects } from "./Proyects";
import { proyectsInfo } from "./consts/proyectsInfo";
import { Contacto } from "./Contacto";

function App() {
  return (
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
  );
}

export default App;
