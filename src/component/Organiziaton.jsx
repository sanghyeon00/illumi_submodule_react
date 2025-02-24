import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Aboutus = ({ product }) => {
    const careerData = [
        {
          year: "2022",
          events: ["사옥이전 (성동구 성수일로8길53(성수동2가) 캐슬프라자 702호)"],
        },
        {
          year: "2019",
          events: ["사옥이전 (성동구 연무장5길 9-16 블루스톤타워 403호)"],
        },
        {
          year: "2015",
          events: ["KC인증 갱신", "공장 이전 (경기도 파주시 상지석동 554-124번지)"],
        },
        {
          year: "2014",
          events: [
            "한국 산업 기술진흥협회 인증 기업 부설연구소 설립",
            "디자인 특허 출원 (조명 브라켓)",
            "KC인증 갱신",
            "디자인 등록 출원 (이동식 레일용 조명등)",
          ],
        },
      ];
    return (
      <PageContainer>
        <SectionAbout>
          <Company>
            <Com_list style={{ color : 'gray', fontSize:'25px', marginBottom:'10px'}}>Company</Com_list>
            <Com_list style={{ fontSize: '25px' , fontSize:'30px', fontWeight:'bold',marginBottom:'20px' }}>회사소개</Com_list>
          </Company>
          
          <AboutMenu>
            <StyledLink to="/about">About us</StyledLink>
          </AboutMenu>
          <AboutMenu>
            <StyledLink to="/organization">Organization</StyledLink>
          </AboutMenu>
          <AboutMenu>
            <StyledLink to="/result">Result</StyledLink>
          </AboutMenu>
          <AboutMenu>
            <StyledLink to="/location">Location</StyledLink>
          </AboutMenu>
        </SectionAbout>
        <About>
            <About_elemnt><h2>Organization</h2></About_elemnt>
            <About_elemnt><img src="./about_image/Organ_image.jpg" style={{borderRadius:'40px 0 40px 0'}}/></About_elemnt>
            <br />
            <br />
            <About_inbox>
                <Inbox_element>ILLUMI<br /><span style = {{ fontSize: '15px', color:"gray" }}>Total Lighting</span><br /> <span style = {{ fontSize: '15px', color:"gray"  }}>Solutions</span></Inbox_element>
                <Inbox_element>주식회사 일루미는 최고의 품질과 최상의 서비스,<br/> 완벽한 기술력을 자랑합니다.</Inbox_element>
            </About_inbox>
            <br/>
            <About_elemnt>
            <img src="./about_image/Organ_image2.jpg" />
            </About_elemnt>
        </About>
      </PageContainer>
    );
  };
  
  // 스타일 정의
  const CareerContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

const CareerItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const Year = styled.div`
  width: 15%;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  padding-right: 20px;
`;

const EventList = styled.ul`
  width: 85%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Event = styled.li`
  font-size: 16px;
  color: #555;
  line-height: 1.8;
`;
  const Sign_element = styled.div`
  `
  const Sign = styled.div`
    display: flex;
    flex-direction: row;
    justify-content : flex-end;
  `
  const Inbox_element = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  padding-right :20px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  `
  const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%; /* 전체 페이지의 80% */
    margin: 0 auto; /* 페이지 중앙 정렬 */
    border-radius: 10px; /* 둥근 모서리 */
    padding: 20px;
    margin-top:50px;
  `;
  
  const SectionAbout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px; /* 메뉴 간 간격 */
    padding-right: 20px; /* 기본 패딩 제거 */
    margin: 0; /* 기본 마진 제거 */
    list-style: none; /* 기본 리스트 스타일 제거 */
    border-right: 4px solid rgb(129, 129, 129);;
    margin-right:100px;
  `;
  
  const AboutMenu = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #333;
    padding: 10px 15px;
    cursor: pointer;
    border: 2px solid #ddd; /* 메뉴 아이템 경계선 */
    margin-bottom: 5px;
    border-radius: 18px 0 0 0; /* 둥근 모서리 */
    text-align: center;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  
    &:hover {
      background-color: #eaeaea; /* 마우스 오버 시 배경 색상 */
      transform: scale(1.05); /* 확대 효과 */
    }
  `;

  const Company = styled.div`
        display: flex;
        flex-direction: column;
  `
  const About_inbox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content : flex-start;
  `
  const About = styled.div`
    display: flex;
    flex-direction: column;
    justify-content : flex-start;
    gap: 10px; /* 메뉴 간 간격 */
  `
  const About_elemnt = styled.div`
        font-size: 16px;
        font-weight: 500;
        color: #333;
        cursor: pointer;
        background-color: #fff;
        transition: all 0.3s ease-in-out;
  `

  const Com_list = styled.div`
        font-size: 16px;
        font-weight: 500;
        color: #333;
        cursor: pointer;
        text-align: center;
        background-color: #fff;
        transition: all 0.3s ease-in-out;
`

  const StyledLink = styled(Link)`
    text-decoration: none;  /* Remove underline */
    color: black;  /* Set text color to black */
  `;
  export default Aboutus;
  
