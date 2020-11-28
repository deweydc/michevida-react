import React, { Component } from 'react';
import Inventory from './InventoryComponents';
import Header from './HeaderComponent';
import { CARDS } from '../shared/cards';
import Footer from './FooterComponent';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: CARDS
        };
    }


    render() {
        return (
            <div>
                <Header />
                <Inventory cards={this.state.cards} />
                <Footer />
            </div>

        );
    }
}

export default Main;