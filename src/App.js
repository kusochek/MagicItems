import React from 'react';
import NavPanel from './components/navPanel';
import ListItems from './components/ ListItems';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

function App(props) {

  const loadItems = () => 
    this.props.listStore.map(item => (
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
    <div>
    {loadItems()}
    </div>
  </Paper>
  )
}


export default connect(
  state => ({
    listStore: state
  }),
  dispatch => ({})
)(App);