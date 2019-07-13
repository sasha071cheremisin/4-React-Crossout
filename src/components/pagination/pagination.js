import React from 'react';
import './pagination.scss';

const PageItem = ({ number, changePage, currentPage }) => {
    const pageItemClassName = 'page-item ' + (number === currentPage ? 'active' : '');
    return (
        <li className={pageItemClassName}>
            <div onClick={()=>changePage(number)} className="page-link" href="#">{number}</div>
        </li>
    );
};

const Pagination = ({ changePage, countPages, currentPage }) => {
    const items = [];
    for (let number = 1; number <= countPages; number++) {
        items.push(
            <PageItem key={number} number={number} changePage={changePage} currentPage={currentPage}/>
        );
    }

    const pageNextClassName = 'page-item ' + (currentPage === countPages ? 'disabled' : '');
    const pagePrevClassName = 'page-item ' + (currentPage === 1 ? 'disabled' : '');

    return (
        <ul className="pagination">
            <li className={pagePrevClassName}>
                <div
                    onClick={() => changePage(currentPage - 1)}
                    className="page-link" >
                    Prev
                </div>
            </li>
            {items}
            <li className={pageNextClassName}>
                <div
                    onClick={() => changePage(currentPage + 1)}
                    className="page-link" >
                    Next
                </div>
            </li>
        </ul>
    );
};

export default Pagination;
