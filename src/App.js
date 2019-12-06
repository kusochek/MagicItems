import React from 'react';
import NavPanel from './components/navPanel';
import ListItem from './components/listItems';
import Paper from '@material-ui/core/Paper';
import { isTemplateElement } from '@babel/types';

export default function App(props) {

  const loadItems = () => props.items
    .map(item => (
      <ListItem
      id={item.id}
      name={item.name}
      type={item.type}
      quality={item.quality}
      description={item.description}
      />
    ))
  return (
  <Paper>
    <NavPanel />
    <Paper>
      {loadItems()}
    </Paper>
  </Paper>
  )
}