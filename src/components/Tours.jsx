import Tour from './Tour';

function Tours({ tours,removeTour }) {
  const renderedTours = tours.map((tour) => {
    return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
  });

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">{renderedTours}</div>
    </section>
  );
}
export default Tours;
