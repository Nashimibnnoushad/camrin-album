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
import couple from '../images/flaticon/svg/002-wedding-couple.svg'
import couple1 from '../images/couple-1.jpg'
import couple2 from '../images/couple-2.jpg'
import couple3 from '../images/couple-3.jpg'
import couple4 from '../images/couple-4.jpg'
import luxury from '../images/flaticon/svg/003-luxury.svg'
import bride from '../images/bride.jpg'
import groom from '../images/groom.jpg'

class Journey extends React.Component {

    state = {

    }

    render() {
        return (
            <div className="App">
                <div id="qbootstrap-groom-bride" data-section="groom-bride">
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="col-md-12 text-center section-heading svg-sm-2 colored">
                                    <img src={couple} className="svg" alt="Free HTML5 Bootstrap Template by QBootstrap.com"/>
                                        <h2>Groom &amp; Bride</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam accusamus, sequi, minima repellendus explicabo magni aperiam, ducimus perferendis ad quidem suscipit omnis unde veritatis pariatur. Commodi, nisi. Iusto, accusantium a.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="couple groom text-center animate-box">
                                    <img src={groom} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com"/>
                                        <div className="desc">
                                            <h2>Louie Jie L. Mahusay</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda vero totam eum, necessitatibus reprehenderit nisi, ratione neque aspernatur sapiente minus? Omnis neque labore distinctio aspernatur esse impedit laboriosam, veritatis dolorem!</p>
                                            <ul className="social social-circle">
                                                <li><a href="#"><i className="icon-twitter"></i></a></li>
                                                <li><a href="#"><i className="icon-facebook"></i></a></li>
                                                <li><a href="#"><i className="icon-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="couple bride text-center animate-box">
                                    <img src={bride} className="img-responsive" alt="Free HTML5 Bootstrap Template by QBootstrap.com"/>
                                        <div className="desc">
                                            <h2>Marializa R. Tabay</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda vero totam eum, necessitatibus reprehenderit nisi, ratione neque aspernatur sapiente minus? Omnis neque labore distinctio aspernatur esse impedit laboriosam, veritatis dolorem!</p>
                                            <ul className="social social-circle">
                                                <li><a href="#"><i className="icon-twitter"></i></a></li>
                                                <li><a href="#"><i className="icon-facebook"></i></a></li>
                                                <li><a href="#"><i className="icon-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="qbootstrap-story" data-section="story">
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="col-md-12 text-center section-heading svg-sm-2">
                                    <img src={luxury} className="svg" alt="Free HTML5 Bootstrap Template by QBootstrap.com" />
                                    <h2>Our Love Story</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="timeline animate-box">
                                    <li className="animate-box">
                                        <div className="timeline-badge" style={{ backgroundImage: `url(${couple1})` }}></div>
                                        <div className="timeline-panel">
                                            <div className="overlay"></div>
                                            <div className="timeline-heading">
                                                <h3 className="timeline-title">First We Meet</h3>
                                                <span className="date">June 10, 2017</span>
                                            </div>
                                            <div className="timeline-body">
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted animate-box">
                                        <div className="timeline-badge" style={{ backgroundImage: `url(${couple2})` }}></div>
                                        <div className="timeline-panel">
                                            <div className="overlay overlay-2"></div>
                                            <div className="timeline-heading">
                                                <h3 className="timeline-title">First Date</h3>
                                                <span className="date">June 10, 2017</span>
                                            </div>
                                            <div className="timeline-body">
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="animate-box">
                                        <div className="timeline-badge" style={{ backgroundImage: `url(${couple3})` }}></div>
                                        <div className="timeline-panel">
                                            <div className="overlay"></div>
                                            <div className="timeline-heading">
                                                <h3 className="timeline-title">In A Relationship</h3>
                                                <span className="date">June 14, 2017</span>
                                            </div>
                                            <div className="timeline-body">
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted animate-box">
                                        <div className="timeline-badge" style={{ backgroundImage: `url(${couple4})` }}></div>
                                        <div className="timeline-panel">
                                            <div className="overlay overlay-2"></div>
                                            <div className="timeline-heading">
                                                <h3 className="timeline-title">We're Engaged</h3>
                                                <span className="date">Sept. 01, 2017</span>
                                            </div>
                                            <div className="timeline-body">
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Journey
