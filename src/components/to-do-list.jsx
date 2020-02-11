import React from 'react';
import ListItem from './list-item';

const toDos = [
  {
    id: '01',
    title: 'Clean car'
  },
  {
    id: '02',
    title: 'Organize closest'
  },
  {
    id: '03',
    title: 'Clean house'
  },
  {
    id: '04',
    title: 'Learn React'
  }
];

class ToDoList extends React.Component {
  render(){
    const toDoEle = toDos.map((item) => {
      return <ListItem key={item.id} title={item.title} />
    });
  return (
      <ol>
        {toDoEle}
      </ol>
    );
  }
}

export default ToDoList;