import React from "react";
import styled from "styled-components";
import { certifications } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const List = styled.div`
  width: 100%;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px;
`;

const CertTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Meta = styled.p`
  margin: 8px 0;
  color: ${({ theme }) => theme.text_secondary};
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;

const Certificates = () => {
  return (
    <Container id="Certificates">
      <Wrapper>
        <Title>Certificates</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Professional certifications and validation credentials.
        </Desc>
        <List>
          {certifications.map((certificate) => (
            <Card key={certificate.id}>
              <CertTitle>{certificate.title}</CertTitle>
              <Meta>
                {certificate.issuer} | {certificate.date}
              </Meta>
              <Link href={certificate.link} target="_blank" rel="noreferrer">
                Certificate Link
              </Link>
            </Card>
          ))}
        </List>
      </Wrapper>
    </Container>
  );
};

export default Certificates;
