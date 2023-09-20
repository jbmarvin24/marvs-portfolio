import { FunctionComponent } from 'react';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Container from '../components/common/Container';

interface ErrorPage {}

const ErrorPage: FunctionComponent<ErrorPage> = () => {
  const error = useRouteError();

  return (
    <Container className="my-20 text-center">
      <div>
        <h1 className="text-5xl font-bold">Opps!</h1>
        <p className="mt-5">
          {isRouteErrorResponse(error)
            ? `${error.status} ${error.statusText}`
            : 'An unexpected error occured.'}
        </p>
        {isRouteErrorResponse(error) && error.status === 404 && (
          <div className="mt-5">
            <Link to="/" className="link">
              Go to home
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ErrorPage;
