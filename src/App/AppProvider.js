import React from 'react';
import _ from 'lodash';

const cc = require('cryptocompare');
// cc.setApiKey('');

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
            confirmFavorites: this.confirmFavorites
        }
    }

    componentDidMount = () => {
        this.fetchCoins();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({ coinList });
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

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            setPage: 'dashboard'
        });

        localStorage.setItem('reacrCrypto', JSON.stringify({
            test: 'hello'
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

        let {favorites} = reactCryptoData;
        return {favorites};
    }

    setPage = page => this.setState({page});

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>    
        )
    }
}