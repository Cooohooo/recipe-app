import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, Card } from "../Style/Styledpages";

const Searched = () => {
    const [searchedRecipe, setSearchedRecipe] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        );
        const recipes = await data.json();
        setSearchedRecipe(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.search);
    }, [params.search]);
    return (
        <Grid>
            {searchedRecipe.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                            <img src={item.image} alt="" />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                );
            })}
        </Grid>
    );
};

export default Searched;
