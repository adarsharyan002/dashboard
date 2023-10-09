import Events from "../Components/Events";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Modal from "../Components/Modal";
import { useState } from "react";
import './Main.css'

const Main = () => {

   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };
    return ( 
        <div className="main_container">
            <Navbar/>
            <Header/>
            <Events/>
            <button className="circular-btn-modal" onClick={openModal}>Add Events</button>
             <Modal isOpen={modalIsOpen} onClose={closeModal}></Modal>
        </div>
     );
}
 
export default Main;