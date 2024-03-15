const BugdgetControl = ({ budget }) => {
  const formatBudget = (cant) => {
    return cant.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <div></div>
        <div className="contenido-presupuesto">
          <p>
            <span>Presupuesto: </span>
            {formatBudget(budget)}
          </p>
          <p>
            <span>Disponible: </span>
            {formatBudget(budget)}
          </p>
          <p>
            <span>Gastado: </span>
            {formatBudget(budget)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BugdgetControl;
