export async function servicioSpotify(){

    const URI="https://api.spotify.com/v1/artists/15UsOTVnJzReFVN1VCnxy4/top-tracks?market=ES"
    const TOKEN="Bearer BQAwZR1IoJnVaTzBxQ1Oyq-nbh1qkmlKrjYXgywkznj_jPs9vnUOTqE8ANAaU4EGr7PTjW7jS5U6yTfL31xmI9PtEWfg9b74Pi1KEewz-_ohubPQta5D0qoEUqmnwvnoz766Je4lHO-5eKMWLOl61YXUNBj2oBGkZDUkVVjVE0uwIMvgDfQDbEYHcBylvcudFAM"
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }
    fetch(URI,PETICION)
    let respuesta=await fetch(URI,PETICION)
    let datos =await respuesta.json()

    return datos

}