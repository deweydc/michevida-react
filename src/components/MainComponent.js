import React, { Component } from 'react';
import Header from './HeaderComponent';
import { CARDS } from '../shared/cards';
import Footer from './FooterComponent';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>

        );
    }
}

export default Main;