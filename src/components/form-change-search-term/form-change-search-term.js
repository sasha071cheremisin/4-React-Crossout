import React from 'react';
import { connect } from 'react-redux';
import { changeSearchTerm } from '../../actions';
import './form-change-search-term.scss';

const FormChangeSearchTerm = ({ searchTerm, changeSearchTerm }) => {
    return (
        <div className='form-change-search-term'>
            <div className='form-change-search-term__text'>Search:</div>
            <input
                type="text"
                className="form-change-search-term__input form-control"
                onChange={(e) => changeSearchTerm(e.target.value)}
                value={searchTerm} />
        </div>
    );
};

const mapStateToProps = ({ filter: { searchTerm } }) => {
    return { searchTerm };
};

const mapDispatchToProps = {
    changeSearchTerm
}

export default connect(mapStateToProps, mapDispatchToProps)(FormChangeSearchTerm);
