import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const ProductPage = () => {
    const IndoorData = [
        { name: "DOWN LIGHT", imageUrl: "./imgs/pro1.png" },
        { name: "SPOT LIGHT", imageUrl: "./imgs/pro2.png" },
        { name: "CEILING LIGHT", imageUrl: "./imgs/pro3.png" },
        { name: "INTERIOR LIGHT", imageUrl: "./imgs/pro4.png" },
    ];
    const OutdoorData = [
        { name: "FLASH LIGHT", imageUrl: "./imgs/pro5.png" },
        { name: "INGROUND LIGHT", imageUrl: "./imgs/pro6.png" },
        { name: "BOLLARD LIGHT", imageUrl: "./imgs/pro7.png" },
        { name: "WALL LIGHT", imageUrl: "./imgs/pro8.png" },
    ];
    const SystemData = [
        { name: "SYSTEM", imageUrl: "./imgs/pro2.png" },
    ];
    const GalleryData = [
        { name: "GALLERY", imageUrl: "./imgs/pro3.png" },
    ];

    const handleSearch = (event) => {
        event.preventDefault();
        // 검색 기능 로직 구현 (필터링이나 API 호출 등)
        console.log("Search triggered!");
    };

    const handleClick = () => {
        // 이동할 링크 설정 (product.url이 이동할 경로)
        window.location.href = "/productlist";
    };


    return (
        <>
        <GlobalStyle />
        <PageContainer>
            <ImageContainer>
                <img src="./imgs/productBack.jpg" alt="Large Box" />
                <TextOverlay>
                    <h1>PRODUCTS</h1>
                    <p style={{fontSize:'20px', color:'#1E1F20', margin:'0'}}>illumi는 최고의 제품 생산 능력을 가지고 맞춤식 개발을 하고 있습니다.</p>
                    <p style={{fontSize:'20px', color:'#1E1F20', margin:'0'}}>illumi is developing customized products with the best production capabilities.</p>
                </TextOverlay>
            </ImageContainer>

            <SearchContainer>
                <form onSubmit={handleSearch} style={{ display: 'flex', width: '100%' }}>
                    <SearchInput type="text" placeholder="Search products..." />
                    <SearchButton type="submit">🔍</SearchButton>
                </form>
            </SearchContainer>


            <div style={{marginTop:'30px'}}>
                <h2 style={{margin:"0",marginRight:"92%", fontSize:'30px'}}>Indoor</h2>
                <ProductGrid>
                    {IndoorData.map((product, index) => (
                        <ProductCard key={index} onClick={handleClick}>
                            <Card>
                                <img src={product.imageUrl} alt={product.name} />
                            </Card>
                            <h4>{product.name}</h4>
                        </ProductCard>
                    ))}
                </ProductGrid>
            </div>

            <div style={{marginTop:'30px'}}>
                <h2 style={{margin:"0",marginRight:"92%", fontSize:'30px'}}>Outdoor</h2>
                <ProductGrid>
                    {OutdoorData.map((product, index) => (
                        <ProductCard key={index}>
                            <Card>
                                <img src={product.imageUrl} alt={product.name} />
                            </Card>
                            <h4>{product.name}</h4>
                        </ProductCard>
                    ))}
                </ProductGrid>
            </div>

            <div style={{marginTop:'30px'}}>
                <h2 style={{margin:"0",marginRight:"92%", fontSize:'30px'}}>System</h2>
                <ProductGrid>
                    {SystemData.map((product, index) => (
                        <ProductCard key={index}>
                            <Card>
                                <img src={product.imageUrl} alt={product.name} />
                            </Card>
                            <h4>{product.name}</h4>
                        </ProductCard>
                    ))}
                </ProductGrid>
            </div>
            
            <div style={{marginTop:'30px'}}>
                <h2 style={{margin:"0",marginRight:"92%", fontSize:'30px'}}>Gallery</h2>
                <ProductGrid>
                    {GalleryData.map((product, index) => (
                        <ProductCard key={index}>
                            <Card>
                                <img src={product.imageUrl} alt={product.name} />
                            </Card>
                            <h4>{product.name}</h4>
                        </ProductCard>
                    ))}
                </ProductGrid>
            </div>
            
        </PageContainer>
        </>
    );
};

// styled-components

const GlobalStyle = createGlobalStyle`
  body {
    background-color:rgb(236, 236, 236); /* 원하는 배경색 설정 */
  }
`;

const PageContainer = styled.div`
    padding: 20px;
    background-color:rgb(240, 240, 240);
    text-align: center;
    width: 1400px; /* 기본값 */
    margin: 0 auto; /* 가로로 중앙 정렬 */
    margin-top: 50px;
    border-radius: 1%;
    margin-bottom: 30px;

    @media (max-width: 1440px) {
        width: 95%;
    }
`;

const ImageContainer = styled.div`
    position: relative;    
    width: 100%;
    height: 500px; /* 원하는 크기로 조정 */
    background-color: #ddd; /* 배경색을 원하는 색상으로 */
    margin-bottom: 20px; /* 아래쪽 마진 */
    border-radius: 70px 0 70px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%; /* 이미지가 부모 div를 벗어나지 않도록 설정 */
        height: 100%; /* 이미지가 부모 div를 벗어나지 않도록 설정 */
        object-fit: cover; /* 이미지 비율 유지하면서 영역에 맞게 크기 조정 */
        border-radius: 70px 0 70px 0;
    }
`;

const TextOverlay = styled.div`
    position: absolute; /* 이미지 위에 텍스트를 겹치게 설정 */
    top: 50%; /* 세로 정렬 */
    left: 50%; /* 가로 정렬 */
    transform: translate(-50%, -50%); /* 가운데 정렬 */
    width: 90%;
    color: black; /* 텍스트 색상 */
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* 텍스트에 그림자 추가 */
    font-size: 36px; /* 글씨 크기 */
    font-weight: bold;
    text-align: center; /* 텍스트 중앙 정렬 */
`;

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding-top: 20px;
`;

const ProductCard = styled.div`
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #A3BCCA; /* 배경색 변경 */
    }

    /* ProductCard가 hover되었을 때 img에도 효과 추가 */
    &:hover img {
        transform: scale(1.2); /* 이미지 확대 */
    }

    img {
        width: 100%;
        border-radius: 5px;
        height: auto;
        transition: transform 0.3s ease; /* 이미지 확대 애니메이션 */
    }
`;

const Card = styled.div`
    overflow: hidden;
    border-radius: 8px;
`;

const SearchContainer = styled.div`
    margin: 30px auto; /* 위아래 여백 */
    margin-right: 74%;
    display: flex;
    justify-content: center; /* 중앙 정렬 */
    align-items: center;
    width: 350px; /* 검색 박스 전체 크기 */
    border: 3px solid #ddd; /* 테두리 */
    border-radius: 3px; /* 둥근 모서리 */
    background-color: #f9f9f9; /* 배경 색상 */
    padding: 5px 10px; /* 내부 여백 */
`;

const SearchInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
    padding: 5px;
    background: none; /* 배경색 제거 */
`;

const SearchButton = styled.button`
    border: none;
    outline: none;
    background-color: #1e1f20; /* 버튼 색상 */
    color: white; /* 텍스트 색상 */
    border-radius: 5px; /* 원형 버튼 */
    width: 60px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 22px;
    padding-bottom: 4px;

    &:hover {
        background-color: #333; /* 호버 시 색상 */
    }
`;


export default ProductPage;
