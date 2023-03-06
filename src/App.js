import "./App.css";
import { Routes, Route } from "react-router-dom";
import Table from "./Components/Table";
import HomePAge from "./Components/HomePAge";
import LoginNew from "./Components/Loginnewpage";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route  exact path="/" name-="loginpage" element={<LoginNew/>}/>=
        <Route  exact path="/table" name-="table" element={<Table/>}/>
        <Route  exact path="*" name-="homepage" element={<HomePAge/>}/>

      </Routes>
    </div>
  );
}

export default App;
