import { createStore } from 'easy-peasy';

const context = createStore({
    menuItemModalOpen: false,
    menuItemModalData: []
});

export default context;