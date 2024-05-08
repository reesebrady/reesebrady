import { Link } from 'react-router-dom';

interface Props {
    title: string;
    size: string;
    imageURL: string;
    path: string;
    type: string;
}
function Card({ title, size, imageURL, path, type }: Props) {
  return (
    <>
      <div className="card" style={{ width: 288 }}>
        <img src={imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {size}
          </p>
          <Link to={`/${type}/${path}`} className="card-link">
          <div className="btn btn-light">
            View
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
