import styled from '@emotion/styled';

export const Right = styled.div`
  width: 600px;
  height: 100%;

  & span > a {
    position: absolute;
    color: #fff;
    text-decoration: none;
    text-align: center;
    top: 15px;
    right: 265px;
  }

  & input {
    position: absolute;
    border: none;
    box-sizing: border-box;
    width: 250px;
    height: 32px;
    padding-left: 30px;
    top: 10px;
    right: 0;
    font-size: 14px;
    z-index: 1;
  }

  & input:focus {
    outline: none;
  }

  i {
    position: absolute;
    font-size: 16px;
    color: #ced4da;
    top: 17px;
    right: 225px;
    z-index: 2;
  }
`;

export const SearchBar = styled.input`
  border-radius: 3px;
  border: 1px solid #ced4da;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 10px 0;
  margin-bottom: 0px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 38px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;
`;
