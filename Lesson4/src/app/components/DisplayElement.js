import React from 'react';

class DisplayElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
  }

  render() {
    console.log('render')

    let newsBlock;
    if(this.state.display) {
      newsBlock = <div>
        <h3>Новости</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi nam odit impedit praesentium enim repellendus iure nulla voluptas veniam laudantium voluptates nemo aliquam assumenda labore, totam magni voluptatum a?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi nam odit impedit praesentium enim repellendus iure nulla voluptas veniam laudantium voluptates nemo aliquam assumenda labore, totam magni voluptatum a?</p>
      </div>;
    }

    return (
      <div>
        <h2 className="link" onClick={
          () => {
            this.setState({ display: !this.state.display })
          }
        }>Скрыть/показать блок</h2>
        { newsBlock }
      </div>
    );
  }
}

export default DisplayElement;