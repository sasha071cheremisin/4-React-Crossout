import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LoadingIndicator from '../../components/loading-indicator';
import ErrorIndicator from '../../components/error-indicator';
import ItemsList from '../../components/items-list/index';
import withCrossoutService from '../../components/hoc';
import {
    fetchItemsList,
    changeSort,
    changeCraftingFormat,
    changeCurrentPage,
    changePerPage,
    fetchMarketItems } from '../../actions';

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

    searchFilter = (item) => {
        const { searchTerm } = this.props;
        const findTerm =
            item.name.toLowerCase()
            .indexOf(searchTerm.toLowerCase()) !== -1 ? true : false;
        return findTerm;
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
        const {
            items,
            loading,
            error,
            changeSort,
            sort,
            changeCraftingFormat,
            craftingFormat,
            paginationItemsList,
            changeCurrentPage,
            fetchMarketItems } = this.props;

        if (loading) {
            return <LoadingIndicator />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return (
            <ItemsList
                items={items.filter(this.filterItemsList).filter(this.searchFilter).sort(this.sortItemsList)}
                changeSort={changeSort}
                sort={sort}
                changeCraftingFormat={changeCraftingFormat}
                craftingFormat={craftingFormat}
                paginationItemsList={paginationItemsList}
                changeCurrentPage={changeCurrentPage}
                fetchMarketItems={fetchMarketItems} />
        );
    }
};

const mapStateToProps = (
    { itemsList: { items, loading, error },
        filter: { fractionFilter, rarityFilter,searchTerm },
        sort,
        craftingFormat,
        paginationItemsList }) => {

    return {
        items,
        loading,
        error,
        fractionFilter,
        rarityFilter,
        sort,
        craftingFormat,
        paginationItemsList,
        searchTerm };
};

const mapDispatchToProps = (dispatch, { crossoutService }) => {
    return {
        fetchItemsList: fetchItemsList(dispatch, crossoutService),
        changeSort: (value) => dispatch(changeSort(value)),
        changeCraftingFormat: (value) => dispatch(changeCraftingFormat(value)),
        changeCurrentPage: (value) => dispatch(changeCurrentPage(value)),
        changePerPage: (value) => dispatch(changePerPage(value)),
        fetchMarketItems: fetchMarketItems(dispatch, crossoutService)
    };
};

export default compose(
    withCrossoutService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ItemsListContainer);
