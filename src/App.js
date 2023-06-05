import logo from './logo.svg';
import './App.css';
import './css/landing.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: /Mobi/.test(navigator.userAgent) ? 3 : 6,
    slidesToScroll: 3
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Camrin Photography Landing Page
        </p>
      </header>
    </div>
    // <>
    //   <div className='back_img'>
    //     <div className='title'>
    //       <p>JAPANESE</p>
    //       <p>the human whose name is written in this note shall die!!</p>
    //     </div>
    //   </div>
    //   <br></br>
    //   <div className='slider_container'>
    //     <Slider {...settings}>
    //       <div className='slider_img'>
    //         <img src={img1}></img>
    //       </div>
    //       <div className='slider_img'>
    //         <img src={img2}></img>
    //       </div>
    //       <div className='slider_img'>
    //         <img src={img3}></img>
    //       </div>
    //       <div className='slider_img'>
    //         <img src={img1}></img>
    //       </div>
    //       <div className='slider_img'>
    //         <img src={img2}></img>
    //       </div>
    //       <div className='slider_img'>
    //         <img src={img3}></img>
    //       </div>
    //       <div className='slider_img'>
    //         <img src={img1}></img>
    //       </div>
    //       <div className='slider_img'>
    //         <img src={img2}></img>
    //       </div>
    //       <div className='slider_img'>
    //         <img src={img3}></img>
    //       </div>
    //     </Slider>
    //   </div>

    // </>
  );
}

export default App;
