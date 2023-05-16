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
import { albumData } from "./data";

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
        document.body.style.overflow = 'hidden';
    }

    handleClosePopup = () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        document.body.style.overflow = 'unset';
    }

    render() {
        const hinduFont = {
            fontFamily: 'initial'
        }
        const muslimFont = {
            fontFamily: 'Source Sans Pro'
        }
        const { tab, currentImages } = this.state
        const { album, imageData, caste } = this.props
        return (
            <div className="App">
                <div id="qbootstrap-gallery" data-section="gallery">
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2">
                                <div style={{ marginBottom: '0px', paddingBottom: '0px' }} className="col-md-12 text-center section-heading svg-sm colored">
                                    <img src={iconimg} className="svg" alt="Free HTML5 Bootstrap Template by QBootstrap.com" />
                                    <h2 style={caste === 'hindu' ? hinduFont : caste === 'muslim' ? muslimFont : {}}>Our Gallery</h2>
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
                        <div id={imageData.find((v) => v.eventId === tab).imagePath.length  === 1 ? 'outer-block1' :
                        (imageData.find((v) => v.eventId === tab).imagePath.length  !== 1 && imageData.find((v) => v.eventId === tab).imagePath.length <= 5) ? 'outer-block2' : 
                        imageData.find((v) => v.eventId === tab).imagePath.length  === 6 ? 'outer-block3' : 'outer-block'}>
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
                        </div>
                    </div>
                    {/* <div className="container-fluid">
                        <div id={albumData.album.find((v) => v.id === tab).images.length  === 1 ? 'outer-block1' :
                        (albumData.album.find((v) => v.id === tab).images.length  !== 1 && albumData.album.find((v) => v.id === tab).images.length <= 5) ? 'outer-block2' : 
                        albumData.album.find((v) => v.id === tab).images.length  === 6 ? 'outer-block3' : 'outer-block'}>
                            {albumData.album.find((v) => v.id === tab).images.map((val, index) => {
                                return (
                                    <div className="items">
                                        <div className="gallery animate glow animate-box">
                                            <a className="gallery-img image-popup">
                                                <img src={val.imgUrl} id={index} className="img-responsive" alt={'image' + index} onClick={() => this.handleImagePopup(val.imgUrl)} />
                                            </a>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div> */}
                </div>

                <div id="myModal" className="modal" onClick={() => this.handleClosePopup()}>
                    <span className="close" onClick={() => this.handleClosePopup()} >&times;</span>
                    <img className="modal-content" id="modalImg" />
                </div>
            </div >
        )
    }
}
export default Album
