import React, { Component } from 'react';
import Item from "./Item";


class ItemList extends Component {

    mapItems = (items) => {
        return items.map(oneItem=>(
            <Item changeDone={(id) => this.props.changeDone(id)} key={oneItem.idItem} keeey={oneItem.idItem} oneName={oneItem.name} isDone={oneItem.isDone} removeItem={(id) => this.props.removeItem(id)} /> 
        ))
    }

    render() {
        return (
            this.mapItems(this.props.propsAddToItemList)
        )
    }
}

export default ItemList;
