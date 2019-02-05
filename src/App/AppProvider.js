import React from 'react';
import _ from 'lodash';

const cc = require('cryptocompare');

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
            confirmFavorites: this.confirmFavorites,
            setCurrentFavorite: this.setCurrentFavorite,
            setFilteredCoins: this.setFilteredCoins
        };
    }

    componentDidMount = () => {
        this.fetchCoins();
        this.fetchPrices();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({ coinList });
    }

    fetchPrices = async () => {
        if(this.state.firstVisit) return;
        let prices = await this.prices();
        this.setState({prices});
    }

    prices = async () => {
        let returnData = [];
        for(let i = 0; i < this.state.favorites.length; i++) {
            try {
                let priceData = await cc.priceFull(this.state.favorites[i], 'EUR');
                returnData.push(priceData);
            } catch(e) {
                console.warn('Fetch price error: ', e);
            }
        }

        return returnData;
    }

    addCoin = key => {
        let favorites = [...this.state.favorites];
        if(favorites.length < MAX_FAVORITES) {
            favorites.push(key);
            this.setState({favorites});
        }
    }

    removeCoin = key => {
        let favorites = [...this.state.favorites];
        this.setState({
            favorites: _.pull(favorites, key)
        });
    }

    isInFavorites = key => _.includes(this.state.favorites, key);

    confirmFavorites = () => {
        let currentFavorite = this.state.favorites[0];

        this.setState({
            firstVisit: false,
            setPage: 'dashboard',
            currentFavorite
        }, () => {
            this.fetchPrices();
        });

        localStorage.setItem('reactCrypto', JSON.stringify({
            favorites: this.state.favorites,
            currentFavorite
        }));
    }

    setCurrentFavorite = (sym) => {
        this.setState({
            currentFavorite: sym
        });

        localStorage.setItem('reactCrypto', JSON.stringify({
            ...JSON.parse(localStorage.getItem('reactCrypto')),
            currentFavorite: sym
        }));
    }

    savedSettings() {
        let reactCryptoData = JSON.parse(localStorage.getItem('reactCrypto'));
        if(!reactCryptoData) {
            return {
                page: 'settings',
                firstVisit: true
            }
        }

        let {favorites, currentFavorite} = reactCryptoData;
        return {favorites, currentFavorite};
    }

    setPage = page => this.setState({page});

    setFilteredCoins = (filteredCoins) => this.setState({filteredCoins});

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>    
        )
    }
}