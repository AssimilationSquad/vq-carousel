import React from 'react';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [],
      imgDisplay: '',
      imgIndex: '',
      result: '',
    }
    //function bindings go here
    this.nextImage = this.nextImage.bind(this);
    this.lastImage = this.lastImage.bind(this);
  }

  nextImage() {
    const newIndex = this.state.imgIndex + 1;
    this.setState({
      imgIndex: newIndex,
      imgDisplay: this.state.result[0].imgs[newIndex].imgURL,
    })
  }
  lastImage() {
    const newIndex = this.state.imgIndex - 1;
    this.setState({
      imgIndex: newIndex,
      imgDisplay: this.state.result[0].imgs[newIndex].imgURL,
    })
  }

  componentDidMount() {
    fetch("http://localhost:3004/rooms/16")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            result: result,
            imgs: result[0].imgs,
            imgDisplay: result[0].imgs[0].imgURL,
            imgIndex: 0,
          })
        }
      )
  }


  render() {
    return (
      <div>
        <button className="lastImg" onClick={this.lastImage}>◀</button>
        <div className="slideDisplay"><img src={this.state.imgDisplay}></img></div>
        <button className="nextImg" onClick={this.nextImage} >▶</button>
      </div>
    )
  }
}

export default Carousel;
