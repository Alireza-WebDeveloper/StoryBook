import { Meta } from "@storybook/react";
import Title from "../Components/Common/Title";
import styled from "styled-components";
import React from "react";

interface TitleProps {
  children?: React.ReactNode;
  color?: string;
}

export default {
  component: Title,
  title: "Titles",
  args: {
    children: "Default Title",
    color: "green",
  },
} as Meta<TitleProps>;

const TitleHeader = ({ color }: TitleProps) => {
  return <div style={{ color: color }}>Header Title</div>;
};

const TitleProduct = ({ color }: TitleProps) => {
  return <div style={{ color: color }}>Product Title</div>;
};

const StyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Component = () => {
  return (
    <StyledComponent>
      <TitleHeader />
      <TitleProduct />
    </StyledComponent>
  );
};
