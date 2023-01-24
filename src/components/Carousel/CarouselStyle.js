import styled from "styled-components";
import autor from "../../assets/images/img/autor.png";

export const CarouselList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  height: 345px;
  border-radius: 21px;
  position: relative;
`;

export const CarouselItem = styled.li`
  height: 345px;
  border-radius: 21px;
  background-image: url(${autor});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1 !important;
`;

export const CarouselTitle = styled.h4`
  font-family: "Aclonica";
  width: 340px;
  font-style: normal;
  font-weight: 400;
  font-size: 61px;
  line-height: 67px;
  margin-left: 90px;
  margin-top: 45px;
  color: #d1b89d;
`;
