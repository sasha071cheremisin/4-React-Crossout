import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchItemsList, changeSort } from '../../actions';
import withCrossoutService from '../hoc';
import LoadingIndicator from '../loading-indicator';
import ErrorIndicator from '../error-indicator';
import './items-list.scss';
import coinImage from '../../image/coin.png';

const ItemsList = ({ items, changeSort, sort }) => {
    const renderItemsList = items.map((item) => (
        <tr key={item.id}>
            <td>
                <img
                    className="items-list__image"
                    src={item.image}
                    alt={item.name}
                    title={item.name} />
            </td>
            <td>
                <div className="items-list__price-cell">
                    <div className="items-list__price-cell-count">{item.priceBuy}</div>
                    <div className="items-list__price-cell-image"><img height="14" src={coinImage} alt="coin" /></div>
                </div>
                <div className="items-list__price-cell">
                    <div className="items-list__price-cell-count">{item.priceSell}</div>
                    <div className="items-list__price-cell-image"><img height="14" src={coinImage} alt="coin" /></div>
                </div>
            </td>
            <td>
                <div>{item.offersBuy}</div>
                <div>{item.offersSell}</div>
            </td>
            <td>
                <div className="items-list__price-cell">
                    <div className="items-list__price-cell-count">{item.craftingBuy}</div>
                    <div className="items-list__price-cell-image"><img height="14" src={coinImage} alt="coin" /></div>
                </div>
                <div className="items-list__price-cell">
                    <div className="items-list__price-cell-count">{item.craftingSell}</div>
                    <div className="items-list__price-cell-image"><img height="14" src={coinImage} alt="coin" /></div>
                </div>
            </td>
            <td>
                <div className="items-list__price-cell">
                    <div className="items-list__price-cell-count">{item.incomeBuy}</div>
                    <div className="items-list__price-cell-image"><img height="14" src={coinImage} alt="coin" /></div>
                </div>
                <div className="items-list__price-cell">
                    <div className="items-list__price-cell-count">{item.incomeSell}</div>
                    <div className="items-list__price-cell-image"><img height="14" src={coinImage} alt="coin" /></div>
                </div>
            </td>
        </tr>
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
                        <th className="align-middle text-center">Crafting<br />BuySum/SellSum</th>
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

class ItemsListContainer extends Component {
    componentDidMount() {
        this.props.fetchItemsList();
    }

    inFilter = (item, arrayTerms, term) => {
        if (arrayTerms[0] === 'All') return true;

        return arrayTerms.indexOf(item[term]) !== -1 ? true : false;
    }

    filterItemsList = (item) => {
        const { fractionFilter, rarityFilter } = this.props;
        const inFractionFilter = this.inFilter(item, fractionFilter, 'fraction');
        const inRarityFilter = this.inFilter(item, rarityFilter, 'rarity');

        return inFractionFilter && inRarityFilter;
    }

    sortItemsList = (prev, next) => {
        const { sort } = this.props;

        switch (sort) {
            case 'offersBuy':
                return next.offersBuy - prev.offersBuy;
            case 'offersSell':
                return next.offersSell - prev.offersSell;
            case 'incomeBuy':
                return next.incomeBuy - prev.incomeBuy;
            case 'incomeSell':
                return next.incomeSell - prev.incomeSell;
            default:
                return;
        }
    }

    render() {
        const { items, loading, error, changeSort, sort } = this.props;

        if (loading) {
            return <LoadingIndicator />
        }

        if (error) {
            return <ErrorIndicator />
        }
        return (
            <ItemsList
                items={items.filter(this.filterItemsList).sort(this.sortItemsList)}
                changeSort={changeSort}
                sort={sort} />
        );
    }
};

const mapStateToProps = (
    { itemsList: { items, loading, error },
        filter: { fractionFilter, rarityFilter },
        sort }) => {

    return { items, loading, error, fractionFilter, rarityFilter, sort };
};

const mapDispatchToProps = (dispatch, { crossoutService }) => {
    return {
        fetchItemsList: fetchItemsList(dispatch, crossoutService),
        changeSort: (value) => dispatch(changeSort(value)),
    };
};

export default compose(
    withCrossoutService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ItemsListContainer);
