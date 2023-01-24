import styled from "styled-components";

export const WrapProfil = styled.form`
  width: 1000px;
  margin: 0 auto;
  margin-top: 154px;
  display: flex;
`;

export const WrapProfilInfo = styled.div`
  width: 100%;
  padding-bottom: 40px;
  border-bottom: 1px solid #ecf0f3;
  margin-bottom: 32px;
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

export const WrapProfiTitleDiv = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #464e5f;
`;

export const Wrapping = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #464e5f;
  color: ${({ theme }) => (theme === "false" ? "#FFFFFF" : "#464E5F")};
`;

export const WrappingSwitch = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: ${({ theme }) => (theme === "false" ? "#FFFFFF" : "#464E5F")};
  display: flex;
  flex-direction: column;
`;

export const WrapProfiTitleSelectone = styled.select`
  width: 100%;
  padding: 12px 20px;
  background-color: #f3f6f9;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #464e5f;
  margin-bottom: 20px;
  border: none;
  margin-top: 7px;
  ::placeholder {
    color: #a3a8b0;
  }
`;

export const SelectOption = styled.option``;

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
