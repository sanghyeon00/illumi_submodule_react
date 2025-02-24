import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "DS-6401.1", power: "12W", image: "./imgs/pro1.png", tags: ["New", "Hot"] },
  { id: 2, name: "DS-6401.2", power: "24W", image: "./imgs/pro2.png", tags: ["New", "Hot"] },
  { id: 3, name: "DS-6402.1", power: "6W", image: "./imgs/pro3.png", tags: ["New", "Hot"] },
  { id: 4, name: "DS-6402.2", power: "12W", image: "./imgs/pro4.png", tags: ["New", "Hot"] },
  { id: 5, name: "DS-6402.3", power: "18W", image: "./imgs/pro4.png", tags: ["New", "Hot"] },
  { id: 6, name: "DS-6403.1", power: "15W", image: "./imgs/pro3.png", tags: ["New", "Hot"] },
  { id: 7, name: "DS-6403.2", power: "20W", image: "./imgs/pro2.png", tags: ["New", "Hot"] },
  { id: 8, name: "DS-6403.3", power: "10W", image: "./imgs/pro1.png", tags: ["New", "Hot"] },
  { id: 9, name: "DS-6401.1", power: "12W", image: "./imgs/pro1.png", tags: ["New", "Hot"] },
  { id: 10, name: "DS-6401.2", power: "24W", image: "./imgs/pro2.png", tags: ["New", "Hot"] },
  { id: 11, name: "DS-6402.1", power: "6W", image: "./imgs/pro3.png", tags: ["New", "Hot"] },
  { id: 12, name: "DS-6402.2", power: "12W", image: "./imgs/pro4.png", tags: ["New", "Hot"] },
  { id: 13, name: "DS-6402.3", power: "18W", image: "./imgs/pro4.png", tags: ["New", "Hot"] },
  { id: 14, name: "DS-6403.1", power: "15W", image: "./imgs/pro3.png", tags: ["New", "Hot"] },
  { id: 15, name: "DS-6403.2", power: "20W", image: "./imgs/pro2.png", tags: ["New", "Hot"] },
  { id: 16, name: "DS-6403.3", power: "10W", image: "./imgs/pro1.png", tags: ["New", "Hot"] },
  { id: 17, name: "DS-6401.1", power: "12W", image: "./imgs/pro1.png", tags: ["New", "Hot"] },
  { id: 18, name: "DS-6401.2", power: "24W", image: "./imgs/pro2.png", tags: ["New", "Hot"] },
  { id: 19, name: "DS-6402.1", power: "6W", image: "./imgs/pro3.png", tags: ["New", "Hot"] },
  { id: 20, name: "DS-6402.2", power: "12W", image: "./imgs/pro4.png", tags: ["New", "Hot"] },
  { id: 21, name: "DS-6402.3", power: "18W", image: "./imgs/pro4.png", tags: ["New", "Hot"] },
  { id: 22, name: "DS-6403.1", power: "15W", image: "./imgs/pro3.png", tags: ["New", "Hot"] },
  { id: 23, name: "DS-6403.2", power: "20W", image: "./imgs/pro2.png", tags: ["New", "Hot"] },
  { id: 24, name: "DS-6403.3", power: "10W", image: "./imgs/pro1.png", tags: ["New", "Hot"] },
  
  // Add more products as needed
];

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 20;
  const navigate = useNavigate();

  const handleNextPage = () => {
    if ((currentPage + 1) * productsPerPage < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

    // id값으로 넘길때는 이거 사용
    //   const handleCardClick = (id) => {
    //     navigate(`/detail/${id}`); // 특정 제품 ID로 이동
    //   };

    const handleCardClick = () => {
        navigate(`/detail`); 
    };

  const displayedProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );



  return (
    <>
    <GlobalStyle />
    <Container>
      <Title>SPOT&nbsp;LIGHT</Title>
      <Breadcrumb>HOME / PRODUCT / INDOOR / SPOT LIGHT</Breadcrumb>
      <ProductCount>총 <b style={{color:"red"}}>{products.length}</b>개의 제품이 등록되어 있습니다.</ProductCount>
      <GridContainer>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} onClick={() => handleCardClick()}>
            <ImageWrapper>
              <ProductImage src={product.image} alt={product.name} />
              <Tags>
                {product.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Tags>
            </ImageWrapper>
            <ProductDetails>
              <ProductName>{product.name}</ProductName>
              <ProductPower>POWER: {product.power}</ProductPower>
            </ProductDetails>
          </ProductCard>
        ))}
      </GridContainer>
      <Pagination>
        <PageButton onClick={handlePrevPage} disabled={currentPage === 0}>
          이전
        </PageButton>
        <PageButton
          onClick={handleNextPage}
          disabled={(currentPage + 1) * productsPerPage >= products.length}
        >
          다음
        </PageButton>
      </Pagination>
    </Container>
    </>
  );
};

export default ProductList;

const GlobalStyle = createGlobalStyle`
  body {
    background-color:rgb(241, 241, 241); /* 원하는 배경색 설정 */
  }
`;

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  width: 1400px;
  text-align: center;
  margin: 0 auto; 
  margin-top: 50px;

  @media (max-width: 1440px) {
        width: 95%;
    }
`;

const Title = styled.h1`
  color:rgb(28, 51, 94);
  font-size: 50px;
  margin-bottom: 30px;
  margin-right: 90%
`;

const Breadcrumb = styled.div`
  font-size: 14px;
  color: rgb(80, 80, 80);
  margin-bottom: 20px;
  margin-left: 75%
`;

const ProductCount = styled.div`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
  margin-left: 75%
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px); /* 살짝 위로 이동 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background:rgb(255, 4, 4); /* 배경색 변경 */
  }

`;

const ImageWrapper = styled.div`
  position: relative;
`;

const ProductImage = styled.img`
  transition: transform 0.3s ease;
  width: 100%;
  height: auto;

  ${ProductCard}:hover & {
    filter: brightness(0.6) blur(4px); /* Darker and blurry effect */
  }
`;

const Tags = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 5px;
`;

const Tag = styled.div`
  background: #e60000;
  color: #fff;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 15px;
  font-weight: bold;
`;

const ProductDetails = styled.div`
  padding: 10px;
  background: #333;
  color: #fff;
  text-align: center;
`;

const ProductName = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ProductPower = styled.div`
  font-size: 14px;
`;

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PageButton = styled.button`
  padding: 8px 16px;
  background: #e60000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
