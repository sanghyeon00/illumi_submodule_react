import React from "react";
import styled from "styled-components";

const ProjectPage = () => {
  const post = {
    id: 1,
    title: "(2017) VOL2.1 일루미 신제품 팜플렛",
    writer: "관리자",
    date: "2017-09-13 16:40:46",
    content: "(2017) VOL2.1 일루미 신제품 팜플렛의 내용입니다.",
    image: [ "./imgs/proj1.png",  "./imgs/proj2.png",  "./imgs/proj3.png"],
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>{post.title}</Title>
        <SubInfo>
          <InfoItem>
            <strong>작성자:</strong> {post.writer}
          </InfoItem>
          <InfoItem>
            <strong>날짜:</strong> {post.date}
          </InfoItem>
        </SubInfo>
        <ImagesWrapper>
          {post.image.map((img, index) => (
            <Image key={index} src={img} alt={`Image ${index + 1}`} />
          ))}
        </ImagesWrapper>
        <ContentSection>{post.content}</ContentSection>
      </ContentWrapper>
    </Container>
  );
};

// Styled-components 정의
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  width: 70vw;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  font-size: 1rem;
  color: #666;
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 이미지 중앙 정렬 */
  gap: 30px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 600px;
  height: 600px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const ContentSection = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-size: 1rem;
  line-height: 1.5;
`;

export default ProjectPage;
