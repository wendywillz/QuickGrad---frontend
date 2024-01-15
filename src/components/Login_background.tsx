import styled from "styled-components";

interface LeftImageWrapperProps {
  backgroundImage: string;
}
export const LeftImageWrapper = styled.div<LeftImageWrapperProps>`
  background-image: ${(props) =>
    `linear-gradient(rgb(104, 103, 148), rgb(104, 103, 148)), url(${props.backgroundImage})`};
  backcolor: rgba(16, 24, 40, 1);
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: 100% 10%;
  height: 100%;
  width: 50%;
  max-width: 50%;
  padding: 3rem;
  text-align: left;
  font-family: var(--main-font);
  position: relative;
`;
