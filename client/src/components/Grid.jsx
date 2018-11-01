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
    }
    //function bindings go here
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Hey! Listen!');
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
    return (
      <div className={gridStyles.gridcontainer}>
        <div className={gridStyles.mainImage} style={{background: `url(${this.state.imgs[0].imgURL}) center scroll/cover no-repeat`}} ></div>
        <div className={gridStyles.image1} style={{background: `url(${this.state.imgs[1].imgURL}) center scroll/cover no-repeat`}} ></div>
        <div className={gridStyles.image2} style={{background: `url(${this.state.imgs[2].imgURL}) center scroll/cover no-repeat`}} ></div>
        <div className={gridStyles.image3} style={{background: `url(${this.state.imgs[3].imgURL}) center scroll/cover no-repeat`}} ></div>
        <div className={gridStyles.image4} style={{background: `url(${this.state.imgs[4].imgURL}) center scroll/cover no-repeat`}} ></div>
      </div>    
    );
  }
}

export default Grid;


