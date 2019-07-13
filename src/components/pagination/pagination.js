import React from 'react';
import './pagination.scss';

const PageItem = ({ number, changePage, currentPage }) => {
    const pageItemClassName =
        'page-item ' +
        (number === currentPage ? 'active ' : '') +
        (number === '...' ? 'disabled' : '');
    return (
        <li className={pageItemClassName}>
            <div onClick={() => changePage(number)} className="page-link" href="#">{number}</div>
        </li>
    );
};

const Pagination = ({ changePage, countPages, currentPage }) => {
    const items = [];
    const countShowItems = 8;
    let firstEllipse,lastEllipse = false;
    for (let number = 1; number <= countPages; number++) {
        if (number === 1 ||
            number === countPages ||
            (number <= countShowItems && currentPage <= countShowItems/2) ||
            (number > countPages - countShowItems && currentPage >= countPages - countShowItems/2) ) {
            items.push(
                <PageItem key={number} number={number} changePage={changePage} currentPage={currentPage} />
            );
        }else if ((number > currentPage - countShowItems/2 && number < currentPage + countShowItems/2)) {
            items.push(
                <PageItem key={number} number={number} changePage={changePage} currentPage={currentPage} />
            );
        } else {
            if(!firstEllipse && number < currentPage + countShowItems/2) {
                firstEllipse = true;
                items.push(
                    <PageItem key={number} number={'...'} changePage={()=>{}} currentPage={currentPage} />
                );
            } else if(!lastEllipse && number > currentPage - countShowItems/2) {
                lastEllipse = true;
                items.push(
                    <PageItem key={number} number={'...'} changePage={()=>{}} currentPage={currentPage} />
                );
            }
        }
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
