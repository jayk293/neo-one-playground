import React from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { NavLink as RouterLink } from 'react-router-dom';
import { Flex, styled, Toolbar } from 'reakit';
import { prop } from 'styled-tools';
import { Link, Logo } from '../elements';
import { ComponentProps } from '../types';

const Wrapper = styled(Flex)`
  width: 100%;
  justify-content: center;
  background-color: ${prop('theme.primary')};
  z-index: 9999;
  padding: 0 36px;

  @media (max-width: 768px) {
    padding: 0 8px;
  }
`;

const StyledToolbar = styled(Toolbar)`
  height: 100%;
  grid-gap: 8px;
  padding: 0 16px;
  ${prop('theme.maxWidth')};

  @media (max-width: 768px) {
    padding: 0 8px;
  }
`;

const LogoLink = styled(RouterLink)`
  display: block;
  width: 100px;
  margin-right: 36px;
  margin-bottom: 8px;
  margin-top: 8px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const NavigationLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 100%;
  padding-top: 5px;
  border-bottom: 5px solid transparent;
  color: ${prop('theme.black')};
  text-decoration: none;

  &:hover {
    border-color: ${prop('theme.accent')};
    color: ${prop('theme.accent')};
  }

  &.active {
    border-color: ${prop('theme.accent')};
  }
`;

const StyledToolbarLink = styled(Toolbar.Focusable.as(Link))`
  outline: none;
`;

const StyledToolbarNavLink = styled(Toolbar.Focusable.as(NavigationLink))`
  outline: none;
`;

const StyledToolbarLogoLink = styled(Toolbar.Focusable.as(LogoLink))`
  outline: none;
`;

export const Header = (props: ComponentProps<typeof Wrapper>) => (
  <Wrapper {...props}>
    <StyledToolbar>
      <Toolbar.Content>
        <StyledToolbarLogoLink data-test="header-logo" to="/">
          <Logo />
        </StyledToolbarLogoLink>
        <StyledToolbarNavLink data-test="header-ico" to="/ico">
          ICO
        </StyledToolbarNavLink>
        <StyledToolbarNavLink data-test="header-gasvac" to="/gasvac">
          GASVac
        </StyledToolbarNavLink>
        <StyledToolbarNavLink data-test="header-escrow" to="/escrow">
          Escrow
        </StyledToolbarNavLink>
        <StyledToolbarNavLink data-test="header-smart-donation" to="/smart-donation">
          Smart Donation
        </StyledToolbarNavLink>
      </Toolbar.Content>
      <Toolbar.Content align="end">
        <StyledToolbarLink
          data-test="header-github"
          href="https://github.com/neo-one-suite/neo-one-playground"
          target="_blank"
        >
          GitHub
          <MdOpenInNew />
        </StyledToolbarLink>
      </Toolbar.Content>
    </StyledToolbar>
  </Wrapper>
);
