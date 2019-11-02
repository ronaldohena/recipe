import React,{Component} from 'react';


const API_KEY = "aedbb2d845263a9cad4857bcec585195";

class Recipe extends Component{
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch
        (`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=
        ${API_KEY}&q=${title}`);
        const res = await req.json();
        this.setState({activeRecipe: res.recipes[0]})
        console.log(this.state.activeRecipe);
    }

    render () {
        const recipe = this.state.activeRecipe;

        return (
            <div className="container">
                <div className="active-recipe">
                    <img 
                        className="active-recipe__img"
                        src={recipe.image_url}
                        alt={recipe.title} 
                    />
                </div>
                <h3 className="active-recipe__tite">{recipe.title}</h3>
                <h4 className="active-recipe__publisher">
                    <span>{recipe.publisher}</span>
                </h4>  
            </div>
        )
    }
}

export default Recipe;