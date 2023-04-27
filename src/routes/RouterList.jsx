import { useRoutes } from 'react-router-dom';
import routes from './routes';

export default function RoutesList() {
  const element = useRoutes(routes);

  return element;
}