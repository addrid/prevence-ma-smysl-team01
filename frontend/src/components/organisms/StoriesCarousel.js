import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import {StoryButton} from '../atoms/StoryButton';
import TextEllipsis from 'react-text-ellipsis';
import Slider from "react-slick";
import {getStories} from '../../services/Stories/reducer';
import {startFetchStories} from '../../services/Stories/actions'

/* Custom arrows */
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i class="material-icons" style={{'margin': '10px',color: '#026977'}}>arrow_forward_ios</i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i class="material-icons" style={{'margin': '10px', color: '#026977'}}>arrow_back_ios</i>
    </div>
  );
}

export class StoriesCarouselRaw extends Component {

  componentDidMount(){
    this.props.startFetchStories();
  }

  render() {
    const { stories } = this.props;
    console.log(this.props);

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          autoplay: true,
          pauseOnFocus: true,
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 840,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };

    return (
      <div className='parallax-content' id="stories">
        <h4>Příběhy "Za 5min 12"</h4>
        <h5>Příběhy těch, kterým prevence zachránila život</h5>
      <p id="cssContent">Příběhy za 5 minut 12. TBD Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <Slider {...settings}>
          {stories.map ( item => (
            <Col>
              <Card id="cssCardStories" body>
                <CardTitle>{ item.Name }, { item.Age }</CardTitle>
                <CardText>
                    <p id="cssStoriesParagraph">
                      <TextEllipsis
                        lines={6}
                        tag={'p'}
                        ellipsisChars={'...'}
                        tagClass={'className'}
                        debounceTimeoutOnResize={200}
                        useJsOnly={true}>
                        { item.Description }
                      </TextEllipsis>
                    </p>
                    <a href="/pribehy" className="storiesCarousel">Celý příběh...</a>
                </CardText>
              </Card>
            </Col>
          ))}

        </Slider>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const stories = getStories(state.showStories);

  return {
    stories,
  };
};

const mapDispatchToProps = {
  startFetchStories
}

export const StoriesCarousel = connect(mapStateToProps, mapDispatchToProps)(StoriesCarouselRaw);
