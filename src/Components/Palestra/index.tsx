import React, { useEffect, useState } from "react";
import "./Palestras.css";
import Modal from '../Modal';
import moment from 'moment-timezone';
import 'moment/locale/pt-br'

export default function Palestras({
  talk
  }) {
  const targetTimezone = 'America/Sao_Paulo';

  const [modal, setModal] = useState(false);

  const start_time = moment(talk.start_time).tz(targetTimezone);
  const currentDateTime = moment().tz(targetTimezone);
  const isButtonVisible = currentDateTime <= start_time;

  useEffect(() => {
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  }, [modal])

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="card">
        <h3 onClick={toggleModal}>{talk.titulo}</h3>
        <button onClick={toggleModal} className="btn-modal">
          Inscreva-se
        </button>

        <Modal
            titulo={talk.titulo}
            palestrante={talk.palestrante}
            start_time={start_time}
            descricao={talk.descricao}
            visiBotao={isButtonVisible}
            visiModal={modal}
            setModal={setModal}
      />
      <span onClick={toggleModal} className="horario">{start_time.locale("pt-br").format("dddd, DD/MM/YYYY [às] HH:mm")}</span>
      <span className="local"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>&nbsp;<a href={talk.linkLocal} target="_blank">{talk.local}</a></span>
      </div>
    </>
  );
}



