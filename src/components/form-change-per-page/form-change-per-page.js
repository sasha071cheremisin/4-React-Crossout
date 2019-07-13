import React from 'react';
import './form-change-per-page.scss';
import { connect } from 'react-redux';
import { changePerPage } from '../../actions';

const FormChangePerPage = ({changePerPage}) => {
    return (
        <div className='form-change-per-page'>
            <div className='form-change-per-page__text'>Show</div>
            <select className="form-change-per-page__select form-control" onChange={(e)=>changePerPage(e.target.value)}>
                <option>5</option>
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>All</option>
            </select>
            <div className='form-change-per-page__text'>entries</div>
        </div>
    );
};


const mapDispatchToProps = {
    changePerPage
}

export default connect(null,mapDispatchToProps)(FormChangePerPage);
