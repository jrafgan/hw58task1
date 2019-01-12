import React, { Component } from 'react';
import './App.css';
import Modal from "./ui/Modal/Modal";
import imgUrl from "./ui/Ico_close.png"

class App extends Component {
  state = {
    show: true,
    modalTitle: "Some kinda modal title",
    modalText: "This is modal content",
  };

  closed() {
    alert('Modal is closed');
  }
  modalShow() {
    let copy = this.state.show;
    copy = false;
  }
  render() {
    return (
      <div className="App">
        <Modal
            show={this.modalShow}
            closed={this.closed}
            title={this.state.modalTitle}
            text={this.state.modalText}
            imgUrl={imgUrl}
        />
      </div>
    );
  }
}

export default App;
