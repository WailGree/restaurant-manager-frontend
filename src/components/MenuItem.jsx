import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStoreActions } from 'easy-peasy';

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

export default function MenuItem({ item }) {
  const setModalItemData = useStoreActions(actions => actions.setMenuItemModalData);
  const toggleMenuItemModal = useStoreActions(actions => actions.toggleMenuItemModalState);

  function handleModalOpen() {
    setModalItemData(item);
    toggleMenuItemModal();
  }

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