import { useRoutes } from 'react-router-dom';
import routes from './routes';

const RoutesList = () => {
  const element = useRoutes(routes);

  return element;
}

export default RoutesList;