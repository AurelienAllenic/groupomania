import styled from "styled-components";
import img from "../../assets/create.jpg";
import colors from "./colors";

export const MainImageCreate = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
`;
export const FormStyle = styled.form`
  position: absolute;
  left: 30%;
  top: 25%;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
`;
export const InputStyle = styled.input`
  margin: 20px;
  width: 20%;
  font-size: 30px;
  position: relative;
  left: 33%;
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  border-radius: 10px 10px 10px 10px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 1rem;
  &::placeholder {
    color: black;
    opacity: 0.5;
  }
`;
export const Textarea = styled.textarea`
  font-size: 25px;
  width: 95%;
  resize: none;
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  border-radius: 10px 10px 10px 10px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 1rem;
  &::placeholder {
    color: black;
    opacity: 0.5;
  }
`;

export const ValidateStyle = styled.button`
  margin-top: 40px;
  width: 5%;
  height: 12%;
  position: relative;
  left: 43%;
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  border-radius: 10px 10px 10px 10px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
