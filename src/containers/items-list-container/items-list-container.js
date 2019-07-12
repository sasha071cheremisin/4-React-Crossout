import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LoadingIndicator from '../../components/loading-indicator';
import ErrorIndicator from '../../components/error-indicator';
import ItemsList from '../../components/items-list/index';
import { fetchItemsList, changeSort, changeCraftingFormat } from '../../actions';
import withCrossoutService from '../../components/hoc';

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
        const { items, loading, error, changeSort, sort, changeCraftingFormat, craftingFormat } = this.props;

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
                sort={sort}
                changeCraftingFormat={changeCraftingFormat}
                craftingFormat={craftingFormat} />
        );
    }
};

const mapStateToProps = (
    { itemsList: { items, loading, error },
        filter: { fractionFilter, rarityFilter },
        sort,
        craftingFormat }) => {

    return { items, loading, error, fractionFilter, rarityFilter, sort, craftingFormat };
};

const mapDispatchToProps = (dispatch, { crossoutService }) => {
    return {
        fetchItemsList: fetchItemsList(dispatch, crossoutService),
        changeSort: (value) => dispatch(changeSort(value)),
        changeCraftingFormat: (value) => dispatch(changeCraftingFormat(value)),
    };
};

export default compose(
    withCrossoutService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ItemsListContainer);
