import React from 'react';
import ItemsListDetail from '../items-list-detail';
import './items-list.scss';

const ItemsList = ({ items, changeSort, sort, changeCraftingFormat, craftingFormat }) => {
    const renderItemsList = items.map((item) => (
        <ItemsListDetail item={item} key={item.id} craftingFormat={craftingFormat}/>
    ));

    const offersBuyClassNames =
        'items-list__sort-item ' +
        (sort === 'offersBuy' ? 'items-list__sort-item--active' : '');
    const offersSellClassNames =
        'items-list__sort-item ' +
        (sort === 'offersSell' ? 'items-list__sort-item--active' : '');
    const incomeBuyClassNames =
        'items-list__sort-item ' +
        (sort === 'incomeBuy' ? 'items-list__sort-item--active' : '');
    const incomeSellClassNames =
        'items-list__sort-item ' +
        (sort === 'incomeSell' ? 'items-list__sort-item--active' : '');

    return (
        <div className="items-list">
            <table className="items-list__table table table-responsive-md table-hover">
                <thead className="items-list__thead">
                    <tr>
                        <th className="align-middle text-center">Image</th>
                        <th className="align-middle text-center">Price<br />Buy/Sell</th>
                        <th className="align-middle text-center">
                            Offers<br />
                            <span
                                className={offersBuyClassNames}
                                onClick={() => changeSort('offersBuy')}>
                                Buy
                            </span>/
                            <span
                                className={offersSellClassNames}
                                onClick={() => changeSort('offersSell')}>
                                Sell
                            </span>
                        </th>
                        <th className="align-middle text-center">
                            Crafting<br />
                            <div className="custom-control custom-radio">
                                <input
                                    type="radio"
                                    id="craftingFormat1"
                                    name="craftingFormat"
                                    className="custom-control-input"
                                    value="buySum"
                                    onChange={(e)=>changeCraftingFormat(e.target.value)}
                                    checked={craftingFormat==='buySum'} />
                                <label className="custom-control-label" htmlFor="craftingFormat1">BuySum /</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input
                                    type="radio"
                                    id="craftingFormat2"
                                    name="craftingFormat"
                                    className="custom-control-input"
                                    value="sellSum"
                                    onChange={(e)=>changeCraftingFormat(e.target.value)}
                                    checked={craftingFormat==='sellSum'} />
                                <label className="custom-control-label" htmlFor="craftingFormat2">SellSum</label>
                            </div>
                        </th>
                        <th className="align-middle text-center">
                            Income<br />
                            <span
                                className={incomeBuyClassNames}
                                onClick={() => changeSort('incomeBuy')}>
                                fromBuyPrice
                            </span>/
                            <span
                                className={incomeSellClassNames}
                                onClick={() => changeSort('incomeSell')}>
                                fromSellPrice
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {renderItemsList}
                </tbody>
            </table>
        </div>
    );
};

export default ItemsList;
