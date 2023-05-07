import { useCallback, useEffect, useState } from 'react';
// import Tours from './components/Tours';
// import Refetch from './components/Refetch';
// import Error from './components/Error';
// import Loading from './components/Loading';

import { Error, Tours, Refetch, Loading } from './components';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tours, setTours] = useState([]);

  const removeTour = useCallback(
    (id) => {
      const updatedTours = tours.filter((tour) => tour.id !== id);
      setTours(updatedTours);
    },
    [tours]
  );

  const fetchTours = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(response);
        throw new Error(
          ` Error fetching data: ${response.statusText} (${response.status})`
        );
      }
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.error(error);
      setError(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (tours.length === 0) {
    return <Refetch fetchTours={fetchTours} />;
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
