import React from "react";
import "./technology.scss";

export default class Technology extends React.Component {
  render() {
    const colorStyle = {
      color: this.props.data.colorPrimary,
    };
    let uiAndVersions;
    if (this.props.data.ui) {
      uiAndVersions = (
        <div className="technology-group row">
          <div className="technology-ui col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <h3>Librairies UI</h3>
            <ul>
              {this.props.data.ui.map((ui) => (
                <li style={colorStyle}>{ui}</li>
              ))}
            </ul>
          </div>
          <div className="technology-versions col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <h3>Versions</h3>
            <ul>
              {this.props.data.versions.map((version) => (
                <li style={colorStyle}>{version}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      uiAndVersions = (
        <div className="technology-versions">
          <h3>Versions</h3>
          <ul>
            {this.props.data.versions.map((version) => (
              <li style={colorStyle}>{version}</li>
            ))}
          </ul>
        </div>
      );
    }
    return (
      <div
        class="technology"
        // style={{
        //   background: `linear-gradient(145deg, ${this.props.data.colorPrimary} 0%, ${this.props.data.colorSecondary} 100%)`,
        // }}
      >
        {/* <svg fill="white">
                <path d="M-4,-4 L1000,-4 L1000,100 L940,161 L617,186 L555,122 L306,179 L17,177 L-4,100 L-4,-4 Z"></path>
                <circle cx="10" cy="50" r="2" fill="red"/>
            </svg> */}

        <div
          className="technology-header"
          style={{
            boxShadow: `2px 2px 1px ${this.props.data.colorPrimary}, -2px -2px 1px ${this.props.data.colorPrimary}`,
          }}
        >
          <img
            src={`/assets/${this.props.data.logo}`}
            alt={this.props.data.name}
          />
          <h3 style={colorStyle}>{this.props.data.name}</h3>
        </div>
        <div className="technology-information">
          <div className="technology-story">
            <p style={colorStyle}>{this.props.data.experience}</p>
            <p style={colorStyle}>
              {this.props.data.production} projet(s) en production
            </p>
            <h3>Retour d'expérience</h3>
            <ul>
              {this.props.data.histoires.map((story) => (
                <li style={colorStyle}>{story}</li>
              ))}
            </ul>
          </div>

          {uiAndVersions}

          <div className="technology-group row">
            <div className="technology-maitrise col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
              <h3>Maitrise</h3>
              <ul>
                {this.props.data.maitrise.map((maitrise) => (
                  <li style={colorStyle}>{maitrise}</li>
                ))}
              </ul>
            </div>
            <div className="technology-apprentissage col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
              <h3>Apprentissage</h3>
              <ul>
                {this.props.data.apprentissage.map((apprentissage) => (
                  <li style={colorStyle}>{apprentissage}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
