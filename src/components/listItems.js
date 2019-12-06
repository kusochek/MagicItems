import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  panel: {
    margin: '1px 200px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '37%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  detail: {
    display: 'flex',
    alignItems: 'center',    
  },
}));

export default ({id, name, quality, description}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root} key={id}>
      <ExpansionPanel className={classes.panel} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            {name}
          </Typography>
          <Typography className={classes.secondaryHeading}><b>Тип:</b> 
            {type}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.detail}>
          <Typography className={classes.heading}><b>Особенность:</b> 
            {quality}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}