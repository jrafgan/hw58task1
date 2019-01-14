import React, {Component} from 'react';
import './App.css';
import Modal from "./ui/Modal/Modal";
import ShowAlertBtn from "./ui/Button/ShowAlertBtn";


class App extends Component {
    state = {
            showAlertW: false,
        };


    closed = () => {
        let copy = this.state;
        copy.showAlertW = false;
        this.setState({copy});
    };

    continued = () => {
        alert('You pressed Continue')
    };

    modalShow = () => {
        const copy = this.state;
        copy.showAlertW = true;
        this.setState({copy})
    };

    render() {

        return (
            <div className="App">

                <ShowAlertBtn onClickBtn={this.modalShow}/>
                <Modal
                    show={this.state.showAlertW}
                    title={"Some kinda modal title"}
                    text={"This is modal content"}
                    config={[
                        {type: 'Success', label: 'Continue', clicked: this.continued},
                        {type: 'Danger', label: 'Close', clicked: this.closed}
                    ]}/>
            </div>
        );
    }
}

export default App;
