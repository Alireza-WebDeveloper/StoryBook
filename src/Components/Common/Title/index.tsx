import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary["900"]};
`;

interface TitleProps {
  title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
