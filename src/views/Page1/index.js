import React, { Component } from 'react'

import Navbar from '../../components/Navbar';

export default class index extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <section className="header-img">
                    <h1 className="display-1 landing-title">Title</h1>
                    <h3 className="landing-subtitle ">content content content content</h3>
                </section>
                <section className="sec-2">
                    <p className="h1 sec-2__title">Title</p>
                    <div className="container" style={{ marginTop: '40px'}}>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 sec-2__item">
                                test
                            </div>
                            <div className="col-md-4 col-sm-12 sec-2__item">
                                test
                            </div>
                            <div className="col-md-4 col-sm-12 sec-2__item">
                                test
                            </div>
                            <div className="col-md-4 col-sm-12 sec-2__item">
                                test
                            </div>
                            <div className="col-md-4 col-sm-12 sec-2__item">
                                test
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sec-3">
                    <p className="h1 sec-2__title">Title</p>
                </section>
            </div>
        )
    }
}
