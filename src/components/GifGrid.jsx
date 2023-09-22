import { useEffect } from "react";
import { useFetchGifs } from  "../hooks/useFetchGifs.jsx";
//import { GifItem } from "./GifItem";

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

const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Bh98ua6p1Qthm3gMIWnfAO2nvuDa2cP1&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch( url )
    const { data } = await resp.json()
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.fixed_width.url
        }
    })

    return gifs
}

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

