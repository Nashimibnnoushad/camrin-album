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
        tab: this.props.imageData[0]?.eventId,
    }

    handleTabChange = (tab) => {
        this.setState({ tab: tab })
    }

    render() {
        const { tab } = this.state
        const { album, imageData } = this.props
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
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper1">
                        <div className="tabs_wrap">
                            <ul>
                                {imageData.map((val) => {
                                    return (
                                        <li data-tabs="male" className={tab == val.eventId ? "active" : ''}
                                            onClick={() => this.handleTabChange(val.eventId)}>{val.eventName}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div id="outer-block">

                            {imageData.find((v)=>v.eventId === tab).imagePath.map((val) => {
                                return (
                                    <div className="items">
                                        <div className="gallery animate-box">
                                            <a className="gallery-img image-popup" href={val}><img src={val} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com" /></a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Album
