import Card from "../parts/Card";
import artworks from "../data/drawings.json";

const Drawings = () => {
  return (
    <>
      <h1 className="container pt-5">Drawings</h1>
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
              type="drawings"
            />
          </div>
        ))}
        </div>
        
      </div>
    </>
  );
};

export default Drawings;