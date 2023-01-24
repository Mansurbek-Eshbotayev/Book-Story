import styled from "styled-components";

export const FormBook = styled.form`
  display: flex;
`;

export const WrapImgBook = styled.div`
  width: 50%;
  height: 100vh;
  background: rgba(243, 243, 243, 0.93);
  background-color: ${({ theme }) =>
    theme === "false" ? "#1B1B1B" : "#f3f3f3ed"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapImgLabel = styled.label`
  width: 315px;
  height: 430px;
  background-color: ${({ theme }) =>
    theme === "false" ? "#4D4D4D" : "#F8F8F8"};
  border: 1px dashed;
  border-color: ${({ theme }) =>
    theme === "false" ? "#828282" : "transparent"};
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapImgInput = styled.input`
  width: 0;
  height: 0;
`;

export const WrapInfoBook = styled.div`
  width: 330px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapInfoBookInner = styled.div`
  width: 100%;
`;

export const WrapInfoTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: ${({ theme }) => (theme === "false" ? "#fff" : "#000")};
  margin: 0;
  margin-bottom: 12px;
`;

export const MainInput = styled.input`
  width: 330px;
  padding: 13px 22px;
  border: none;
  border: 1px solid;
  color: ${({ theme }) => (theme === "false" ? "#fff" : "#000")};
  border-color: ${({ theme }) => (theme === "false" ? "#B4B4BB" : "#B4B4BB")};
  background-color: ${({ theme }) =>
    theme === "false" ? "#191919" : " #FFFFFF"};
  border-radius: 10px;
  margin-bottom: 16px;
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${({ theme }) => (theme === "false" ? "#FFFFFF" : "#AAAAAA")};
  }
`;

export const MainSelect = styled.select`
  width: 330px;
  padding: 13px 22px;
  border: none;
  border: 1px solid;
  color: ${({ theme }) => (theme === "false" ? "#FFFFFF" : "#AAAAAA")};
  border-color: ${({ theme }) => (theme === "false" ? "#B4B4BB" : "#B4B4BB")};
  background-color: ${({ theme }) =>
    theme === "false" ? "#191919" : " #FFFFFF"};
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const MainSelectOption = styled.option`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => (theme === "false" ? "#FFFFFF" : "#AAAAAA")};
`;

export const MainTextArea = styled.textarea`
  width: 330px;
  height: 82px;
  padding: 13px 22px;
  border: none;
  border: 1px solid;
  color: ${({ theme }) => (theme === "false" ? "#fff" : "#000")};
  border-color: ${({ theme }) => (theme === "false" ? "#B4B4BB" : "#B4B4BB")};
  background-color: ${({ theme }) =>
    theme === "false" ? "#191919" : " #FFFFFF"};
  border-radius: 10px;
  margin-bottom: 16px;
  resize: none;
  margin-bottom: 44px;
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${({ theme }) => (theme === "false" ? "#FFFFFF" : "#AAAAAA")};
  }
`;

export const MainButton = styled.button`
  width: 100%;
  padding: 5px 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  color: ${({ theme }) => (theme === "false" ? "#000" : "#ffff")};
  background-color: ${({ theme }) =>
    theme === "false" ? "#FFFFFF" : " #152540"};
  border-radius: 99px;
`;
