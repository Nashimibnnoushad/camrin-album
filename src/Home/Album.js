import React from "react"
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
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
import '../css/dropdown.css'
import iconimg from '../images/flaticon/svg/005-two.svg'
import image1 from '../images/gallery-1.jpg'
import image2 from '../images/gallery-2.jpg'
import image3 from '../images/gallery-3.jpg'
import image4 from '../images/gallery-4.jpg'
import image5 from '../images/gallery-5.jpg'
import image6 from '../images/gallery-6.jpg'
import image7 from '../images/gallery-7.jpg'
import image8 from '../images/gallery-8.jpg'
import image9 from '../images/gallery-9.jpg'
import image10 from '../images/gallery-10.jpg'

class Album extends React.Component {

    state = {
        tab: this.props.album[0]?.id,
    }

    handleTabChange = (tab) => {
        this.setState({ tab: tab })
    }

    render() {
        const { tab } = this.state
        const { album } = this.props
        return (
            <div className="App">
                <div id="qbootstrap-gallery" data-section="gallery">
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2">
                                <div style={{marginBottom:'0px',paddingBottom:'0px'}} className="col-md-12 text-center section-heading svg-sm colored">
                                    <img src={iconimg} className="svg" alt="Free HTML5 Bootstrap Template by QBootstrap.com" />
                                    <h2>Our Gallery</h2>
                                    <div className="row">
                                        <div className="col-md-10 col-md-offset-1 subtext">
                                            <h3>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper1">
                        <div className="tabs_wrap">
                            <ul>
                                {album.map((val) => {
                                    return (
                                        <li data-tabs="male" className={tab == val.id ? "active" : ''}
                                            onClick={() => this.handleTabChange(val.id)}>{val.categoryName}</li>
                                    )
                                })}
                                {/* <li data-tabs="male" className={tab == 1 ? "active" : ''}
                                    onClick={() => this.handleTabChange(1)}>Wedding</li>
                                 <li data-tabs="female" className={tab == 2 ? "active" : ''}
                                    onClick={() => this.handleTabChange(2)}>Reception</li>
                                <li data-tabs="male" className={tab == 3 ? "active" : ''}
                                    onClick={() => this.handleTabChange(3)}>Haldi</li>
                                <li data-tabs="female" className={tab == 4 ? "active" : ''}
                                    onClick={() => this.handleTabChange(4)}>Mylanchi</li>
                                <li data-tabs="male" className={tab == 5 ? "active" : ''}
                                    onClick={() => this.handleTabChange(5)}>Category 5</li>
                                <li data-tabs="female" className={tab == 6 ? "active" : ''}
                                    onClick={() => this.handleTabChange(6)}>Category 6</li>
                                <li data-tabs="male" className={tab == 7 ? "active" : ''}
                                    onClick={() => this.handleTabChange(7)}>Category 7</li>
                                <li data-tabs="female" className={tab == 8 ? "active" : ''}
                                    onClick={() => this.handleTabChange(8)}>Category 8</li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div id="outer-block">

                            {album.find((v)=>v.id === tab).images.map((val) => {
                                return (
                                    <div className="items">
                                        <div className="gallery animate-box">
                                            <a className="gallery-img image-popup" href={val.imgUrl}><img src={val.imgUrl} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com" /></a>
                                        </div>
                                    </div>
                                )
                            })}
                            {/* <div className="items">
                                <div className="gallery animate-box">
                                    <a className="gallery-img image-popup" href={image1}><img src={image1} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com" /></a>
                                </div>
                            </div>
                            <div className="items">
                                <div className="gallery animate-box">
                                    <a className="gallery-img image-popup" href={image2}><img src={image2} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com" /></a>
                                </div>
                            </div>
                            <div className="items">
                                <div className="gallery animate-box">
                                    <a className="gallery-img image-popup" href={image3}><img src={image3} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com" /></a>
                                </div>
                            </div>
                            <div className="items">
                                <div className="gallery animate-box">
                                    <a className="gallery-img image-popup" href={image4}><img src={image4} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com" /></a>
                                </div>
                            </div>
                            <div className="items">
                                <div className="gallery animate-box">
                                    <a className="gallery-img image-popup" href={image5}><img src={image5} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com" /></a>
                                </div>
                            </div>
                            <div className="items">
                                <div className="gallery animate-box">
                                    <a className="gallery-img image-popup" href={image6}><img src={image6} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com" /></a>
                                </div>
                            </div>
                            <div className="items">
                                <div className="gallery animate-box">
                                    <a className="gallery-img image-popup" href={image7}><img src={image7} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com" /></a>
                                </div>
                            </div>
                            <div className="items">
                                <div className="gallery animate-box">
                                    <a className="gallery-img image-popup" href={image8}><img src={image8} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com" /></a>
                                </div>
                            </div>
                            <div className="items">
                                <div className="gallery animate-box">
                                    <a className="gallery-img image-popup" href={image9}><img src={image9} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com" /></a>
                                </div>
                            </div>
                            <div className="items">
                                <div className="gallery animate-box">
                                    <a className="gallery-img image-popup" href={image10}><img src={image10} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com" /></a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Album
