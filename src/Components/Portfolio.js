import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <img id="portfolio-img"alt={projects.title} src={projectImage}/>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <marquee id="marquee" behavior="scroll" scrollamount="15">{projects}</marquee>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
