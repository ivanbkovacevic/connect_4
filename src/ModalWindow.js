import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalWindow extends Component {

    state={
        modal:true
    }

    modalClose=()=> {
      let {modal}=this.state;
        this.setState({ modal: false });
      }

    render() {
        return (
            <div>
                  <Modal show={this.state.modal} onHide={this.modalClose}>
          <Modal.Header closeButton>
            <Modal.Title>UPUTSTVO</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            Igru "Connect 4" igraju dva igrača naizmenično. Ubacivanjem žetona u tablu,
             igrač pokušava da spoji četiri u nizu svojih žetona u bilo kom pravcu, pravolinijski. Žeton ubacujete klikom na kolonu u koju želite da ubacite.
             Igrač koji prvi to uspe, osvaja partiju. Klikom na NOVA IGRA započinjete partiju ispočetka.
            </p>

          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.modalClose}>Zatvori</button>
          </Modal.Footer>
        </Modal>
            </div>
        );
    }
}

export default ModalWindow;