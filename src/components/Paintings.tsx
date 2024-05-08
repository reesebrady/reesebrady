import Card from "../parts/Card";
import artworks from "../data/paintings.json";

const Paintings = () => {
  return (
    <>
      <h1 className="container pt-5">Paintings</h1>
      <div className="container">
        <div className="row">
        {artworks.map((artwork) => (
          <div key={artwork.key} className="col-lg-4 mb-5">
            <Card
              key={artwork.key}
              path={artwork.path}
              title={artwork.title}
              size={artwork.size}
              imageURL={artwork.imageURL}
              type="paintings"
            />
          </div>
        ))}
        </div>
        
      </div>
    </>
  );
};

export default Paintings;