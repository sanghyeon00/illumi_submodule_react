import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Aboutus = ({ product }) => {
    const careerData = [
        {
          "year": "2024",
          "events": [
            "롯데 김해관광유통단지 조명기구 납품 / 일신테크",
            "롯데백화점 창원점 룬진 조명기구 납품 / 티넬",
            "제주 해비치 호텔 조명기구 납품 / 해비치호텔",
            "논현동 아스트 현장 조명기구 납품 / 가감디자인그룹",
            "동탄 C-2BL 주상복합 조명기구 납품 / 종원전기",
            "현대백화점 중동점 룬진 조명기구 납품 / 티넬",
            "롯데백화점 대전점 룬진 조명기구 납품 / 티넬",
            "신라센세이션 제주점 룬진 조명기구 납품 / 티넬",
            "롯데백화점 소공동 7층 조명기구 납품 / 알프스21",
            "마곡마이스 CP2 조명기구 납품 / 정광조명산업",
            "기흥 SDR 조명기구 납품 / (주)루미테치",
            "영종도 파라다이스 조명기구 납품 / 파라다이스 세가사미",
            "샤넬 코스메틱 롯데 수원점 조명기구 납품 / 스튜디오마음"
          ]
        },
        {
          "year": "2023",
          "events": [
            "거여동 지역주택조합 홍보관 납품 / 제이에스 디자인",
            "검단역 금강 펜테리움 디시글로 납품 / 알토",
            "수원 스타필드 시티마켓 납품 / 루미테치",
            "KB 골드라이프케어 노인복지택 설계 및 납품 / J&DESIGN",
            "투썸플레이스 고대 참살이길점 납품 / 투썸플레이스",
            "SK 대덕연구단지 K5동 제후생동 납품 / 글로우원",
            "사랑과 은혜 교회 설계 및 납품 / 가감디자인",
            "신세계 장충동 교육연구시설 납품 / 황덕기술단",
            "춘천 레고랜드 야간 개장 경관조명 연출 제안 및 공사 / 현대지비에프엠에스(주)",
            "파인힐스 CC 납품 / 평화프라자",
            "부산 이진베이시티 호텔 납품 / (주)에코라이트",
            "롯데 소공동 면세점 14층 납품 / (주)케이앤디",
            "자라 코엑스 하남점 납품 / (주)에이앤피",
            "청운동 주택 납품 / (주)프레임 종합건설",
            "아디에르 홍대스토어 납품 / (주)아더에러"
          ]
        }
      ]
      
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
            <About_elemnt><h2>Result</h2></About_elemnt>
            <CareerContainer>
            {careerData.map((item, index) => (
                <CareerItem key={index}>
                <Year>{item.year}</Year>
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
  
