import React from 'react';
import { connect } from 'react-redux';
import { changeFractionFilter } from '../../actions'

const FractionFilter = ({ fractionFilter, changeFractionFilter }) => {
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
        if (fractionFilter.indexOf(name) !== -1) {
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
                onClick={(e) => changeFractionFilter(e.target.value)}>
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

const mapStateToProps = ({ filter: { fractionFilter } }) => {
    return { fractionFilter };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFractionFilter: (value) => dispatch(changeFractionFilter(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FractionFilter);