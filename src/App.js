import "./App.css";
import { Navbar } from "./Navbar";
import { Profile } from "./Profile";
import { Proyects } from "./Proyects";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Profile />
        <Proyects />
      </main>
    </div>
  );
}

export default App;
