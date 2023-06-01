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
import '../css/corousel.css'
import iconimg from '../images/flaticon/svg/005-two.svg'
import PreviousIcon from '../images/previous.png'
import NextIcon from '../images/next.png'
import Dots from '../images/dots.gif'
import { albumData } from "./data";
import Loader from "./Loader";

class Album extends React.Component {

    state = {
        tab: this.props.imageData[0]?.eventId,
        // imageList: [],
        currentImages: [],
        currentImage: '',
        loader: true,
        videoIndex: 0
    }

    componentDidMount() {
        // console.log(this.props.imageData, 'img data')
        // let imageList = this.props.imageData[0]?.imagePath.map(function (val) {
        //     return {
        //         'src': val, 'width': 4,
        //         'height': 3
        //     }
        // })
        // this.setState({ currentImages: imageList })}
        this.closeLoader()
    }
    closeLoader = () => {
        setTimeout(() => {
            this.setState({ loader: false })
        }, 3000);
    }

    handleTabChange = (tab) => {
        this.setState({ loader: true })
        this.setState({ tab: tab }, () => {
            this.closeLoader()
        })
        // this.checkImages()
    }

    handleImagePopup = (imgUrl, index) => {
        // Get the modal
        this.setState({ currentImage: index })
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        var modalImg = document.getElementById("modalImg");
        modalImg.src = imgUrl;
        document.body.style.overflow = 'hidden';
    }

    handleNextImage = () => {
        // Get the modal
        let imageList = this.props.imageData.find((v) => v.eventId === this.state.tab).imagePath
        console.log(imageList.length, this.state.currentImage, 'image List')
        if (this.state.currentImage < imageList.length - 1) {
            var modalImg = document.getElementById("modalImg");
            modalImg.src = imageList[this.state.currentImage + 1];
            if (this.state.currentImage + 1 !== imageList.length) {
                this.setState({ currentImage: this.state.currentImage + 1 })
            }
        }
    }

    handlePreviousImage = () => {
        // Get the modal
        let imageList = this.props.imageData.find((v) => v.eventId === this.state.tab).imagePath
        console.log(imageList.length, this.state.currentImage, 'image List')
        if (this.state.currentImage > 0) {
            var modalImg = document.getElementById("modalImg");
            modalImg.src = imageList[this.state.currentImage - 1];
            if (this.state.currentImage !== 0) {
                this.setState({ currentImage: this.state.currentImage - 1 })
            }
        }
    }

    handleClosePopup = () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        document.body.style.overflow = 'unset';
    }

    handleNextVideo = () => {
        let totalVideo = this.props.videoUrl.length - 1
        if (this.state.videoIndex < totalVideo) {
            this.setState({ videoIndex: this.state.videoIndex + 1 })
        }
    }

    handlePreviousVideo = () => {
        if (this.state.videoIndex > 0) {
            this.setState({ videoIndex: this.state.videoIndex - 1 })
        }
    }

    render() {
        const hinduFont = {
            fontFamily: 'initial'
        }
        const muslimFont = {
            fontFamily: 'Source Sans Pro'
        }
        const view = {
            'display': 'block'
        }
        const hide = {
            'display': 'none'
        }
        const { tab, currentImages, videoIndex } = this.state
        const { album, imageData, caste, videoUrl } = this.props
        return (
            <div className="App">
                <div id="qbootstrap-gallery" data-section="gallery">
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2">
                                <div style={{ marginBottom: '0px', paddingBottom: '0px' }} className="col-md-12 text-center section-heading svg-sm colored">
                                    {/* <img src={iconimg} className="svg" alt="Free HTML5 Bootstrap Template by QBootstrap.com" /> */}
                                    <h2 style={caste === 'hindu' ? hinduFont : caste === 'muslim' ? muslimFont : {}}>Forever Framed:<br />Capturing Love's Journey</h2>
                                    <div className="row">
                                        <div className="col-md-10 col-md-offset-1 subtext">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {videoUrl.length > 0 &&
                        <>
                            <div className="container1" id={videoIndex}>
                                <iframe className="responsive-iframe" src={videoUrl[videoIndex].videoUrl} allow="fullscreen;" />
                            </div>
                            {videoUrl.length > 1 &&
                                <>
                                    <img className="videoPrevious" src={PreviousIcon} onClick={() => this.handlePreviousVideo()} />
                                    <img className="dots" src={Dots} />
                                    <img className="videoNext" src={NextIcon} onClick={() => this.handleNextVideo()} />
                                </>
                            }
                        </>
                    }
                    {/* {albumData.videoLinks?.length > 0 &&
                        <>
                            <div className="container1" id={videoIndex}>
                                <iframe className="responsive-iframe" src={albumData.videoLinks[videoIndex]} allow="fullscreen;" />
                            </div>
                            {albumData.videoLinks?.length > 1 &&
                                <>
                                    <img className="videoPrevious" src={PreviousIcon} onClick={() => this.handlePreviousVideo()} />
                                    <img className="dots" src={Dots} />
                                    <img className="videoNext" src={NextIcon} onClick={() => this.handleNextVideo()} />
                                </>
                            }
                        </>
                    } */}
                    {/* <div className="container1">
                        <iframe className="responsive-iframe" src="https://www.youtube.com/embed/BFuUo7I79X4"  allow="fullscreen;"/>
                    </div> */}


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


                    {this.state.loader &&
                        <div className="img-loader"></div>
                    }
                    <div style={this.state.loader ? hide : view} className="container-fluid">
                        <div id={imageData.find((v) => v.eventId === tab).imagePath.length === 1 ? 'outer-block1' :
                            (imageData.find((v) => v.eventId === tab).imagePath.length !== 1 && imageData.find((v) => v.eventId === tab).imagePath.length <= 5) ? 'outer-block2' :
                                imageData.find((v) => v.eventId === tab).imagePath.length === 6 ? 'outer-block3' : 'outer-block'}>
                            {imageData.find((v) => v.eventId === tab).imagePath.map((val, index) => {
                                return (
                                    <div className="items">
                                        <div className="gallery animate glow animate-box">
                                            <a className="gallery-img image-popup">
                                                <img src={val} id={val} className="img-responsive" alt={'image' + index} onClick={() => this.handleImagePopup(val, index)} />
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

                <div id="myModal" className="modal" >
                    <span className="close" onClick={() => this.handleClosePopup()} >&times;</span>
                    <img className="modal-content" id="modalImg" />
                    {window.innerWidth > 768 ?
                        <>
                            <a className="webPrevious round" onClick={() => this.handlePreviousImage()}>&#8249;</a>
                            <a className="webNext round" onClick={() => this.handleNextImage()}>&#8250;</a>
                        </>
                        :
                        <>
                            <a className="next round" onClick={() => this.handlePreviousImage()}>&#8249;</a>
                            <a className="next round" onClick={() => this.handleNextImage()}>&#8250;</a>
                        </>
                    }
                </div>
            </div >
        )
    }
}
export default Album
