import CloseBtn from "../img/cerrar.svg"
const Model = ({setModal}) => {
  const closeModal = ()=>{
    setModal(false)
  }
  return <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="cerrar modal"  onClick={closeModal}/>
      </div>
  </div>;
};

export default Model;
