import React from "react"
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


class Footer extends React.Component {

    state = {
    }
    render() {
        return (
            <div className="App">
                <footer id="footer" role="contentinfo">
                    <div className="container">
                        <div className="row row-bottom-padded-sm">
                            <div className="col-md-12">
                                <p className="copyright text-center">&copy; 2023 <a href="index.html">Wedding</a>. All Rights Reserved. Images by <a href="#" target="_blank">Camrin Photography</a></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <ul className="social social-circle">
                                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                                    <li><a href="#"><i className="icon-youtube"></i></a></li>
                                    <li><a href="#"><i className="icon-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div >
        )
    }
}
export default Footer
