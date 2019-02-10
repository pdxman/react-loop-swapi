import React from "react";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      planets: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/planets/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let planets = data.results.map(planet => {
          return (
            <Accordion atomic={true}>
              <AccordionItem title={planet.name}>
                <div className="planet-info-wrapper" key={planet.results}>
                  <h1 className="heading">
                    <strong>Name:</strong> {planet.name}
                  </h1>
                  <p>
                    <strong>Climate:</strong> {planet.climate}
                  </p>
                  <p>
                    <strong>Gravity:</strong> {planet.gravity}
                  </p>
                  <p>
                    <strong>Terrain:</strong> {planet.terrain}
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          );
        });
        this.setState({ planets: planets });
      });
  }

  render() {
    return <div>{this.state.planets}</div>;
  }
}

export default App;
