import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchItemsList } from '../../actions';
import withCrossoutService from '../hoc';
import LoadingIndicator from '../loading-indicator';
import ErrorIndicator from '../error-indicator';
import './items-list.scss';

const ItemsList = ({ items }) => {
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
                <div>{item.priceBuy}</div>
                <div>{item.priceSell}</div>
            </td>
            <td>
                <div>{item.offersBuy}</div>
                <div>{item.offersSell}</div>
            </td>
            <td>
                <div>{item.craftingBuy}</div>
                <div>{item.craftingSell}</div>
            </td>
            <td>
                <div>{item.incomeBuy}</div>
                <div>{item.incomeSell}</div>
            </td>
        </tr>
    ));
    return (
        <div className="items-list">
            <table className="items-list__table table table-responsive-md table-hover">
                <thead className="items-list__thead">
                    <tr>
                        <th className="align-middle text-center">Image</th>
                        <th className="align-middle text-center">Price<br />Buy/Sell</th>
                        <th className="align-middle text-center">Offers<br />Buy/Sell</th>
                        <th className="align-middle text-center">Crafting<br />BuySum/SellSum</th>
                        <th className="align-middle text-center">Income<br />CraftingBuy/CraftingSell</th>
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

    inFilter = (item,arrayTerms,term) => {
        if (arrayTerms[0] === 'All') return true;

        return arrayTerms.indexOf(item[term]) !== -1 ? true : false;
    }

    filterItemsList = (item) => {
        const { fractionFilter, rarityFilter } = this.props;
        const inFractionFilter = this.inFilter(item,fractionFilter,'fraction');
        const inRarityFilter = this.inFilter(item,rarityFilter,'rarity');

        return inFractionFilter && inRarityFilter;
    }

    render() {
        const { items, loading, error } = this.props;

        if (loading) {
            return <LoadingIndicator />
        }

        if (error) {
            return <ErrorIndicator />
        }
        return (
            <ItemsList items={items.filter(this.filterItemsList)} />
        );
    }
};

const mapStateToProps = ({ itemsList: { items, loading, error }, filter: { fractionFilter, rarityFilter } }) => {
    return { items, loading, error, fractionFilter, rarityFilter };
};

const mapDispatchToProps = (dispatch, { crossoutService }) => {
    return {
        fetchItemsList: fetchItemsList(dispatch, crossoutService)
    };
};

export default compose(
    withCrossoutService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ItemsListContainer);
