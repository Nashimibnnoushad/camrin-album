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
import '../css/popup.css'
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
import { Gallery } from "react-grid-gallery";

const images = [
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        width: '100%',
        height: '100%',
        // isSelected: true,
        // caption: "After Rain (Jeshu John - designerspics.com)",
    },

];

class Album extends React.Component {

    state = {
        tab: this.props.imageData[0]?.eventId,
        // imageList: [],
        currentImages: []
    }

    componentDidMount(){
        console.log(this.props.imageData,'img data')
        let imageList = this.props.imageData[0]?.imagePath.map(function(val){return {'src': val, 'width': 4,
        'height': 3}})
        this.setState({currentImages: imageList})
    }
    handleTabChange = (tab) => {
        this.setState({ tab: tab })
    }

    handleImagePopup = (imgUrl) => {
        // Get the modal
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        var modalImg = document.getElementById("modalImg");
        modalImg.src = imgUrl;
    }

    handleClosePopup = () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    render() {
        const { tab, currentImages } = this.state
        const { album, imageData } = this.props
        return (
            <div className="App">
                <div id="qbootstrap-gallery" data-section="gallery">
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2">
                                <div style={{ marginBottom: '0px', paddingBottom: '0px' }} className="col-md-12 text-center section-heading svg-sm colored">
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

                    {/* <Gallery images={currentImages} /> */}

                    <div className="container-fluid">
                        <div id="outer-block">
                            {imageData.find((v) => v.eventId === tab).imagePath.map((val, index) => {
                                return (
                                    <div className="items">
                                        <div className="gallery animate glow animate-box">
                                            <a className="gallery-img image-popup">
                                                <img src={val} id={val} className="img-responsive" alt={'image' + index} onClick={() => this.handleImagePopup(val)} />
                                            </a>
                                        </div>
                                    </div>

                                )
                            })}
                            {/* {currentImages && 
                            <Gallery images={currentImages} direction={"column"}/>
                            } */}
                        </div>
                    </div>
                </div>

                <div id="myModal" className="modal">
                    <span className="close" onClick={() => this.handleClosePopup()} >&times;</span>
                    <img className="modal-content" id="modalImg" />
                </div>
            </div >
        )
    }
}
export default Album
