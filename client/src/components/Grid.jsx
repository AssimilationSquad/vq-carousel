import React from 'react';
import Modal from './Modal.jsx';
import gridStyles from '../assets/stylesheets/grid.css';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: '',
      image1: '',
      image2: '',
      image3: '',
      image4: '',
    }
  }

  componentDidMount() {
    fetch("http://localhost:3004/rooms/16")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            result: result,
            imgs: result[0].imgs,
            mainImage: result[0].imgs[0].imgURL,
            image1: result[0].imgs[1].imgURL,
            image2: result[0].imgs[2].imgURL,
            image3: result[0].imgs[3].imgURL,
            image4: result[0].imgs[4].imgURL,
          })
        }
      )
  }

  render() {
    return (
      <div className={gridStyles.gridcontainer}>
        <div className={gridStyles.mainImage}>
          <img src={this.state.mainImage}></img>
        </div>
        <div className={gridStyles.image1}>
          <img src={this.state.image1}></img>
        </div>
        <div className={gridStyles.image2}>
          <img src={this.state.image2}></img>
        </div>
        <div className={gridStyles.image3}>
          <img src={this.state.image3}></img>
        </div>
        <div className={gridStyles.image4}>
          <img src={this.state.image4}></img>
        </div>
      </div>    
    );
  }
}

export default Grid;

