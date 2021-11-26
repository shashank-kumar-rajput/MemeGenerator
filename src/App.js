import React, { Component } from "react";
import { Meme } from "./Meme/Meme";
import { Switch, Route } from "react-router-dom";
import { MemeGenerated } from "./MemeGenerated/MemeGenerated";
import Footer from "./components/Footer";


export class App extends Component  {
  constructor() {
    super();
    this.state = {
      showApi:true,
      showform: false,
      allMemeImgs: [],
     
    };
    this.onClick = this.onClick.bind(this);}
  onClick(){
    this.setState({ showform: true, showApi:false});
  
  };
   refreshPage() {
    window.location.reload(false);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }
  render(){
    const { showform } = this.state;
    const { showApi } = this.state;
  return (
    <div>
      <h1 style={{textAlign:'center'}}>
        Shashank Kumar
        </h1>
    <h1 style={{textAlign:'center'}}>
       React Day 3
      </h1>
      <button onClick={this.onClick} style={{color:'blue'}}>
        Create your own Memes
        </button>
<button onClick={() => window.location.reload(false)}style={{color:'blue'}}>
          Refresh page
          </button>
        {showApi && <div>
          {this.state.allMemeImgs.map((allmeme) => (
            <div style={{ display: "inline-grid" }}>
              <img src={allmeme.url} width={200} height={200} alt={"NO MEME"}/>
              <figcaption style={({ height: 70 }, { width: 210 })}>
                {allmeme.name}
              </figcaption>
            </div>
          ))}
        </div>}
        {showform && 
      (<Switch>
         <Route exact path="/">
          <Meme />
        </Route> 
        <Route path="/generated">
          <MemeGenerated />
        </Route>
        <Footer />
      </Switch>
      )}
       
    </div>
  );
}};
