import React, { Dispatch, SetStateAction } from "react";
import "./Modal.css";
import dataImg from "../../img/date-icon.png";

type ModalProps = {
  titulo: string
  palestrante: string
  start_time: any
  descricao: string
  visiBotao: boolean
  visiModal: boolean
  setModal: Dispatch<SetStateAction<boolean>>
}


export default function Modal({titulo, palestrante, start_time, descricao, visiBotao, visiModal, setModal}: ModalProps) {

  const toggleModal = () => {
    setModal(!visiModal);
  };


  return (
    <>
      {visiModal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-header">
              <h3>{titulo}</h3>
              <li className="palestrante">Por {palestrante}</li>
              <span className="data"><img src={dataImg}></img>{start_time.format("dddd, DD/MM/YYYY [às] HH:mm")}</span>
            </div>
            <p className="descricao">
              {descricao}
            </p>
            {visiBotao && <button className="inscricao">Confirmar Inscrição</button>}
            <button className="close-modal" onClick={toggleModal}>
              <svg viewBox="0 0 20 20" version="1.1"xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="15" x2="15" y2="1" stroke="white" stroke-width="2"/><line x1="1" y1="1" x2="15" y2="15" stroke="white" stroke-width="2"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}