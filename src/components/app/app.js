import React from 'react';
import FiltersPage from '../filters-page';
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
