import React from 'react';
import Modal from './Modal.jsx';
import gridStyles from '../assets/stylesheets/grid.css';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [
        {imgURL:''},
        {imgURL:''},
        {imgURL:''},
        {imgURL:''},
        {imgURL:''},
      ],
      hovering: false,
    }
    //function bindings go here
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick() {
    console.log('Hey! Listen!');
  }

  handleMouseOver() {
    this.setState({
      hovering: true,
    })
  }

  handleMouseLeave() {
    this.setState({
      hovering: false,
    })
  }

  componentDidMount() {
    fetch("http://localhost:3004/api/rooms/16")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            imgs: result[0].imgs,
          })
        }

      )
    
  }
  
  render() {
    const mainImgStyle = {
      backgroundImage: this.state.hovering ? `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${this.state.imgs[0].imgURL})` : `url(${this.state.imgs[0].imgURL})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: `no-repeat`,
    }
    const image1 = {
      backgroundImage: this.state.hovering ? `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${this.state.imgs[1].imgURL})` : `url(${this.state.imgs[1].imgURL})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: `no-repeat`,
    }

    const image2 = {
      backgroundImage: this.state.hovering ? `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${this.state.imgs[2].imgURL})` : `url(${this.state.imgs[2].imgURL})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: `no-repeat`,
    }
    const image3 = {
      backgroundImage: this.state.hovering ? `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${this.state.imgs[3].imgURL})` : `url(${this.state.imgs[3].imgURL})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: `no-repeat`,
    }
    const image4 = {
      backgroundImage: this.state.hovering ? `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${this.state.imgs[4].imgURL})` : `url(${this.state.imgs[4].imgURL})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: `no-repeat`,
    }
    return (
      <div className={gridStyles.gridcontainer}>
        <div onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} className={gridStyles.mainImage} style={mainImgStyle} ></div>
        <div onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} className={gridStyles.image1} style={image1} ></div>
        <div onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} className={gridStyles.image2} style={image2} ></div>
        <div onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} className={gridStyles.image3} style={image3} ></div>
        <div onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} className={gridStyles.image4} style={image4} ></div>
      </div>    
    );
  }
}

export default Grid;


