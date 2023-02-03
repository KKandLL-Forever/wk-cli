import { useRouteError } from "react-router-dom";

interface MyError {
  statusText: string;
  message: string;
}
export default function ErrorPage() {
  // @ts-ignore
  const error:MyError = useRouteError();
  console.error(error);
  
  return (
    <div id="error-page">
      <h1>404!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
