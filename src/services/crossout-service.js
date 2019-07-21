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
        const incomeFromBuyPrice = (item.formatBuyPrice*(0.9)) - item.formatCraftingBuySum;
        const incomeFromSellPrice = (item.formatSellPrice*(0.9)) - item.formatCraftingBuySum;
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
            incomeBuy: +incomeFromBuyPrice.toFixed(2),
            incomeSell: +incomeFromSellPrice.toFixed(2),
            fraction: item.faction,
            rarity: item.rarityName,
        }
    }

    _transformMarketItem = (item) => {
        return {
            id: item[0],
            sellPrice: item[1]/100,
            buyPrice: item[2]/100,
            sellOffers: item[3],
            buyOrders: item[4],
            dateTime: item[5],
            dateTimeUNIX: item[6],
        };
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

    getMarketItem = async (id) => {
        const res = await this.getResourse(`/market-all/${id}`);

        return res.map(this._transformMarketItem);
    }
}
