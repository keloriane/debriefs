// import React, { useEffect } from "react";
// import { services } from "./../../../data.js";
// import {
//   useParams,
//   useRouteMatch,
//   useHistory,
//   useLocation,
// } from "react-router-dom";
// import gsap from "gsap";
// import "./ServiceDetails.scss";
// import { Title } from "../../Title/Title.jsx";
// import { HomeB } from "../../BreadCrumbs/HomeB.jsx";

// const ServiceDetails = () => {
//   useEffect(() => {
//     // const serviceTitle = document.querySelector('.service-title');
//     // const photo = document.querySelector('.photo-inner');
//     // const textDetails = document.querySelector('.details-service');
//     // const blueBg = document.querySelector('.blue-layer-service-under');
//     // detailsService.play()

//     // detailsService
//     //   .from([serviceTitle,textDetails], .4,{y:100, opacity:0, stagger: .15})
//     //   .to(blueBg,1,{x:"100%"})
//     //   .from(photo, .4,{x:"-100%", opacity:0})
//     const imageSlider = document.getElementsByClassName("slider-image");
//     let layer = document.getElementsByClassName("back-layer");
//     const workTimeline = gsap.timeline();

//     workTimeline
//       .from(layer, 1, { x: "-50%", ease: "Power4.easeOut" })
//       .from(imageSlider, 0.9, {
//         ease: "Power4.easeOut",
//         x: "-100%",
//         delay: -0.8,
//       });
//   });

//   const { serviceId } = useParams();
//   let { url } = useRouteMatch();
//   const service = services.find(({ name }) => name === serviceId);
//   let history = useHistory();
//   console.log(url);
//   let location = useLocation();
//   console.log(location);
//   const handleNext = () => {
//     switch (url) {
//       case `/debriefs/services/${services[0].name}`:
//         history.push(services[1].name);
//         break;
//       case `/debriefs/services/${services[1].name}`:
//         history.push(services[2].name);
//         break;
//       case `/debriefs/services/${services[2].name}`:
//         history.push(services[3].name);
//         break;
//       case `/debriefs/services/${services[3].name}`:
//         history.push(services[4].name);
//         break;
//       case `/debriefs/services/${services[4].name}`:
//         history.push(services[5].name);
//         break;
//       case `/debriefs/services/${services[5].name}`:
//         history.push(services[0].name);
//         break;
//       default:
//         break;
//     }
//   };
//   const handlePrevious = () => {
//     switch (url) {
//       case `/debriefs/service/${services[0].name}`:
//         history.push(services[5].name);
//         break;
//       case `/debriefs/service/${services[1].name}`:
//         history.push(services[0].name);
//         break;
//       case `/debriefs/service/${services[2].name}`:
//         history.push(services[1].name);
//         break;
//       case `/debriefs/service/${services[3].name}`:
//         history.push(services[2].name);
//         break;
//       case `/debriefs/service/${services[4].name}`:
//         history.push(services[3].name);
//         break;
//       case `/debriefs/service/${services[5].name}`:
//         history.push(services[4].name);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     // <div className="details" id="service-details" className="no-scroll">
//     //     <div className="service-details-wrapper">
//     //     <div className="details-photo">
//     //         <div className="blue-layer-service"></div>
//     //         <div className="blue-layer-service-under"></div>
//     //         <img className="photo-inner" src={service.image} alt=""/>
//     //     </div>
//     //     <div className="absolute-details">

//     //     <div className="details-content">
//     //     <div className="title-details-services">
//     //     <h2 className="service-title">{service.title}  </h2>
//     //   <div className="underline"></div>
//     //   </div>
//     //   <div className="text-details-service">
//     //       <p className="details-service">{service.paragraphDetails}</p>
//     //     </div>
//     //     </div>
//     //     </div>
//     // </div>
//     // <button onClick={()=>handleNext()}>
//     //   next
//     // </button>
//     // <button onClick={()=>handlePrevious()}>
//     //   previous
//     // </button>
//     // </div>
//     <section className="works">
//       <HomeB />
//       <div className="folio">
//         <div className="work--container">
//           <div className="inner--left--container">
//             <Title title={service.title} />
//             <div className="inner--text--container">
//               <p>{service.paragraphDetails}</p>
//             </div>
//             <div className="work--navigation">
//               <div className="next">
//                 <button
//                   className="button-nav button--next"
//                   onClick={handlePrevious}
//                 >
//                   <p>Prev</p>
//                 </button>
//               </div>

//               <div className="previous">
//                 <button
//                   className="button-nav button--previous"
//                   onClick={handleNext}
//                 >
//                   {" "}
//                   <p>Next</p>{" "}
//                 </button>
//               </div>
//             </div>
//             <div className="breadcrumbs">
//               <p>{service.id + 1}/6</p>
//             </div>
//           </div>
//           <div className="inner--right--container">
//             <div className="slider--work">
//               <div className="image--wrapper ">
//                 <div className="back-layer"></div>
//                 <img className="slider-image" src={service.image} alt="" />
//                 <div className="details--button"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default ServiceDetails;




import React, { Component } from "react";
import ClassNames from "classnames";
import Slider from "react-slick";
import Responsive from "react-responsive";

import "./style.scss";
import { services } from "./../../../data.js";

const DesktopTablet = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const sliderSettings = {
  autoplay: false,
  dots: false,
  infinite: true,
  arrows: false,
  speed: 600,
  draggable: false,
  swipeToSlide: false,
  touchMove: false,
  slidesToShow: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        draggable: true,
        swipeToSlide: true,
        touchMove: true
      }
    }
  ]
};

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.changeIndex = this.changeIndex.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.beforeChangeHandler = this.beforeChangeHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener("touchstart", this.touchStart);
    window.addEventListener("touchmove", this.preventTouch, { passive: false });
  }

  componentWillUnmount() {
    window.removeEventListener("touchstart", this.touchStart);
    window.removeEventListener("touchmove", this.preventTouch, {
      passive: false
    });
  }

  touchStart(e) {
    this.firstClientX = e.touches[0].clientX;
    this.firstClientY = e.touches[0].clientY;
  }

  preventTouch(e) {
    const minValue = 5; // threshold

    this.clientX = e.touches[0].clientX - this.firstClientX;
    this.clientY = e.touches[0].clientY - this.firstClientY;

    // Vertical scrolling does not work when you start swiping horizontally.
    if (Math.abs(this.clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;
      return false;
    }
  }

  changeIndex(number) {
    this.setState({ index: number }, () => {
      this.slider.slickGoTo(number);
    });
  }

  handleNext(number) {
    if (number < data.length) {
      this.setState({ index: number }, () => {
        this.slider.slickNext();
      });
    } else {
      this.setState({ index: 0 }, () => {
        this.slider.slickNext();
      });
    }
  }

  beforeChangeHandler(currentSlide, nextSlide) {
    if (currentSlide === 0 && nextSlide === data.length - 1) {
      this.setState({ index: data.length - 1 });
    } else if (
      nextSlide > currentSlide ||
      (currentSlide === data.length - 1 && nextSlide === 0)
    ) {
      currentSlide + 1 < data.length
        ? this.setState({ index: currentSlide + 1 })
        : this.setState({ index: 0 });
    } else {
      this.setState({ index: currentSlide - 1 });
    }
  }

  render() {
    return (
      <div className="container">
        <DesktopTablet>
          <div className="section__box">
            <div className="section__content">
              {data.map(
                (item, index) =>
                  this.state.index === index && (
                    <div key={index}>
                      <div className="description">
                        <p className="label--title">{item.name}</p>
                        <p className="label--subtitle">{item.company}</p>
                        <p className="label--quotes">
                          {'"' + item.quotes + '"'}
                        </p>
                      </div>
                      <div
                        className="circle"
                        onClick={() => this.handleNext(index + 1)}
                      >
                        <i className="arrow arrow--right" />
                      </div>
                    </div>
                  )
              )}
            </div>
            <div className="section__slider">
              <div className="title">People</div>
              <div className="counter">
                0{this.state.index + 1}/0{data.length}
              </div>
              <Slider ref={c => (this.slider = c)} {...sliderSettings}>
                {data.map((item, index) => (
                  <div className="img" key={index}>
                    <div className="img__wrapper">
                      <div className="img__position">
                        <div
                          style={{ backgroundImage: `url(${item.image})` }}
                          className={ClassNames("img__content", {
                            "img__content--selected": this.state.index === index
                          })}
                          onClick={() => this.changeIndex(index)}
                        />
                        <div className="img__text">
                          <hr className="line" />
                          <p className="label--title">{item.name}</p>
                          <p className="label--subtitle">{item.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </DesktopTablet>
        <Mobile>
          <div className="section__slider">
            <div className="section__title">People</div>
            <Slider
              ref={c => (this.slider = c)}
              {...sliderSettings}
              beforeChange={this.beforeChangeHandler}
            >
              {data.map((item, index) => (
                <div className="img" key={index}>
                  <div className="img__wrapper">
                    <div className="img__position">
                      <div
                        style={{ backgroundImage: `url(${item.image})` }}
                        className={ClassNames("img__content", {
                          "img__content--selected": this.state.index === index
                        })}
                        onClick={() => this.changeIndex(index)}
                      >
                        {this.state.index === index && (
                          <div className="desc">
                            <p className="label--title">{item.name}</p>
                            <p className="label--subtitle">{item.company}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="txt__wrapper">
                    <hr
                      className={ClassNames("line", {
                        "line--active": this.state.index === index
                      })}
                    />
                    <p
                      className={ClassNames("label", {
                        "label--active": this.state.index === index
                      })}
                    >
                      {item.quotes}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Mobile>
      </div>
    );
  }
}

export default Basic;

