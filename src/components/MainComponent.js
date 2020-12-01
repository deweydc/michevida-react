import React, { Component } from 'react';
import Inventory from './InventoryComponents';
import Header from './HeaderComponent';
import { CARDS } from '../shared/cards';
import CustomerLove from './CustomerLoveComponent';
import CarouselSlide from './CarouselComponent';
import Parallax from './ParallaxComponent';
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
                <CustomerLove>
                    <CarouselSlide />
                </CustomerLove>
                <Parallax />
                
                <Footer />
            </div>

        );
    }
}

export default Main;