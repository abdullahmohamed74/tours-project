import { useState } from 'react';

function Tour({ id, name, image, info, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  const renderedInfo = (
    <>
      {readMore ? info : `${info.substring(0, 200)}...`}
      <button className="info-btn" onClick={handleReadMore}>
        {readMore ? 'show less' : 'show more'}
      </button>
    </>
  );

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{renderedInfo}</p>
        <button
          onClick={() => removeTour(id)}
          className="btn btn-block delete-btn"
        >
          Not interested
        </button>
      </div>
    </article>
  );
}
export default Tour;
