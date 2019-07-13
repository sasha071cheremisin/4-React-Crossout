import React from 'react';
import { FractionFilter, RarityFilter } from '../filters'
import FormChangePerPage from '../form-change-per-page';
import FormChangeSearchTerm from '../form-change-search-term';

const FiltersPage = () => {
    return (
        <div className="d-flex justify-content-between align-items-center flex-wrap my-4">
            <div>
                <div className="my-2">
                    <FractionFilter />
                </div>
                <div className="my-2">
                    <RarityFilter />
                </div>
            </div>
            <div>
                <div className="my-2"><FormChangePerPage /></div>
                <div className="my-2"><FormChangeSearchTerm /></div>
            </div>
        </div>
    );
};

export default FiltersPage;
