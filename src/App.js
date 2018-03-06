import React, { Component } from 'react';
import Header from './components/Header'
import Modal from 'react-modal';
import './App.css';

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

class App extends Component {
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

   this.closeModal()
 }


  render() {
    return (
      <div className="App">
        <Header />
        <div>
          Bem vindo!

          <button onClick={this.openModal}>Registrar LEF</button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <button onClick={this.closeModal}>x</button>
          <form>
            <div>
              <label>LEF</label>
              <input name='lef' id='lef' onChange={(evt) => this.setState({lef : evt.target.value})}/>
            </div>
            <div>
              <label>Volume</label>
              <input name='volume' id='volume' onChange={(evt) => this.setState({volume : evt.target.value})}/>
            </div>
            <button onClick={(evt) => this.enviar(this)}>Enviar</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default App;
