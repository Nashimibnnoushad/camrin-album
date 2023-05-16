import React from "react"
import { withRouter } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Journey from './Journey'
import Album from './Album'
import Footer from "./Footer";
import Loader from "./Loader";
import '../App.css';
import '../css/animate.css'
import '../css/bootstrap.css'
import '../css/bootstrap.css.map'
import '../css/flexslider.css'
import '../css/icomoon.css'
import '../css/magnific-popup.css'
// import '../css/owl.carousel.min.css'
import '../css/owl.theme.default.min.css'
import '../css/simple-line-icons.css'
import '../css/style.css'
import '../css/style.css.map'
import nature from '../images/flaticon/svg/004-nature.svg'
import bg from '../images/cover_bg_3.jpg'
import married from '../images/flaticon/svg/005-two.svg'
import luxury from '../images/flaticon/svg/003-luxury.svg'
import bride from '../images/bride.jpg'
import groom from '../images/groom.jpg'
import { albumData } from "./data";
import axios from 'axios'


class Home extends React.Component {

    state = {
        loading: true,
        tab: 2,
        albumData: [],
    }

    componentDidMount() {
        this.getClientData()
    }


    formatDate(date) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December']
        var d = new Date(date),
            month = months[d.getMonth()],
            day = '' + (d.getDate()),
            year = d.getFullYear();
        if (day.length < 2) day = '0' + day;
        var date = [day, month, year].join('.');
        return date
    }

    getClientData = async () => {
        const id = window.location.href.split('/')[4]
        const res = await axios.get(`https://camrin.in:5000/image/getimages?workid=${id}`, {
            headers: {
                "Authorization": `Staff d5c3fd21734fd37a88ce26acc0fb091daafd5bd0a331f7980420ec8e5a838043adc055efca527749d2a014b820f59f6dfefa4202ca028c1cd5c65ff5df929b2d67e3133075cfde166ad3a06d7cc36a1499d1de109eafc7a74d0a240f77504328`
            },
        });

        if (res.status === 200) {
            this.setState({ albumData: res.data, loading: false })
        }
        else {
            window.location.replace('https://camrinfilms.com/');
            this.setState({ loading: false })
        }

        console.log(res);
    }

    handleTabChange = (tab) => {
        this.setState({ tab: tab })
    }

    render() {
        const { tab } = this.state
        const hinduFont = {
            fontFamily: 'initial'
        }
        const muslimFont = {
            fontFamily: 'Source Sans Pro'
        }
        return (
            <>
                {this.state.loading ?
                    <Loader />
                    :
                    <div className="App">
                        <header role="banner" id="qbootstrap-header">
                            <div className="container">
                                <nav className="navbar navbar-default">
                                    <div style={{ display: 'grid' }}>
                                        {/* <a href="#" className="js-qbootstrap-nav-toggle qbootstrap-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a> */}
                                        <a className="navbar-brand" style={{ fontFamily: 'emoji', fontSize: 'larger' }}>Camrin Films Presents</a>
                                    </div>
                                </nav>
                            </div>
                        </header>
                        <div className="qbootstrap-hero" data-section="home">
                            <div className="qbootstrap-overlay"></div>
                            <div className="qbootstrap-cover text-center" data-stellar-background-ratio="0.5" style={{ backgroundImage: `url(${this.state.albumData.client.coverPic ? this.state.albumData.client.coverPic : albumData.coverDetails.coverPic})` }}>
                                <div className="display-t">
                                    <div className="display-tc">
                                        <div className="container">
                                            <div className="col-md-10 col-md-offset-1">
                                                <div className="animate-box svg-sm colored">
                                                    <img src={nature} className="svg" alt="Free HTML5 Bootstrap Template by QBootstrap.com" />
                                                    <h1 className="holder"><span>The {this.state.albumData.client.event ? this.state.albumData.client.event : albumData.coverDetails.event} of</span></h1>
                                                    <h2 style={this.state.albumData.client.caste === 'hindu' ? hinduFont : this.state.albumData.client.caste === 'muslim' ? muslimFont : {}}>{this.state.albumData.client.groomName ? this.state.albumData.client.groomName : albumData.coverDetails.groom} &amp;
                                                        {this.state.albumData.client.brideName ? this.state.albumData.client.brideName : albumData.coverDetails.bride}</h2>
                                                    <p>{this.state.albumData.client.weddingDate ? this.formatDate(this.state.albumData.client.weddingDate) : albumData.coverDetails.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="qbootstrap-couple" className="qbootstrap-section-gray">
                            <div className="container">
                                <div className="row animate-box">
                                    <div className="col-md-8 col-md-offset-2 animate-box">
                                        <div className="col-md-12 text-center section-heading svg-sm colored">
                                            <img src={married} className="svg" alt="Free HTML5 Bootstrap Template by QBootstrap.com" />
                                            <h2 style={this.state.albumData.client.caste === 'hindu' ? hinduFont : this.state.albumData.client.caste === 'muslim' ? muslimFont : {}}>{this.state.albumData.client.titleMessage ? this.state.albumData.client.titleMessage : 'Are Getting Married'}</h2>
                                            <p>{this.state.albumData.client.description ? this.state.albumData.client.description : albumData.coverDetails.message}</p>
                                            {/* <p><strong>on Dec 28, 2017 &mdash; Boracay, Philippines</strong></p> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row animate-box">
                                    <div className="col-md-8 col-md-offset-2 text-center">
                                        <div className="col-md-5 col-sm-5 col-xs-5 nopadding">
                                            <img id="groomBridePic" src={this.state.albumData.client.groomPic ? this.state.albumData.client.groomPic : albumData.coverDetails.groomImage} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com" />
                                            <h3 style={this.state.albumData.client.caste === 'hindu' ? hinduFont : this.state.albumData.client.caste === 'muslim' ? muslimFont : {}}>{this.state.albumData.client.groomName ? this.state.albumData.client.groomName : albumData.coverDetails.groom}</h3>
                                            <span>Groom</span>
                                        </div>
                                        <div className="col-md-2 col-sm-2 col-xs-2 nopadding"><h2 className="amp-center"><img src={luxury} className="svg img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com" /></h2></div>
                                        <div className="col-md-5 col-sm-5 col-xs-5 nopadding">
                                            <img id="groomBridePic" src={this.state.albumData.client.bridePic ? this.state.albumData.client.bridePic : albumData.coverDetails.brideImage} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com" />
                                            <h3 style={this.state.albumData.client.caste === 'hindu' ? hinduFont : this.state.albumData.client.caste === 'muslim' ? muslimFont : {}}>{this.state.albumData.client.brideName ? this.state.albumData.client.brideName : albumData.coverDetails.bride}</h3>
                                            <span>Bride</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wrapper">
                            <div className="tabs_wrap">
                                <ul>
                                    {/* <li data-tabs="male" className={tab == 1 ? "active" : ''}
                                onClick={() => this.handleTabChange(1)}>Journey</li> */}
                                    <li data-tabs="female" className={tab == 2 ? "active" : ''}
                                        onClick={() => this.handleTabChange(2)}>Albums</li>
                                </ul>
                            </div>
                        </div>
                        {tab == 1 ?
                            <Journey />
                            :
                            <Album album={albumData.album} caste={this.state.albumData.client.caste} imageData={this.state.albumData.imageData ? this.state.albumData.imageData : []} />
                        }
                        <Footer />
                    </div>
                }
            </>
        )
    }
}
export default Home
