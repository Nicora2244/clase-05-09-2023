import React from 'react';

export const getGifs = async ( category ) => {
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

    console.log(gifs);
    
    return gifs
    
}