import React from 'react';
import FiltersPage from '../filters-page';
import ItemsListContainer from '../../containers/items-list-container/index';
import FormChangePerPage from '../form-change-per-page';
import FormChangeSearchTerm from '../form-change-search-term';

const App = () => {
    return (
        <div className="container">
            <FiltersPage />
            <FormChangePerPage/>
            <FormChangeSearchTerm />
            <ItemsListContainer />
        </div>
    );
};

export default App;
