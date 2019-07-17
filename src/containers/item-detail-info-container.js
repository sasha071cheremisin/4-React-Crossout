import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withCrossoutService from '../components/hoc';
import { fetchMarketItems } from '../actions'
import ItemDetailInfo from '../components/item-detail-info'
import LoadingIndicator from '../components/loading-indicator';
import ErrorIndicator from '../components/error-indicator';

class ItemDetailInfoContainer extends Component {
    componentDidMount() {
        const { fetchMarketItems, marketItems: {items,currentItem} } = this.props;
        if (!items.find((item) => item.itemId === currentItem)) {
            fetchMarketItems(currentItem);
        }
    }

    returnMarketItem = (array,itemId) => {
        const marketItem = array.find((item)=>item.itemId === itemId);
        return marketItem.data;
    }

    render() {
        const { marketItems } = this.props;

        if (!marketItems.currentItem) {
            return null;
        }
        if (marketItems.loading) {
            return <LoadingIndicator />
        }
        if (marketItems.error) {
            return <ErrorIndicator />
        }

        return <ItemDetailInfo data={this.returnMarketItem(marketItems.items,marketItems.currentItem)}/>
    }
};

const mapStateToProps = ({
    marketItems }) => {
    return { marketItems };
};

const mapDispatchToProps = (dispatch, { crossoutService }) => {
    return {
        fetchMarketItems: fetchMarketItems(dispatch, crossoutService),
    };
};

export default compose(
    withCrossoutService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ItemDetailInfoContainer);
