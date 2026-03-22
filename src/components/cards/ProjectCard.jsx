import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  max-width: 520px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
`;

const Date = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.p`
  margin: 0;
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.6;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.text_primary + 60};
  border-radius: 12px;
  padding: 6px 10px;
`;

const RepoButton = styled.a`
  align-self: flex-start;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-weight: 600;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Title>{project.title}</Title>
      <Date>{project.date}</Date>
      <Description>{project.description}</Description>
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={`${project.id}-tag-${index}`}>{tag}</Tag>
        ))}
      </Tags>
      <RepoButton href={project.github} target="_blank" rel="noreferrer">
        Repository Link
      </RepoButton>
    </Card>
  );
};

export default ProjectCard;
