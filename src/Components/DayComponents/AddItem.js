import React, { Component } from 'react';

class AddItem extends Component {

    state = {
        name: ''
    }

    addState = (event) => {
        this.setState ({
            name: event.target.value
        })
    }

    addItemToDay = (event) => {
        event.preventDefault(); 

        if (this.state.name == '') {
            return;
        }

        this.props.Metoda(this.state.name);
        this.setState ({
            name: ''
        })
    }

    render() {
        return (
            <div className="addItem">
                <form onSubmit={this.addItemToDay}>
                    <input onChange={this.addState}  value={this.state.name} type="text" className=""></input>

                    <button type="submit" className="site-btn">Zapisz</button>
                </form>
            </div>
        );
    }
}

export default AddItem;
