import React, { Component } from 'react';


export default class Newsletter extends Component {


    render() {

        return (

            <section className="news-letter container-fluid">
                <div className="yellow-bg ">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-8 col-xs-1">
                            <h3>NEWSLETTER</h3>
                            {/* <hr className="news-hr"> */}
                            <p>
                                Sign up to stay in the loop. Receive updates, access to exclusive deals, and more.
                        </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-xl-4">
                            <input type="text" placeholder="email@example.com" className="form-control" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col py-3 text-center">
                            <button className="btn sub-btn">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}