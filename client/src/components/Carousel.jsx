import React from 'react';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [],
      imgDisplay: '',
    }

    //function bindings go here
  }
  componentDidMount() {
    fetch("http://localhost:3004/rooms/16")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            imgs: result[0].imgs,
            imgDisplay: result[0].imgs[0].imgURL,
          })
        }
      )
  }

  render() {
    return (
      <div>
        <button>◀</button>
        <div className="slideDisplay"><img src={this.state.imgDisplay}></img></div>
        <button>▶</button>
      </div>
    )
  }
}

export default Carousel;
