import miLogo1 from "../../../assets/img/1.jpg";
import miLogo2 from "../../../assets/img/2.jpg";
import miLogo3 from "../../../assets/img/3.jpg";

export const Inicio = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
      {/* Sección de bienvenida */}
      <div className="text-center mb-4">
        <h1>¡Bienvenidos a Nuestra Plataforma de Música!</h1>
        <p>Explora, disfruta y añade tus canciones favoritas a tus listas de reproducción.</p>
      </div>

      {/* Carrusel de imágenes */}
      <div 
        id="carouselExampleIndicators" 
        className="carousel slide mx-auto d-flex justify-content-center align-items-center" 
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={miLogo1} className="d-block w-100" alt="img1" />
          </div>
          <div className="carousel-item">
            <img src={miLogo2} className="d-block w-100" alt="img2" />
          </div>
          <div className="carousel-item">
            <img src={miLogo3} className="d-block w-100" alt="img3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
