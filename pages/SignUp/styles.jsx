import styled from '@emotion/styled';

export const SignUpWrapper = styled.div`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  width: 500px;
`;

export const SignForm = styled.form`
  margin-top: 40px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 50px;

  & span : {
    color: blue;
  }
`;
export const EmailInput = styled.input`
  border: 1px solid grey;
  border-radius: 3px;
  width: 353px;
  height: 45px;
  margin-top: 8px;
`;
export const TextInput = styled.input`
  border: 1px solid grey;
  border-radius: 3px;
  width: 460px;
  height: 45px;
  margin-top: 8px;
`;

export const SmallText = styled.div`
  font-size: 13px;
  color: #939597;
`;

export const FormCheck = styled.div`
  margin-top: 50px;
`;

export const CheckText = styled.span`
  font-size: 14px;
`;

export const AuthButton = styled.button`
  border-radius: 3px;
  border: 0px;
  background-color: #900020;
  width: 100px;
  height: 45px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 8px;
  :hover {
    background-color: #f13f31;
  }
`;

export const SignUpButton = styled.button`
  font-size: 16px;
  color: white;
  background-color: #0f4c81;
  border: 0px;
  border-radius: 3px;
  width: 460px;
  height: 47px;
  margin-top: 8px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  :hover {
    background-color: #374c63;
  }
`;
