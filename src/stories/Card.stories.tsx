import { Meta } from "@storybook/react";
import { Card } from "../Components/Common/Card";
import React from "react";
import { action } from "@storybook/addon-actions";
import PropTypes from "prop-types";

interface StoryBookItem {
  id: number;
  title: string;
  color: string;
}

const StoryBookList: StoryBookItem[] = [
  {
    id: 1,
    title: "react",
    color: "blue",
  },
  {
    id: 2,
    title: "javascript",
    color: "red",
  },
  {
    id: 3,
    title: "bootstrap",
    color: "white",
  },
  {
    id: 4,
    title: "bootstrap",
    color: "yellow",
  },
  {
    id: 5,
    title: "bootstrap",
    color: "skyblue",
  },
  {
    id: 6,
    title: "php",
    color: "green",
  },
];

export default {
  title: "Card/CardProduct",
  component: Card,
  args: {
    children: StoryBookList.map(({ title }) => title).join(", "),
    color: StoryBookList.map(({ color }) => color),
    onClick: action("clicked"), // Action for click event
    onMouseEnter: action("mouse entered"), // Action for mouseenter event
    onMouseLeave: action("mouse left"), // Action for mouseleave event
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "20px", backgroundColor: "lightgray" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      description: "The content to be displayed on the card",
    },
    color: {
      description: "The background color of the card",
      control: {
        type: "select",
        options: ["blue", "red", "white", "yellow", "skyblue", "green"],
      },
    },
  },
} as Meta;

export const CardProduct: React.FC = () => {
  return (
    <>
      {StoryBookList.map(({ id, title, color }) => (
        <Card
          key={id}
          color={color}
          onMouseEnter={action("mouse entered")}
          onMouseLeave={action("mouse left")}
          onClick={action("clicked")}
        >
          {title}
        </Card>
      ))}
    </>
  );
};

CardProduct.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
};
