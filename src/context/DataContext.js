import { createStore, action } from 'easy-peasy';

const context = createStore({
    menuItemModalState: false,
    toggleMenuItemModalState: action((state) => {
        state.menuItemModalState = !state.menuItemModalState;
    }),
    menuItemModalData: [],
    setMenuItemModalData: action((state, data) => {
        state.menuItemModalData = data;
    })
});

export default context;