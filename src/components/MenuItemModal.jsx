import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useStoreState, useStoreActions } from 'easy-peasy';

export default function FormDialog() {

    const itemData = useStoreState(state => state.menuItemModalData);
    const openState = useStoreState(state => state.menuItemModalState);
    const toggleOpenState = useStoreActions(actions => actions.toggleMenuItemModalState)

    return (
        <div>
            <Dialog open={openState} onClose={toggleOpenState} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{itemData.name}</DialogTitle>
                <DialogContent>
                    Image goes here
          <DialogContentText>
                        {itemData.description}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
