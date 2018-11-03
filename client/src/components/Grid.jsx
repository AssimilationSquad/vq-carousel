import React from 'react';
import styles from '../assets/stylesheets/grid.css';

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
      backgroundImage: `url(${this.state.imgs[0].imgURL})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: `no-repeat`,
    }

    const image1 = {
      backgroundImage: `url(${this.state.imgs[1].imgURL})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: `no-repeat`,
      width: '100%',
      height: '100%',
    }

    const image2 = {
      backgroundImage: `url(${this.state.imgs[2].imgURL})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: `no-repeat`,
      width: '100%',
      height: '100%',
    }
    const image3 = {
      backgroundImage: `url(${this.state.imgs[3].imgURL})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: `no-repeat`,
      width: '100%',
      height: '100%',
    }
    const image4 = {
      backgroundImage: `url(${this.state.imgs[4].imgURL})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: `no-repeat`,
      width: '100%',
      height: '100%',
    }
    const overflow = {
      overflow: 'hidden',
      width: '100%',
      height: '100%',
    }

    return (
      <div className={styles['word']}>
        <div  className={styles['gridcontainer']}>
          <div className={styles['mainImage']} style={mainImgStyle} ></div>
          <div className={styles.image1} style={overflow}>
            <div style={image1} ></div>
          </div>
          <div className={styles.image2} style={overflow}>
            <div style={image2} ></div>
          </div>
          <div className={styles.image3} style={overflow}>
            <div style={image3} ></div>
          </div>
          <div className={styles.image4} style={overflow}>
            <div style={image4} ></div>
          </div>

        </div>    
      </div>
    );
  }
}

export default Grid;


