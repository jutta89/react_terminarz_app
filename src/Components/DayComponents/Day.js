import React, { Component } from 'react';
import AddItem from "./AddItem";
import ItemList from "./ItemList";

// 


class Day extends Component {

    state = {
        items: []
    }

    addToState = (itemName) => {
        const item = {
            name: itemName,
            isDone: false,
            idItem: Date.now()
        }
        this.setState({items: [item, ...this.state.items]});
    }

    addState = (event) => {
        this.setState ({
            name: event.target.value
        })
    }

    changeDone = (idItem) => {
        let newListItems = this.state.items.slice();
        let newIdItem = newListItems.find( x => x.idItem === idItem );
        newIdItem.isDone = !newIdItem.isDone;
        this.setState({items: newListItems})
    }

    removeItem = (idItem) => {
        let newListItems = this.state.items.filter(x => x.idItem !== idItem);
        this.setState({items: newListItems})
    }

    render() {
        return (
            <div className="day">
                <AddItem Metoda={this.addToState} />
                <ItemList changeDone={(id) => this.changeDone(id)} propsAddToItemList={this.state.items} removeItem={(id) => this.removeItem(id)}/>

            </div>
        );
    }
}

export default Day;


