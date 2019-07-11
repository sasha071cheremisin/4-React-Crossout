import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../actions'

import './fraction-filter.scss';

const FractionFilter = ({ fractionFilter, changeFilter }) => {
    const buttons = [
        { name: "All" },
        { name: "Lunatics" },
        { name: "Nomads" },
        { name: "Scavanger" },
        { name: "Steppenwolfs" },
        { name: "Dawn's Children" },
        { name: "Firestarters" }
    ];
    const renderButtons = buttons.map(({ name }) => {
        let classNames = 'btn';
        if(fractionFilter.indexOf(name) !== -1) {
            classNames += ' btn-primary';
        } else {
            classNames += ' btn-secondary';
        }
        return (
            <button
                key={name}
                className={classNames}
                type="button"
                value={name}
                onClick={(e) => changeFilter(e.target.value)}>
                {name}
            </button>
        );
    });
    return (
        <div className="fraction-filter btn-group btn-group-toggle">
            {renderButtons}
        </div>
    );
};

const mapStateToProps = ({ fractionFilter }) => {
    return { fractionFilter };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilter: (value) => dispatch(changeFilter(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FractionFilter);
