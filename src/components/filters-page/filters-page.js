import React from 'react';
import { FractionFilter, RarityFilter } from '../filters'

const FiltersPage = () => {
    return (
        <div className="d-flex justify-content-between align-items-center flex-wrap my-4">
            <div className="my-2">
                <FractionFilter />
            </div>
            <div className="my-2">
                <RarityFilter />
            </div>
        </div>
    );
};

export default FiltersPage;
