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
            <About_elemnt><h2>About us</h2></About_elemnt>
            <About_elemnt><img src="./about_image/aboutus_image.jpg" style={{borderRadius:'40px 0 40px 0'}}/></About_elemnt>
            <br />
            <br />
            <About_inbox>
                <Inbox_element>ILLUMI<br /><span style = {{ fontSize: '15px', color:"gray" }}>Total Lighting</span><br /> <span style = {{ fontSize: '15px', color:"gray"  }}>Solutions</span></Inbox_element>
                <Inbox_element>주식회사 일루미는 Total lighting Solutions 회사입니다.</Inbox_element>
            </About_inbox>
            <br/>
            <About_elemnt>	
            인테리어디자이너, 조명디자이너들의 요구에 맞추어 조명기구 제안, <br/>

            조도 시뮬레이션, 조명기구 제조 및 납품까지 제공함으로서 공간이 요구하는 빛을 가장 잘 
            이해하고 제안하여 실현시키는 작업을 하는 조명전문회사입니다. <br/> <br/>

            

            실내 조명(Indoor Lighting) 과 경관조명(Outdoor Lighting)을 병행함에 있어 불필요한 빛 공해는 
            배제, 공간의 용도에 맞는 조명기구 배치와 조명기구 형태, 램프의 색온도를 고려한 최적의 조명설계와 
            이에 맞는 조명기구 개발로  효율적인 공간 활용을 돕습니다.<br/><br/>
            대표이사의 20년간의 풍부한 조명 실무 경험과 국내외를 아우르는 다양한 정보수집력을 
            바탕으로 친환경적 조명공간에 발 앞서있는 주식회사 일루미는 빛의 선진화를 위해 나아가겠습니다.</About_elemnt>
            <br/>
            <Sign>
                <Sign_element>(주)일루미 대표이사</Sign_element>
                <Sign_element><img src="./about_image/sign.jpg" /></Sign_element>
            </Sign>
            <CareerContainer>
            {careerData.map((item, index) => (
                <CareerItem key={index}>
                <Year>[{item.year}]</Year>
                <EventList>
                    {item.events.map((event, i) => (
                    <Event key={i}>{event}</Event>
                    ))}
                </EventList>
                </CareerItem>
            ))}
            </CareerContainer>
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
  
