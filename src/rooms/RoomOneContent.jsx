import React, { useState } from 'react';
import { Modal } from 'antd';
import pendrive from '../images/pendrive.jpeg';
import notebook from '../images/notebook-02.jpg';
import Notebook from '../components/Notebook';
import PendrivePassword from '../components/PendrivePassword';
const MODAL_CONTENTS = {
  NOTEBOOK: 'notebook',
  PENDRIVE: 'pendrive'
};

export default function RoomOneContent() {
  const [notebookVisible, toggleNotebook] = useState(false);
  const [modalContent, setModalContent] = useState(MODAL_CONTENTS.NOTEBOOK);

  const openModal = modalContent => {
    setModalContent(modalContent);
    toggleNotebook(!notebookVisible);
  };

  return (
    <div className='roomOne'>
      <div>En el estudio de rodaje olvidaron un pendrive y una libreta que pertenecían al equipo de producción.</div>
      <div className='roomOne-imgs'>
        <img
          className="roomIcon"
          alt="pendrive"
          width={150}
          height={120}
          src={pendrive}
          onClick={openModal.bind(null, MODAL_CONTENTS.PENDRIVE)}
        />
        <img
          className="roomIcon"
          alt="notebook"
          onClick={openModal.bind(null, MODAL_CONTENTS.NOTEBOOK)}
          width={150}
          height={150}
          src={notebook}
        />
        <Modal
          centered={true}
          footer={null}
          visible={notebookVisible}
          onCancel={() => toggleNotebook(false)}
          closable={false}
        >
          {modalContent === MODAL_CONTENTS.NOTEBOOK
            ? <Notebook />
            : <PendrivePassword resolvePendrive={() => {}}/>
          }
        </Modal>
      </div>
    </div>
  );
}
