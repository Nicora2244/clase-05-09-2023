import { useEffect, useState } from "react";
import { useFetchGifs } from  "../hooks/useFetchGifs";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

/*

**Esto es un hook**

export const GifGrid = ({category}) => {

    useEffect(() => {
        console.log( category );
    }, [])
    
    return (
        <>
            <h3>{ category } </h3>
            <p> Hello World </p>
        </>
    )
}
*/

/*
export const GifGrid = ({category}) => {

    getGifs( category )
    
    return (
        <>
            <h3>{ category } </h3>
            <p> Hello World </p>
        </>
    )
}
*/


export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs( category )

    return (
        <>
            <h3>{ category } </h3>
            <div className = "card-grid">
                {
                    images.map( (image, key) => {
                        return <GifItem key = {key} {...image}></GifItem>
                    })
                }
            </div>
        </>
    )
}


