import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate  } from 'react-router-dom';

const Mainhomepage = () => {

    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path); // /about으로 이동
    };

    const handleClickSlide = (e, sectionId) => {
        e.preventDefault();  // 링크 기본 동작을 막음
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });  // 부드럽게 이동
    };

    const [filter, setFilter] = useState('all'); // 필터 상태 관리

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const projectsIn = [
        { id: 1, title: "Project Title 1", img: "./imgs/illumi_img/prod1.jpg", desc: "Description of the project goes here." },
        { id: 2, title: "Project Title 2", img: "./imgs/illumi_img/prod2.jpg", desc: "Description of the project goes here." },
        { id: 3, title: "Project Title 3", img: "./imgs/illumi_img/prod3.jpg", desc: "Description of the project goes here." },
        { id: 4, title: "Project Title 4", img: "./imgs/illumi_img/prod4.jpg", desc: "Description of the project goes here." }
    ];
    const projectsOut = [
        { id: 1, title: "Project Title 1", img: "./imgs/illumi_img/prod5.jpg", desc: "Description of the project goes here." },
        { id: 2, title: "Project Title 2", img: "./imgs/illumi_img/prod6.jpg", desc: "Description of the project goes here." },
        { id: 3, title: "Project Title 3", img: "./imgs/illumi_img/prod7.jpg", desc: "Description of the project goes here." },
        { id: 4, title: "Project Title 4", img: "./imgs/illumi_img/prod8.jpg", desc: "Description of the project goes here." }
    ];

    const handleClickOutdoor = () => {
        navigate("/projectmain", { state: { selected: "Outdoor" } });
    };
    const handleClickIndoor = () => {
        navigate("/projectmain", { state: { selected: "Indoor" } });
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission (e.g., send to API)
        console.log('Form submitted:', formData);
      };

    return (
      <PageContainer>
        <Navbar>
            <ul>
                <li><NavLink href="#home" onClick={(e) => handleClickSlide(e, 'home')}>• HOME</NavLink></li>
                <li><NavLink href="#company" onClick={(e) => handleClickSlide(e, 'company')}>• COMPANY</NavLink></li>
                <li><NavLink href="#product" onClick={(e) => handleClickSlide(e, 'product')}>• PRODUCT</NavLink></li>
                <li><NavLink href="#project" onClick={(e) => handleClickSlide(e, 'project')}>• PROJECT</NavLink></li>
                <li><NavLink href="#contactus" onClick={(e) => handleClickSlide(e, 'contactus')}>• CONTACT US</NavLink></li>
            </ul>
        </Navbar>


        <HomeSection id="home">
            <BackgroundDiv />
            <TextOverlay>
                <h1 style={{fontSize:"4vw", margin:"0"}}>illumi</h1>
                <h1 style={{fontSize:"4vw", margin:"0  0 20px 0"}}>TOTAL LIGHTING SOLUTIONS</h1>
                <Separator/>
                <h3 style={{fontSize:"1.5vw", margin:"20px 0"}}>HOTEL  /  COMMERCIAL  /  RESIDENCE  /  HOSPITAL</h3>
            </TextOverlay>
        </HomeSection>
        


        <CompanySection id="company">
            <TextOverlayCom>
                <h1 style={{fontSize:"2.1vw", margin:"10px 0", color:"gray"}}>COMPANY</h1>
                <h3 style={{fontWeight:"100", color:"rgb(126, 122, 122)", fontSize:"17px"}}>여기에는 간단한 설명을 적으면 될 것 같습니다.</h3>
                <Separator2/>
            </TextOverlayCom>


            <FeatureBox>
                <SingleFeatureWrapper>
                    <SingleFeatureIcon>
                        <FeatureIconImage src="./imgs/illumi_img/company1.jpg" alt="about" onClick={() => handleClick('/about')}/>
                    </SingleFeatureIcon>
                    <FeatureTitle onClick={() => handleClick('/about')}>About us</FeatureTitle>
                    <Separator3/>
                    <Grayp>주식회사 일루미는 <br />Total lighting Solutions 회사입니다.</Grayp>
                </SingleFeatureWrapper>

                <SingleFeatureWrapper>
                    <SingleFeatureIcon>
                        <FeatureIconImage src="./imgs/illumi_img/company2.jpg" alt="organization" onClick={() => handleClick('/organization')}/>
                    </SingleFeatureIcon>
                    <FeatureTitle onClick={() => handleClick('/organization')}>Organization</FeatureTitle>
                    <Separator3 />
                    <Grayp>주식회사 일루미는 최고의 품질과 최상의 <br/>서비스, 완벽한 기술력을 자랑합니다.</Grayp>
                </SingleFeatureWrapper>

                <SingleFeatureWrapper>
                    <SingleFeatureIcon>
                        <FeatureIconImage src="./imgs/illumi_img/company3.jpg" alt="result" onClick={() => handleClick('/result')}/>
                    </SingleFeatureIcon>
                    <FeatureTitle onClick={() => handleClick('/result')}>Result</FeatureTitle>
                    <Separator3 />
                    <Grayp>롯데 김해관광유통단지 조명기구 납품/일신테크 롯데백화점 창원점 론진 조명기구 납품 / 티넬 <br/>
                    제주 해비치 호텔 조명기구 납품 / 해비치호텔 ...</Grayp>
                </SingleFeatureWrapper>

                <SingleFeatureWrapper>
                    <SingleFeatureIcon>
                        <FeatureIconImage src="./imgs/illumi_img/company4.jpg" alt="location" onClick={() => handleClick('/location')}/>
                    </SingleFeatureIcon>
                    <FeatureTitle onClick={() => handleClick('/location')}>Location</FeatureTitle>
                    <Separator3 />
                    <Grayp>서울시 성동구 성수일로 8길53 <br/>(성수동2가) 캐슬프라자 702호</Grayp>
                </SingleFeatureWrapper>
            </FeatureBox>

        </CompanySection>

        <PageHr/>



        <ProductSection id="product">
            <TextOverlayCom>
                <h1 style={{fontSize:"2.1vw", margin:"10px 0", color:"gray"}}>PRODUCT</h1>
                <h3 style={{fontWeight:"100", color:"rgb(126, 122, 122)", fontSize:"17px"}}>여기에는 제품설명에 대한 간단한 설명을 적으면 될 것 같습니다.</h3>
                <Separator2/>
            </TextOverlayCom>

            <FilterButtons>
                <FilterButton
                className={filter === 'all' ? 'active' : ''}
                onClick={() => handleFilterChange('all')}
                >
                ALL
                </FilterButton>

                <strong>|</strong>

                <FilterButton
                className={filter === 'web' ? 'active' : ''}
                onClick={() => handleFilterChange('web')}
                >
                Down light
                </FilterButton>
                
                <strong>|</strong>

                <FilterButton
                className={filter === 'design' ? 'active' : ''}
                onClick={() => handleFilterChange('design')}
                >
                Multiple light
                </FilterButton>

                <strong>|</strong>

                <FilterButton
                className={filter === 'flyers' ? 'active' : ''}
                onClick={() => handleFilterChange('flyers')}
                >
                Spot light
                </FilterButton>

                <strong>|</strong>

                <FilterButton
                className={filter === 'bcards' ? 'active' : ''}
                onClick={() => handleFilterChange('bcards')}
                >
                Ceneral light
                </FilterButton>

                <strong>|</strong>

                <FilterButton
                className={filter === 'photo' ? 'active' : ''}
                onClick={() => handleFilterChange('photo')}
                >
                PHOTOGRAPHY
                </FilterButton>
            </FilterButtons>

            <PortfolioWork>
                <SinglePortfolio show={filter === 'all' || filter === 'web' || filter === 'design'} className="tile scale-anm web grid-item-width2 video">
                <PortfolioImage src="./imgs/illumi_img/pro1.png" alt="Product 1" />
                <PortfolioLink href="./imgs/illumi_img/pro1.png" className="portfolio-img">
                    <GridItemOverlay>
                    <Separator4 />
                    <PortfolioTitle>Product name</PortfolioTitle>
                    <PortfolioText>Product number / types</PortfolioText>
                    </GridItemOverlay>
                </PortfolioLink>
                </SinglePortfolio>

                <SinglePortfolio show={filter === 'all' || filter === 'photo' || filter === 'flyers'} className="tile scale-anm bcards photo">
                <PortfolioImage src="./imgs/illumi_img/pro2.png" alt="Product 2" />
                <PortfolioLink href="./imgs/illumi_img/pro2.png" className="portfolio-img">
                    <GridItemOverlay>
                    <Separator4 />
                    <PortfolioTitle>Product name</PortfolioTitle>
                    <PortfolioText>Product number / types</PortfolioText>
                    </GridItemOverlay>
                </PortfolioLink>
                </SinglePortfolio>

                <SinglePortfolio show={filter === 'all' || filter === 'design' || filter === 'web'} className="tile scale-anm bcards design">
                <PortfolioImage src="./imgs/illumi_img/pro3.png" alt="Product 5" />
                <PortfolioLink href="./imgs/illumi_img/pro3.png" className="portfolio-img">
                    <GridItemOverlay>
                    <Separator4 />
                    <PortfolioTitle>Product name</PortfolioTitle>
                    <PortfolioText>Product number / types</PortfolioText>
                    </GridItemOverlay>
                </PortfolioLink>
                </SinglePortfolio>

                <SinglePortfolio show={filter === 'all' || filter === 'design' || filter === 'bcards'} className="tile scale-anm bcards design">
                <PortfolioImage src="./imgs/illumi_img/pro4.png" alt="Product 5" />
                <PortfolioLink href="./imgs/illumi_img/pro4.png" className="portfolio-img">
                    <GridItemOverlay>
                    <Separator4 />
                    <PortfolioTitle>Product name</PortfolioTitle>
                    <PortfolioText>Product number / types</PortfolioText>
                    </GridItemOverlay>
                </PortfolioLink>
                </SinglePortfolio>

                <SinglePortfolio show={filter === 'all' || filter === 'design' || filter === 'bcards'} className="tile scale-anm bcards design">
                <PortfolioImage src="./imgs/illumi_img/pro5.png" alt="Product 5" />
                <PortfolioLink href="./imgs/illumi_img/pro5.png" className="portfolio-img">
                    <GridItemOverlay>
                    <Separator4 />
                    <PortfolioTitle>Product name</PortfolioTitle>
                    <PortfolioText>Product number / types</PortfolioText>
                    </GridItemOverlay>
                </PortfolioLink>
                </SinglePortfolio>

                <SinglePortfolio show={filter === 'all' || filter === 'design' || filter === 'bcards'} className="tile scale-anm bcards design">
                <PortfolioImage src="./imgs/illumi_img/pro6.png" alt="Product 5" />
                <PortfolioLink href="./imgs/illumi_img/pro6.png" className="portfolio-img">
                    <GridItemOverlay>
                    <Separator4 />
                    <PortfolioTitle>Product name</PortfolioTitle>
                    <PortfolioText>Product number / types</PortfolioText>
                    </GridItemOverlay>
                </PortfolioLink>
                </SinglePortfolio>

                <SinglePortfolio show={filter === 'all' || filter === 'design'} className="tile scale-anm bcards design">
                <PortfolioImage src="./imgs/illumi_img/pro7.png" alt="Product 5" />
                <PortfolioLink href="./imgs/illumi_img/pro7.png" className="portfolio-img">
                    <GridItemOverlay>
                    <Separator4 />
                    <PortfolioTitle>Product name</PortfolioTitle>
                    <PortfolioText>Product number / types</PortfolioText>
                    </GridItemOverlay>
                </PortfolioLink>
                </SinglePortfolio>

                <SinglePortfolio show={filter === 'all' || filter === 'design'} className="tile scale-anm bcards design">
                <PortfolioImage src="./imgs/illumi_img/pro8.png" alt="Product 5" />
                <PortfolioLink href="./imgs/illumi_img/pro8.png" className="portfolio-img">
                    <GridItemOverlay>
                    <Separator4 />
                    <PortfolioTitle>Product name</PortfolioTitle>
                    <PortfolioText>Product number / types</PortfolioText>
                    </GridItemOverlay>
                </PortfolioLink>
                </SinglePortfolio>

                    
            </PortfolioWork>
        </ProductSection>

        <PageHr/>



        <ProjectSection id="project">
            <TextOverlayCom>
                <h1 style={{fontSize:"2.1vw", margin:"10px 0", color:"gray"}}>PROJECT</h1>
                <h3 style={{fontWeight:"100", color:"rgb(126, 122, 122)", fontSize:"17px"}}>여기에는 프로젝트에 대한 간단한 설명을 적으면 될 것 같습니다.</h3>
                <Separator2/>
            </TextOverlayCom>

            <h2 style={{fontSize:"1.5vw", margin:"30px auto 10px auto"}}>Indoor Projects</h2>
            <hr style={{width:"200px", height:"2px", background:"gray"}}/>

            <ProjectContainer>
                {projectsIn.map((project) => (
                    <ProjectBox key={project.id}>
                        <ProjectImage src={project.img} alt={project.title} />
                        <ProjectContent>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectDescription>{project.desc}</ProjectDescription>
                        </ProjectContent>
                    </ProjectBox>
                ))}
            </ProjectContainer>

            <PjBtnContainer>
                <ProjectViewButton onClick={handleClickIndoor}>VIEW MORE</ProjectViewButton>
            </PjBtnContainer>

            
            <h2 style={{fontSize:"1.5vw", margin:"30px auto 10px auto"}}>Outdoor Projects</h2>
            <hr style={{width:"200px", height:"2px", background:"gray"}}/>

            <ProjectContainer>
                {projectsOut.map((project) => (
                    <ProjectBox key={project.id}>
                        <ProjectImage src={project.img} alt={project.title} />
                        <ProjectContent>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectDescription>{project.desc}</ProjectDescription>
                        </ProjectContent>
                    </ProjectBox>
                ))}
            </ProjectContainer>

            <PjBtnContainer>
                <ProjectViewButton onClick={handleClickOutdoor}>VIEW MORE</ProjectViewButton>
            </PjBtnContainer>

        </ProjectSection>

        <PageHr/>




        <ContactusSection id="contactus">
            <TextOverlayCom>
                <h1 style={{fontSize:"2.1vw", margin:"10px 0", color:"gray"}}>CONTACT US</h1>
                <h3 style={{fontWeight:"100", color:"rgb(126, 122, 122)", fontSize:"17px"}}>여기에는 문의사항에 대한 간단한 설명을 적으면 될 것 같습니다.</h3>
                <Separator2/>
            </TextOverlayCom>

            <ContactBoxContainer>
                {/* Left Box (Contact Info) */}
                <ContactCard>
                    <CardTitle>Consultation information</CardTitle>

                    <CardContent>
                        <Contactp>Consultation hours :</Contactp> <Contacts>9:00 - 17:30</Contacts>
                    </CardContent>
                    
                    <CardContent>
                        <Contactp>TEL & FAX :</Contactp> <Contacts>+ 010-1234-5678 <br/> + 02.707.1731</Contacts>
                    </CardContent>

                    <CardContent>
                        <Contactp>EMAIL :</Contactp> <Contacts>illumimail@email.com</Contacts>
                    </CardContent>
                </ContactCard>

                {/* Right Box (Contact Form) */}
                <ContactCard>
                    <CardTitle>Contact us</CardTitle>

                    <FormCard onSubmit={handleSubmit}>
                        <InputField
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                        <InputField
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        <TextAreaField
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                        />

                        <SubmitButton type="submit">Submit</SubmitButton>
                    </FormCard>
                </ContactCard>
            </ContactBoxContainer>
        </ContactusSection>

      </PageContainer>
    );
};

// 스타일 정의

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin : 0;
    padding : 0;
`;

const Navbar = styled.nav`
    position: fixed;
    right: 20px;
    top: 60%;
    transform: translateY(-50%);
    z-index: 100;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`;

const NavLink = styled.a`
    text-decoration: none;
    color: rgb(150, 150, 150);
    text-align: center;
    padding: 0;
    transition: color 0.3s, border-bottom 0.3s;

    &:hover,
    &:focus {
        color: #e74c3c;
        border-bottom: 1px solid #e74c3c;
    }

    &.active {
        color: #e74c3c;
        padding-bottom: 5px;
        border-bottom: 1px solid #e74c3c;
    }
`;

const PageHr = styled.hr`
    height: 1px;
    width: 100%;
    background-color: gray;
`;

// 배경 애니메이션 효과
const bgAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.09);
    }
    100% {
        transform: scale(1);
    }
`;

// HomeSection
const HomeSection = styled.section`
    height: 1100px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* 배경이 크기가 커져도 HomeSection을 벗어나지 않도록 설정 */

    /* 하단 부분 삼각형 형태로 자르기 */
    clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 50% 102%, 0% 85%);
`;

// 배경을 위한 div
const BackgroundDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('./imgs/illumi_img/bg_img2.png'); /* 배경 이미지 */
    background-size: cover;
    background-position: center;
    animation: ${bgAnimation} 8s infinite ease-in-out;
    z-index: 0; /* 배경이 텍스트 뒤에 위치 */
    
    /* 배경 밝기 조절 */
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(243, 238, 238, 0.13); /* 흰색 반투명 오버레이 (0.2~0.4 조절 가능) */
        z-index: 1; /* 배경 위에 적용 */
    }
`;

// 텍스트를 배경과 독립적으로 유지
const TextOverlay = styled.div`
    position: relative;
    display: flex; /* Flexbox 사용 */
    flex-direction: column;
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: center; /* 수평 중앙 정렬 */
    font-size: 2rem;
    font-weight: bold;
    color: white;
    background: rgba(0, 0, 0, 0);
    border-radius: 5px;
    z-index: 1; /* 배경보다 위에 위치 */
    text-align: center; /* 내부 텍스트 정렬 */
    width: fit-content; /* 내용에 맞게 너비 조정 */
    height: fit-content; /* 내용에 맞게 높이 조정 */
    margin-bottom: 200px;
`;

const Separator = styled.div`
  width: 12px;
  height: 12px;
  margin: 20px auto;
  background: #e74c3c;
  position: relative;
  display: inline-block;
  border-radius: 50%;

  &::after,
  &::before {
    position: absolute;
    bottom: 5px;
    height: 2px;
    width: 340px;
    background: #e8e6e6;
    content: "";
    display: inline-block;
  }

  &::after {
    left: 5%;
    margin-left: 20px;
  }

  &::before {
    right: 5%;
    margin-right: 20px;
  }
`;

const Separator2 = styled.div`
  width: 12px;
  height: 12px;
  margin: 20px auto;
  background: #e74c3c;
  position: relative;
  display: inline-block;
  border-radius: 50%;

  &::after,
  &::before {
    position: absolute;
    bottom: 5px;
    height: 2px;
    width: 340px;
    background:rgb(24, 24, 24);
    content: "";
    display: inline-block;
  }

  &::after {
    left: 5%;
    margin-left: 20px;
  }

  &::before {
    right: 5%;
    margin-right: 20px;
  }
`;


const CompanySection = styled.section`
    height: 1000px;
    margin-top: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
`;

const TextOverlayCom = styled.div`
    position: relative;
    display: flex; /* Flexbox 사용 */
    flex-direction: column;
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: center; /* 수평 중앙 정렬 */
    background: rgba(0, 0, 0, 0);
    border-radius: 5px;
    
    text-align: center; /* 내부 텍스트 정렬 */
    width: fit-content; /* 내용에 맞게 너비 조정 */
    height: fit-content; /* 내용에 맞게 높이 조정 */
    margin-top:5%;
`;

const FeatureBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin: 20px auto 10px auto;
    width: 80%;
    height: 60%;
`;

const SingleFeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  // 수직 정렬을 위해 center 설정
  justify-content: flex-start;  // 수평 정렬은 하지 않도록 flex-start로 설정
  margin: 10px auto;
  width: 18%;
  height: auto;
`;

const SingleFeatureIcon = styled.div`
  width: 90%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(0,0,0,0);
  margin: 20px auto;
  border-radius:20px;
  transition: all 0.6s;

  &:hover {
    border-color: #e74c3c;
    transform: rotate(45deg);
  }
`;

const FeatureIconImage = styled.img`
  width: 95%;
  height: 95%;
  border-radius: 20px;
  transition: all 0.6s;
  cursor: pointer;

  ${SingleFeatureIcon}:hover & {
    transform: rotate(-45deg);
  }
`;

const FeatureTitle = styled.h4`
  font-size:1.3vw;
  color:rgb(105, 102, 102);
  margin: 5px  auto 15px auto;
  cursor: pointer;
`;

const Separator3 = styled.div`
  height: 3px;
  width:30%;
  background-color: #ddd;
  margin: 5px 0 10px 0;
`;

const Grayp = styled.p`
    font-weight:100;
    color: rgb(126, 122, 122);
    font-size:15px;
    text-align: center;
`;




const ProductSection = styled.section`
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
`;

const PortfolioWork = styled.div`
  margin: 10rem 0 1rem 0;
  column-count: 4;
  column-gap: 0rem;
  column-width: 33.33%;
  width: 100%;
  
  /* 크로스 브라우저 호환성을 위해 webkit 및 moz 추가 */
  -webkit-column-count: 4;
  -moz-column-count: 4;
  -webkit-column-gap: 0rem;
  -moz-column-gap: 0rem;
  -webkit-column-width: 33.33333333333333%;
  -moz-column-width: 33.33333333333333%;
`;

const SinglePortfolio = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin: 2px 4px;
  display: ${(props) => (props.show ? 'inline-block' : 'none')}; /* 조건부 렌더링 */
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease;
  transform: scale(1);

  ${SinglePortfolio}:hover & {
    transform: scale(1.15);
  }
`;

const GridItemOverlay = styled.div`
  position: absolute;
  left: 10%;
  top: 10%;
  width: 60%;
  height: 30%;
  background: rgba(100, 93, 92, 0.6);
  color: #fff;
  padding: 40% 10% 10% 10%;
  opacity: 0;
  transition: 0.6s;
  
  z-index: 99;

  ${SinglePortfolio}:hover & {
    opacity: 1;
  }
`;

const Separator4 = styled.div`
  height: 3px;
  width: 50px;
  margin: 20px 0px 10px 0;
  background: #f38181;
`;

const PortfolioLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const PortfolioTitle = styled.h3`
  margin: 0;
  font-size: 1.8vw;
`;

const PortfolioText = styled.p`
  margin: 10px 0 0 0;
  font-size: 0.9vw;
`;

const FilterButtons = styled.div`
  margin-top: 4rem;
`;

const FilterButton = styled.button`
  font-weight: bold;
  margin: 0 5px;
  cursor: pointer;
  font-size: 0.9vw;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  &.active {
    color: #e74c3c;
  }
`;



const ProjectSection = styled.section`
  position: relative; /* 부모 요소 상대 위치 */
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
  
  /* 기본 배경 설정 */
  &::after {
    content: "";
    position: absolute;
    top: 6%;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("./imgs/illumi_img/bg_img1.jpg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.15; /* 배경만 투명하게 */
    z-index: -1; /* 내부 콘텐츠보다 뒤에 배치 */
  }
`;

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 50px auto;
`;

const ProjectBox = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 20%;
  overflow: hidden;
  transition: transform 0.3s;
  padding-top: 15px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.img`
  width: 90%;
  height: auto;
  display: block;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const PjBtnContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom:4%;
`;

const ProjectViewButton = styled.button`
  border: 3px solid gray;
  background-color: transparent;
  color: gray;
  padding: 10px 20px;
  font-size: 23px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: gray;
    color: white;
  }
`;




const ContactusSection = styled.section`
    height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
  background-color:#f4f5f9;
`;

const ContactBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin-top: 30px;
`;

const ContactCard = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8%;
  width: 33%;
  border-radius: 8px;
`;

const CardTitle = styled.h2`
  font-size: 2.0rem;
  margin-bottom: 40px;
  color:rgb(104, 103, 103);
`;

const CardContent = styled.div`
  margin-bottom: 10px;
  font-size: 1rem;
  color: #333;
`;

const FormCard = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextAreaField = styled.textarea`
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  height: 150px;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color:rgb(179, 183, 179);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color:rgb(106, 123, 107);
  }
`;

const Contactp = styled.p`
    color:rgb(96, 93, 93);
    font-size: 1.5vw;
    margin:20px 0 15px 0 ;
    
`;

const Contacts = styled.p`
    color:rgb(185, 182, 182);
    font-size: 1.2vw;
    margin:0 0 50px 0;
    
`;

export default Mainhomepage;
