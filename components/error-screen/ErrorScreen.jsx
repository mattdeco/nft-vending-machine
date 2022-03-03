import ContentContainer from "../content-container/ContentContainer";

const ErrorScreen = ({ message }) => {
  return (
    <ContentContainer>
      <h1>Error</h1>
      <p>{message}</p>
    </ContentContainer>
  );
};

export default ErrorScreen;
