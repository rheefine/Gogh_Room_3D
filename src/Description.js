import "./description.css";

export default function Description({ obj }) {
    if (obj === 14) {
      return (
        <div className="container">
          <div className="img-container">
            <img src="./img/Poppy_field.jpg" className="img" alt="Poppy field" />
          </div>
          <div className="descrip-container">
            <div className="descrip">
              <h1>Vincent Van Gogh [1853-1890]</h1>
              <h2>Poppy field</h2>
              <p>
                1890
                <br />
                H.73, W.91.5cm <br />
                Oil on Canvas
                <br />
                The Hague Museum of Contemporary Art
              </p>
            </div>
          </div>
        </div>
      );
    } else if (obj === 15) {
      return (
        <div className="container">
          <div className="img-container">
            <img src="./img/The_Stary_Night.jpg" className="img" alt="The Stary Night" />
          </div>
          <div className="descrip-container">
            <div className="descrip">
              <h1>Vincent Van Gogh [1853-1890]</h1>
              <h2>The Stary Night</h2>
              <p>
                1890
                <br />
                H.73, W.91.5cm <br />
                Oil on Canvas
                <br />
                The Hague Museum of Contemporary Art
              </p>
            </div>
          </div>
        </div>
      );
    } else if (obj === 16) {
      return (
        <div className="container">
          <div className="img-container">
            <img src="./img/Vase_with_Poppies.jpg" className="img" alt="Vase with Poppies" />
          </div>
          <div className="descrip-container">
            <div className="descrip">
              <h1>Vincent Van Gogh [1853-1890]</h1>
              <h2>Vase with Poppies</h2>
              <p>
                1886
                <br />
                H.54.6, W.45.1cm <br />
                Oil on Canvas
                <br />
                Wadsworth Atheneum Museum of Art
              </p>
            </div>
          </div>
        </div>
      );
    } else if (obj === 17) {
      return (
        <div className="container">
          <div className="img-container">
            <img src="./img/Self_Portrait.jpg" className="img" alt="Self Portrait" />
          </div>
          <div className="descrip-container">
            <div className="descrip">
              <h1>Vincent Van Gogh [1853-1890]</h1>
              <h2>Self Portrait</h2>
              <p>
                1889
                <br />
                H.57.79, W.44.5cm <br />
                Oil on Canvas
                <br />
                National Gallery of Art
              </p>
            </div>
          </div>
        </div>
      );
    } else if (obj === 18) {
      return (
        <div className="container">
          <div className="img-container">
            <img src="./img/Eugène_Boch.jpg" className="img" alt="Eugène Boch" />
          </div>
          <div className="descrip-container">
            <div className="descrip">
              <h1>Vincent van Gogh [1853-1890]</h1>
              <h2>Eugène Boch</h2>
              <p>
                1888
                <br />
                H.60.3, W.45.4cm <br />
                Oil on Canvas
                <br />
                Musée d'Orsay
              </p>
            </div>
          </div>
        </div>
      );
    } else if (obj === 19) {
      return (
        <div className="container">
          <div className="img-container">
            <img src="./img/La_Chambre_de_Van_Gogh_à_Arles.jpg" className="img" alt="La Chambre de Van Gogh à Arles" />
          </div>
          <div className="descrip-container">
            <div className="descrip">
              <h1>Vincent Van Gogh [1853-1890]</h1>
              <h2>La Chambre de Van Gogh à Arles</h2>
              <p>
                1889
                <br />
                H.57.3, W.73.5cm <br />
                Oil on Canvas
                <br />
                Musée d'Orsay
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
