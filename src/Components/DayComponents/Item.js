import React from 'react';

const Item = (props) => {
    return (
        <div className="item-hld">
            <div className="">
                {props.oneName}
            </div>
            <div className="buttons-hld">
                <button onClick={() => props.changeDone(props.keeey)}>{props.isDone ? 'zrobione' : 'to do'} </button>
                <button onClick={() => props.removeItem(props.keeey)} className="site-btn">Usuń</button>
            </div>
        </div>
    );
}

export default Item;




