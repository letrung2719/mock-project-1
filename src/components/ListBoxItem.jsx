import React from 'react';

const item = {
    width: "300px",
    flexDirection: "column",
    backgroundColor: "white", 
    marginTop: "30px", 
    borderRadius: "10px", 
    textAlign: "left", 
    padding: "10px 0px 10px 15px",
    boxShadow: "2px 2px #00000008",
    display: "flex",
};

function ListBoxItem({person}) {
    return (
        <div style={item}>
            <b>{person.name}</b>
            <span style={{ fontSize: 12 }}>{person.age} years old</span>
            <span style={{ fontSize: 12 }}>{person.phone}</span>
        </div>
    );
}

export default ListBoxItem;