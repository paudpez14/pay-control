import NewBudget from "./NewBudget";
import BugdgetControl from "./BudgetControl";
const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValidBudget ? (
        <BugdgetControl budget={budget}></BugdgetControl>
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        ></NewBudget>
      )}
    </header>
  );
};

export default Header;
