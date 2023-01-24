import styled from "styled-components";

export const FormWrap = styled.div`
  position: absolute;
  top: 370px;
  left: 145px;
  margin: 0 auto;
  z-index: 1000;
`;

export const FormStyle = styled.form`
  width: 1030px;
  padding: 29px 73px;
  box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  background-color: ${({ theme }) => (theme === "false" ? "#191919" : "#fff")};
`;

export const FormTitle = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #d1b89d;
  margin: 0;
  text-align: center;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 710px;
  /* background-color: #F5F5F5; */
  background-color: ${({ theme }) =>
    theme === "false" ? "#404040" : "#F5F5F5"};
  border-radius: 15px;
  padding: 14px 27px;
  border: none;
  outline: none;
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => (theme === "false" ? "#797979" : "#0d0d0d4d")};
  }
`;

export const FormButton = styled.button`
  border: none;
  background-color: #c9ac8c;
  border-radius: 15px;
  padding: 10px 45px;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  /* color: #EFDAC3; */
  color: ${({ theme }) => (theme === "false" ? "#3C2710" : "#EFDAC3")};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
