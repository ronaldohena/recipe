import React from 'react';

const Form = props =>{
    return (
        <form 
            onSubmit={props.getRecipe}
            style={{
                marginBottom: "2rem",
                marginTop: "2rem"
            }}
        >
            <input 
                type="text" 
                name="recipeName"
                style={{
                    borderColor: "transparent",
                    borderBottom: "1px solid black"
                }} 
            />
            <button 
                style={{
                    borderColor: "red",
                    textTransform: "uppercase",
                    backgroundColor: "white",
                    fontSize: "15px",
                    padding: "0 8px 0 8px",
                    marginLeft: "5px"
                }}
            > Search</button>
        </form>
    )
}

export default Form;
