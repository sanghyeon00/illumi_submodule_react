import React, { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const [selectedMenu, setSelectedMenu] = useState("Data");
  const [selectedPost, setSelectedPost] = useState(null);

  const dataPosts = [
    {
      id: 1,
      title: "(2017) VOL2.1 일루미 신제품 팜플렛",
      writer: "관리자",
      date: "2017-09-13 16:40:46",
      content: "(2017) VOL2.1 일루미 신제품 팜플렛의 내용입니다.",
      fileName: "일루미_VOL2.1_2017_신제품_팜플렛.pdf",
      fileSize: "1.2M",
      downloadCount: 242,
    },
  ];

  const newsPosts = [
    {
      id: 1,
      title: "신제품 출시 소식",
      writer: "관리자",
      date: "2023-11-10 10:00:00",
      content: "신제품 출시 관련 뉴스 내용입니다.",
    },
  ];

  const posts = selectedMenu === "Data" ? dataPosts : newsPosts;

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  return (
    <Container>
      <Sidebar>
        <MenuItem
          active={selectedMenu === "Data"}
          onClick={() => {
            setSelectedMenu("Data");
            setSelectedPost(null);
          }}
        >
          Data
        </MenuItem>
        <MenuItem
          active={selectedMenu === "News"}
          onClick={() => {
            setSelectedMenu("News");
            setSelectedPost(null);
          }}
        >
          News
        </MenuItem>
      </Sidebar>
      <ContentWrapper>
        {selectedPost && selectedMenu === "Data" && (
          <Breadcrumb>
            <div className="highlighted">Data</div>
            <div>Home - 고객센터</div>
          </Breadcrumb>
        )}
        {!selectedPost ? (
          <>
            <TableTitle>{selectedMenu}</TableTitle>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>제목</TableHeader>
                  <TableHeader>작성자</TableHeader>
                  <TableHeader>날짜</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <TableRow key={post.id} onClick={() => handlePostClick(post)}>
                    <TableData>{post.title}</TableData>
                    <TableData>{post.writer}</TableData>
                    <TableData>{post.date}</TableData>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </>
        ) : (
          <DetailWrapper>
            <TextItem>
              <strong>제목:</strong> {selectedPost.title}
            </TextItem>
            <Separator />
            <TextItem>
              <strong>작성자:</strong> {selectedPost.writer}
            </TextItem>
            <Separator />
            <TextItem>
              {selectedMenu === "Data" && (
                <div>
                  <strong>파일:</strong>{" "}
                  <a href={`/${selectedPost.fileName}`} download>
                    {selectedPost.fileName} ({selectedPost.fileSize})
                  </a>
                </div>
              )}
            </TextItem>
            <Separator />
            <ContentSection>
              {selectedPost.content}
            </ContentSection>
            <Separator />
            <BackButton onClick={handleBack}>목록</BackButton>
          </DetailWrapper>
        )}
      </ContentWrapper>
    </Container>
  );
};

// Styled-components 정의
const Container = styled.div`
  display: flex;
  margin-top: 2s0px;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
`;

const Sidebar = styled.div`
  width: 20%;
  border-right: 1px solid #ddd;
  padding: 20px;
  background-color: #fff;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  padding: 10px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#000" : "#666")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  background-color: ${(props) => (props.active ? "#f0f0f0" : "transparent")};
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ContentWrapper = styled.div`
  width: 70vw;
  background-color: #fff;
  padding: 20px;
  margin-left: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
  margin-bottom: 20px;
  font-weight: bold;

  .highlighted {
    font-size: 1.5rem;
    color: #000;
  }
`;

const TableTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #f9f9f9;
`;

const TableData = styled.td`
  padding: 10px;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px; /* Data의 왼쪽 마진만큼 추가 */
`;

const TextItem = styled.div`
  font-size: 1rem;
`;

const Separator = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 1px 0;
`;

const ContentSection = styled.div`
  padding: 10px; /* 내용 박스 안의 여백 */
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  padding-bottom: 100px; /* 내용 박스 안의 여백 */
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #555;
  }
`;

export default Contact;
