import React from 'react';
import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  margin: 100px auto 0;
  padding: 50 13%;
  color: #4e4e4e;
  background-color: F7F7F5;
`;

export const FooterHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 70px;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;

  & i {
    margin-right: 20px;
  }
`;

export const FooterLinks = styled.ul`
  color: black;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  align-items: center;
`;

export const FooterLink = styled.li`
  list-style: none;
  flex: 0 0 60%;
  flex-wrap: nowrap;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const CompanyName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const CopyRights = styled.div`
  margin-top: 20px;
  display: block;
`;

export const CopyRight = styled.div`
  font-size: 11px;
  margin-top: 6px;
`;
