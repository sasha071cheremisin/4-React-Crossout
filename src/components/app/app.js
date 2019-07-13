import React from 'react';
import { FiltersPage } from '../pages';
import ItemsListContainer from '../../containers/items-list-container/index';


const App = () => {
    return (
        <div className="container">
            <FiltersPage />

            <ItemsListContainer />
        </div>
    );
};

export default App;
