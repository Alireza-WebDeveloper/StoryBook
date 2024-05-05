import styled from "styled-components";
import React, { HtmlHTMLAttributes } from "react";

interface CardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  color?: string;
}

const defaultProps: CardProps = {
  color: "red",
  children: <p>not found html tag</p>,
};

export const StyledCard = styled.div<{ color?: string }>`
  padding: 1rem;
  border: solid white 2px;
  text-transform: capitalize;
  border-radius: 1rem;
  margin-top: 0.5rem;
  background-color: ${(props) => props.color};
`;

export const Card: React.FC<CardProps> = ({ children, color, ...rest }) => {
  return (
    <StyledCard {...rest} color={color}>
      {children}
    </StyledCard>
  );
};

Card.defaultProps = defaultProps;
