import React from 'react';
import NavPanel from './components/navPanel';
import ListItems from './components/ ListItems';
import Paper from '@material-ui/core/Paper';


export default function App(props) {

  const loadItems = () => props.items
    .map(item => (
      <ListItems
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