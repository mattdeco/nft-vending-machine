import Image from "next/image";
import ContentContainer from "../content-container/ContentContainer";

const ErrorScreen = ({ message, errorData }) => {
  console.log("errorData", errorData);

  return (
    <ContentContainer mode="error">
      <Image
        src="/images/icon-error.svg"
        width={256}
        height={256}
        alt="Error"
      />
      <h1>Error</h1>
      <p>{message}</p>
    </ContentContainer>
  );
};

export default ErrorScreen;
