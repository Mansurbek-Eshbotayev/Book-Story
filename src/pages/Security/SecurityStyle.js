import styled from "styled-components";
import imgBk from "../../assets/images/img/imgBk.png";

export const WrapProfil = styled.form`
  width: 1000px;
  margin: 0 auto;
  margin-top: 70px;
  display: flex;
`;

export const WrapProfilInfo = styled.div`
  width: 100%;
  padding-bottom: 65px;
`;

export const WrapProfiTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => (theme === "false" ? "#DEDEDE" : "#212121")};
  margin: 0;
  margin-bottom: 32px;
`;

export const WrapProfiTitleLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: ${({ theme }) => (theme === "false" ? "#F3F6F9" : "#464E5F")};
`;

export const WrapProfiTitleInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  background-color: #f3f6f9;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => (theme === "false" ? "#000000" : "#464E5F")};
  margin-bottom: 22px;
  border: none;
  margin-top: 7px;
  ::placeholder {
    color: #a3a8b0;
  }
`;

export const InnerWrap = styled.div`
  width: 100%;
  max-width: 712px;
  margin: 0 auto;
`;

export const WrapButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const WrapProfiTitleButton = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  padding: 12px 20px;
  color: ${({ theme }) => (theme === "false" ? "#0D0D0D" : "#FFFFFF")};
  background-color: ${({ theme }) =>
    theme === "false" ? "#F1F6FF" : " #152540"};
  border-radius: 4px;
`;
