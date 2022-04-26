import "./App.css";
import Routes from "./routes/index";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";



const customStyles = {
  content: {
    padding: "0px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [whichModal, setWhichModal] = useState('add')
  const [techId, setTechId] = useState('')

  function openModal(type, id) {
    setTechId(id)
    setWhichModal(type)
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {whichModal === "add" ? <AddModal closeModal={closeModal}></AddModal> : <EditModal techId={techId} closeModal={closeModal}></EditModal>}
        
                        
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes openModal={openModal} modalIsOpen={modalIsOpen} />
    </div>
  );
}

export default App;
