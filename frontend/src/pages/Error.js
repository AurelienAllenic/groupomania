import styled from "styled-components";
import errorImage from "../assets/logo-groupomania.png";
import { TbArrowBack } from "react-icons/tb";
import { Link } from "react-router-dom";
import colors from "../utils/style/colors";

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary};
  align-items: center;
  padding-bottom: 20px;
`;

const ErrorTitle = styled.h1`
  font-weight: 800;
`;

const ErrorSubtitle = styled.h2`
  padding-top: 20px;
  font-weight: 800;
  color: ${colors.secondary};
`;

const Illustration = styled.img`
  max-width: 2000px;
  width: 1200px;
  height: 70vh;
`;
const ArrowStyle = styled.a`
  text-decoration: none;
  font-size: 3rem;
  color: ${colors.secondary};
`;

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Erreur 404</ErrorTitle>
      <Link to="/">
        <ArrowStyle>
          <TbArrowBack />
        </ArrowStyle>
      </Link>
      <Illustration src={errorImage} />

      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  );
}

export default Error;
