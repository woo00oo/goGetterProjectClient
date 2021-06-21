import styled from '@emotion/styled';

export const Head = styled.header`
  height: 60px;
  width: 1200px;
  display: flex;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const HeaderTop = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 0 20px;

  font-weight: bold;

  & a {
    text-decoration: none;
    color: #000;
  }

  & a:hover {
    color: #000;
  }
`;
