import styled from "styled-components";
import InputForm from "../component/InputForm";

export default function Home() {
  return (
    <>
      <Container>
        <InputForm />
      </Container>
    </>
  );
}
const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  background-color: #ebeef2;
`;
