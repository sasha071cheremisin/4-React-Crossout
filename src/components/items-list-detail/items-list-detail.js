import React from 'react';
import coinImage from '../../image/coin.png';
import './items-list-detail.scss';

const ItemsListDetail = ({ item, craftingFormat, fetchMarketItems }) => {
    const defaultClassNames = 'items-list-detail__price-cell-count';
    const craftingBuyClassNames =
        defaultClassNames + ' ' +
        (craftingFormat === 'buySum' ? '' : defaultClassNames + '--not-active');
    const craftingSellClassNames =
        defaultClassNames + ' ' +
        (craftingFormat === 'sellSum' ? '' : defaultClassNames + '--not-active');

    return (
        <tr key={item.id} className="items-list-detail">
            <td>
                <img
                    className="items-list-detail__image"
                    src={item.image}
                    alt={item.name}
                    title={item.name}
                    onClick={()=>fetchMarketItems(item.id)} />
            </td>
            <td>
                <div className="items-list-detail__price-cell">
                    <div className="items-list-detail__price-cell-count">{item.priceBuy}</div>
                    <div className="items-list-detail__price-cell-image"><img height="14" src={coinImage} alt="coin" /></div>
                </div>
                <div className="items-list-detail__price-cell">
                    <div className="items-list-detail__price-cell-count">{item.priceSell}</div>
                    <div className="items-list-detail__price-cell-image"><img height="14" src={coinImage} alt="coin" /></div>
                </div>
            </td>
            <td>
                <div>{item.offersBuy}</div>
                <div>{item.offersSell}</div>
            </td>
            <td>
                <div className="items-list-detail__price-cell">
                    <div className={craftingBuyClassNames}>{item.craftingBuy}</div>
                    <div className="items-list-detail__price-cell-image"><img height="14" src={coinImage} alt="coin" /></div>
                </div>
                <div className="items-list-detail__price-cell">
                    <div className={craftingSellClassNames}>{item.craftingSell}</div>
                    <div className="items-list-detail__price-cell-image"><img height="14" src={coinImage} alt="coin" /></div>
                </div>
            </td>
            <td>
                <div className="items-list-detail__price-cell">
                    <div className="items-list-detail__price-cell-count">{item.incomeBuy}</div>
                    <div className="items-list-detail__price-cell-image"><img height="14" src={coinImage} alt="coin" /></div>
                </div>
                <div className="items-list-detail__price-cell">
                    <div className="items-list-detail__price-cell-count">{item.incomeSell}</div>
                    <div className="items-list-detail__price-cell-image"><img height="14" src={coinImage} alt="coin" /></div>
                </div>
            </td>
        </tr>
    );
};

export default ItemsListDetail;
