export function Caroucel (){

    return(
        <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/xxtentacion1.webp?alt=media&token=de7cc106-5ed3-4dc5-a376-596ea3abf739" className="w-100"/>
    </div>
    <div className="carousel-item">
      <img src='https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/xxxtentacion2.jpg?alt=media&token=76a08d8a-9489-47cb-9e42-56d52afb79b7' className="w-100"/>
    </div>
    <div className="carousel-item">
      <img src='https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/xxxtentacion3.jpg?alt=media&token=8145ffd1-8d90-4de2-9c77-f582498a5f4' className="w-100"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}