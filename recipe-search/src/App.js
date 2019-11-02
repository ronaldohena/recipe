import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
//COMPONENTS
import Form from './component/Form';
import Recipes from './component/Recipes';



const API_KEY = "aedbb2d845263a9cad4857bcec585195";



class App extends Component {

  state = {
    recipes: [],
  }

  getRecipe= async(e) =>{
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    const data = await api_call.json();
    this.setState({recipes: data.recipes})
    console.log(this.state.recipes);
  }

  render  () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
