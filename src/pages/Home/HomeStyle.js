import styled from "styled-components";
import BacjgrountLight from "../../assets/images/img/BacjgrountLight.png";

export const CoverContent = styled.div`
  background-image: url(${BacjgrountLight});
  background-repeat: no-repeat;
  background-size: contain;
  background-size: 1000px 1000px;
  background-position: calc(50% + 550px) calc(400px);
`;

export const WreapperStyle = styled.div`
  margin-top: 180px;
`;

export const WreapperTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #c9ac8c;
  margin-bottom: 22px;
  text-align: center;
`;

export const WreapperList = styled.ul`
  width: 700px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Wreapperitem = styled.li``;

export const WreapperDiv = styled.div`
  padding: 20px 0px 80px 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
