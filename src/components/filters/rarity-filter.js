import React from 'react';
import { connect } from 'react-redux';
import { changeRarityFilter } from '../../actions'

const RarityFilter = ({ rarityFilter, changeRarityFilter }) => {
    const buttons = [
        { name: "All" },
        { name: "Rare" },
        { name: "Epic" },
        { name: "Legendary" },
    ];

    const renderButtons = buttons.map(({ name }) => {
        let classNames = 'btn';
        if (rarityFilter.indexOf(name) !== -1) {
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
                onClick={(e) => changeRarityFilter(e.target.value)}>
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

const mapStateToProps = ({ filter: { rarityFilter } }) => {
    return { rarityFilter };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeRarityFilter: (value) => dispatch(changeRarityFilter(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RarityFilter);
