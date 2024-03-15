import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false)
  const handleNewBudget = ( ) =>{
    setModal(true)
  }

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      ></Header>
      {isValidBudget && (
        <div className="nuevo-gasto">
          <img src={IconoNuevoGasto} alt="icono nuevo gasto"  onClick={handleNewBudget}/>
        </div>
      )}
      {modal&& <Modal setModal={setModal}></Modal>}
    </div>
  );
}

export default App;
