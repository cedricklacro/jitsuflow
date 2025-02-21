import { useState } from 'react'
import Modal from 'react-modal'
import menuicon from '../../assets/icons/menu.svg'
import HeaderNavList from '../HeaderNavList/HeaderNavList'
import './HeaderNavModal.scss'

Modal.setAppElement('#root');

function HeaderNavModal() {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='navmodal'>
      <img className="navmodal__icon" onClick={openModal} src={menuicon} alt="menu icon" />
      <Modal className="navmodal__modal" isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Nav Modal" >
        <HeaderNavList className="navmodal__nav--mobile" onClick={closeModal} />
      </Modal>
    </div>
  )
}

export default HeaderNavModal
