import React, {PropTypes} from 'react';
import $ from 'jquery';
import "../../vendor/typed";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    if ($("#typed"))
    {
      $("#typed").typed({
        strings: ["a logo design.", "a video for my website", "an article for my blog"],
        contentType: 'html' // or 'text'
      });
    }
  }
  render() {
    return (
              <div className="container">
                <div id="splitlayout" className="splitlayout">
                  <div className="intro">
                    <div className="side side-left">
                      <div className="intro-content">
                        <div className="profile">
                          <img src="http://placehold.it/150x150" alt="profile1" />
                        </div>
                        <h1>
                          <span>I need </span>
                          <span id="typed"></span>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="side side-right">
                    <div className="intro-content">
                      <div className="profile">
                        <img src="http://placehold.it/150x150" alt="profile2" />
                      </div>
                      <h1>
                        <span>I can  </span><span>make a video</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
          );
  }
}
export default LandingPage;
