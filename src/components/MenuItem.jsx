import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MenuItemModal from './MenuItemModal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 400
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function handleModalOpen() {
  console.log("click");
}

export default function MenuItem({ item }) {

  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea onClick={handleModalOpen}>
        Image goes here
      <CardContent>
          <Typography variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" component="p">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}