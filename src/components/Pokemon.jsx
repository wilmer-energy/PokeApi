import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
/*
YA ESTAN LOS POKEMONES EN UN ARRAY DE OBJETOS, HAY QUE IMPRIMIR VARIAS CARTAS EN REACT
LA OTRA SEMANA NOS ENSEÑAN ESO */
const Pokemon = () => {
    const [pokemon, setPokemon] = useState({});
    const [height, setHeight] = useState(0);
    const [isDecimeters, setIsDecimeters] = useState(true);
    const [id, setId] = useState(Math.floor(Math.random() * 600) + 1)
    const [totalPokemones, setTotalPokemones] = useState([])

    useEffect(() => {
        for (let i = 1; i < 60; i++) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then((res) => {
                    totalPokemones[i - 1] = res.data
                })
        }
        setTotalPokemones(totalPokemones)
    }, [])


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
            setPokemon(res.data);
            setHeight(res.data.height);
        });
    }, []);


    const convertHeight = () => {
        setIsDecimeters(!isDecimeters)
    };
    const changePokemon = () => {
        setId(Math.floor(Math.random() * 600) + 1)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
            setPokemon(res.data);
            setHeight(res.data.height);
        });
    }
    return (
        <div className="App">
            <div className="card">
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                <div>
                    <ul>
                        <li>Weight:  <span>{pokemon.weight}</span></li>
                        <li>Height: <span>{isDecimeters ? height + " decimeters" : height / 10 + " meters"}</span></li>
                        <li>Type: <span>{pokemon.types?.[0].type.name}</span></li>
                    </ul>

                </div>
                <button onClick={convertHeight}>Convert to meters</button><br />
                <button onClick={changePokemon}>Change Pokemon</button>
            </div>
        </div>
    );


};

export default Pokemon;