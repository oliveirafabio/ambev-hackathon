import React, { Component } from 'react';
import Header from '../Header'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Consequences extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      lef: {}
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
   this.setState({modalIsOpen: true});
 }

 afterOpenModal() {

 }

 closeModal() {
   this.setState({modalIsOpen: false});
 }

 enviar ({state}) {
   //post state.lef e state.volume
   const data = {
    IdUsuarioOperador: 1,
    CodigoSap: 442233,
    IdTipoConsequencia:1,
    Observacao:state.observacao,
    DataLeitura:state.data
   }

   fetch('http://hack-backend.azurewebsites.net/api/inserir-consequencia', {
      method: "POST",
      headers: {
          'Accept': 'application/json, text/plain, /',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  }).then(this.closeModal)
 }


  render() {
    return (
      <div className="App">
        <Header />

        <button className='botao' onClick={this.openModal}>Registrar Consequencia</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <form>
            <div className='form-control'>
              <label>Código do Operador</label>
              <input name='codigoSAP' id='codigoSAP' onChange={(evt) => this.setState({lef : evt.target.value})}/>
            </div>
            <div className='form-control'>
              <label>Tipo de Consequência</label>
              <input name='tipo' id='tipo' onChange={(evt) => this.setState({volume : evt.target.value})}/>
            </div>
            <div className='form-control'>
              <label>Data</label>
              <input name='date' id='date' onChange={(evt) => this.setState({volume : evt.target.value})}/>
            </div>
            <div className='form-control'>
              <label>Observação</label>
              <input name='observacao' id='observacao' onChange={(evt) => this.setState({volume : evt.target.value})}/>
            </div>
            <div className='form-buttons'>
              <button className='botao' onClick={(evt) => this.enviar(this)}>Salvar</button>
              <button className='botao' onClick={this.closeModal}>Cancelar</button>
            </div>

          </form>
        </Modal>
      </div>
    );
  }
}

export default Consequences;
