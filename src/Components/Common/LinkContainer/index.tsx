import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Interface for props
interface LinkContainerProps {
  routes: { title: string; href: string }[];
}

// Styled components
const StyledLinkParent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.slate["900"]};
`;

// Renamed from ItemLink to LinkItem for consistency
const LinkItem = ({ href, title }: { href: string; title: string }) => (
  <StyledLink to={href}>{title}</StyledLink>
);

// LinkContainer component
const LinkContainer: React.FC<LinkContainerProps> = ({ routes }) => (
  <StyledLinkParent>
    {routes.map((route, index) => (
      <LinkItem key={index} href={route.href} title={route.title} />
    ))}
  </StyledLinkParent>
);

export default LinkContainer;
