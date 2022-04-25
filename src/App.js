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
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [whichModal, setWhichModal] = useState('add')

  function openModal(type) {
    setWhichModal(type)
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  console.log(whichModal)

  return (
    <div className="App">
      <GlobalStyle />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {whichModal === "add" ? <AddModal closeModal={closeModal}></AddModal> : <EditModal closeModal={closeModal}></EditModal>}
        
                        
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
      <Routes openModal={openModal} />
    </div>
  );
}

export default App;
