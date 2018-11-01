import React from 'react';
import Modal from './Modal.jsx';
import gridStyles from '../assets/stylesheets/grid.css';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [],
    }
  }

  componentDidMount() {
    fetch("http://localhost:3004/rooms/16")
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
    return (
      <div className={gridStyles.gridcontainer}>
        <div className={gridStyles.mainImage}>
          <img src={this.state.imgs[0].imgURL}></img>
        </div>
        <div className={gridStyles.image1}>
          <img src={this.state.imgs[1].imgURL}></img>
        </div>
        <div className={gridStyles.image2}>
          <img src={this.state.imgs[2].imgURL}></img>
        </div>
        <div className={gridStyles.image3}>
          <img src={this.state.imgs[3].imgURL}></img>
        </div>
        <div className={gridStyles.image4}>
          <img src={this.state.imgs[4].imgURL}></img>
        </div>
      </div>    
    );
  }
}

export default Grid;


