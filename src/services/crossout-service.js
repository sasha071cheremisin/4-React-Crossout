export default class CrossoutService {

    _baseUrl = 'https://crossoutdb.com/api/v1';
    _baseImage = 'https://crossoutdb.com/img/items/';
    _factionNames = [
        "Lunatics",
        "Nomads",
        "Scavanger",
        "Steppenwolfs",
        "Dawn's Children",
        "Firestarters",
    ];

    _transformItem = (item) => {
        const incomeBuy = (item.formatSellPrice*(0.9)) - item.formatCraftingBuySum;
        const incomeSell = (item.formatSellPrice*(0.9)) - item.formatCraftingSellSum;
        return {
            id: item.id,
            name: item.name,
            image: this._baseImage + item.image,
            priceBuy: +item.formatBuyPrice,
            priceSell: +item.formatSellPrice,
            offersBuy: item.buyOrders,
            offersSell: item.sellOffers,
            craftingBuy: +item.formatCraftingBuySum,
            craftingSell: +item.formatCraftingSellSum,
            incomeBuy: +incomeBuy.toFixed(2),
            incomeSell: +incomeSell.toFixed(2),
            fraction: item.faction,
            rarity: item.rarityName,
        }
    }

    _filterGetResourse = ({faction}) => {
        return this._factionNames.includes(faction);
    }

    getResourse = async (url) => {
        const res = await fetch(`${this._baseUrl}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._baseUrl}${url}, received ${res.status}`);
        }

        return await res.json();
    }

    getAllItems = async () => {
        const res = await this.getResourse(`/items/`);
        console.log('res -',res);
        return res.filter(this._filterGetResourse).map(this._transformItem);
    }
}
