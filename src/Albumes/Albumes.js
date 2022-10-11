import { servicioSpotify } from "../services/servicioSpoty.js"
import { useState } from "react"

export function Albumes (){

    //declarando mi primer useState
    const[canciones,setCanciones]=useState(null)

    servicioSpotify()
    .then(function (respuesta){
        setCanciones(respuesta.tracks)
    })
    console.log(canciones)
    return(

        <>
            

            
        </>
    )
}