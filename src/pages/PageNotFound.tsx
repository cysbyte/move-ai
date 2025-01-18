import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageNotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f7f8fa;
  color: #333;

  h1 {
    font-size: 6rem;
    margin: 0;
    color: #407bff;
  }

  p {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    background-color: #407bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #305bbf;
    }
  }
`;

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <PageNotFoundWrapper>
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <button onClick={goHome}>Go Back Home</button>
    </PageNotFoundWrapper>
  );
};

export default PageNotFound;
