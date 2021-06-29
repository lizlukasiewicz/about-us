export default function Welcome() {
    return(
    <div idName="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block w-100" src="https://media.istockphoto.com/photos/3d-rendering-of-corporate-buildings-with-sunlight-picture-id1135793300?k=6&amp;m=1135793300&amp;s=612x612&amp;w=0&amp;h=nInQIXpya3eY3Et1fBBQ39AVUMCo22A_Ud4EjEUygmQ=" alt="First slide"></img>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="Second slide"></img>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="https://media.istockphoto.com/photos/3d-rendering-of-corporate-buildings-with-sunlight-picture-id1135793300?k=6&amp;m=1135793300&amp;s=612x612&amp;w=0&amp;h=nInQIXpya3eY3Et1fBBQ39AVUMCo22A_Ud4EjEUygmQ=" alt="Third slide"></img>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    )

}