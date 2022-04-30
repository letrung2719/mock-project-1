import React from 'react';
import ListBoxItem from './ListBoxItem';

function ListBox({persons}) {
    return (
        <div style={{width:300, marginTop:20}}>
          {persons.map(person => <ListBoxItem person = {person}/>)}  
        </div>
    );
}

export default ListBox;