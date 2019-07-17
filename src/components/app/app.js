import React from 'react';
import { FiltersPage } from '../pages';
import { ItemsListContainer, ItemDetailInfoContainer } from '../../containers';
import ModalWindow from '../modal-window';
import './app.scss';

const App = () => {
    return (
        <>
            <div className="app container">
                <FiltersPage />
                <ItemsListContainer />
            </div>
            <ModalWindow>
                <ItemDetailInfoContainer />
            </ModalWindow>
        </>
    );
};

export default App;
