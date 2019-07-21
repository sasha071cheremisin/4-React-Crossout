import React from 'react';
import Graph from '../graph';
import './item-detail-info.scss';

const ItemDetailInfo = ({data}) => {
    return (
        <div className="item-detail-info">
            <div className="item-detail-info__content container">
                <Graph data={data}/>
            </div>
        </div>
    );
};

export default ItemDetailInfo;
