import React from "react";
import styled from "styled-components";

import ur from "../detail_image/product.png"
import one from "../detail_image/image1.png"
import two from "../detail_image/image2.png"
import thr from "../detail_image/image3.png"

import white from "../detail_image/white.jpg"
import black from "../detail_image/black.jpg"
import chrome from "../detail_image/chrome.jpg"
import gold from "../detail_image/gold.jpg"
import jorib1 from "../detail_image/jorib1.jpg"



const DetailPage = () => {
    const productDetails = {
        name: "DOWN LIGHT",
        product : "DS-9187",
        description:
            "Reflectors and lenses produce a wide range of distributions and effects that are amplified by numerous accessories.",
        imageUrl: "../detail_image/product.png",
        Body: "AL-Die-Casting",
        Reflector: "Acryl Specular Silver",
        Color: [
            { color: "#000000", label: "Black" },
            { color: "#FFFFFF", label: "White" },
            { color: "#C0C0C0", label: "Silver" }
        ],
        IP: "44",
        reflectorOptions: [white, black, chrome, gold],
        Type: "LED COB",
        Watt: "20W",
        Temp: "2700K, 3000K, 4000K",
        CRI: "Ra > 80",
        Angle: "10°, 24°, 36°, 50°",
        Voltage: "220-240V / 50-60Hz",
    };

    return (
        <PageContainer>
            {/* 이미지 섹션 */}
            <ImageContainer>
                <img src={ur} style= {{ padding: 0, margin:0 }} alt={productDetails.name} />
                <Image_jorib>
                    <img src={jorib1} alt={productDetails.name} />
                    {/* <TEXT_DECRIPTION>
                        <h2>{productDetails.name}</h2>
                        <h1>{productDetails.product}</h1>
                        <h3>{productDetails.Body}</h3>
                    </TEXT_DECRIPTION> */}
                </Image_jorib>
            </ImageContainer>

            {/* 제품 타이틀과 설명 */}
            <DescriptionPage>
                <Section>
                <h1>{productDetails.name}</h1>
                <h2>{productDetails.product}</h2>
                <p>{productDetails.description}</p>
                </Section>
                <ImageBox>
                    <img src={one} style= {{ paddingLeft: 20, margin:0 }} alt={productDetails.name} />
                    <img src={two} style= {{ paddingLeft: 20, margin:0 }} alt={productDetails.name} />
                    <img src={thr} style= {{ paddingLeft: 20, margin:0 }} alt={productDetails.name} />
                </ImageBox>
                {/* Material 정보 */}
                <Section>
                    <h3>Material</h3>
                    <List>
                        <ListItem key={0}><Describe>Body</Describe>  {productDetails.Body}</ListItem>
                        <ListItem key={1}><Describe>Color                        </Describe> 
                        <ColorContainer>
                        {productDetails.Color.map((item, index) => (
                            <ColorOption key={index}>
                                <ColorBox style={{ backgroundColor: item.color }} />
                                <ColorLabel>{item.label}</ColorLabel>
                            </ColorOption>
                        )) || null}
                        </ColorContainer>
                        </ListItem>
                        <ListItem key={3}><Describe>IP</Describe>  {productDetails.IP}</ListItem>
                        <ReflectorOptions>
                        <ListItem key={4}><Describe>Reflector Options</Describe></ListItem>
                        {productDetails.reflectorOptions.map((option, index) => (
                           <img src={option} alt={index} />
                        ))} 
                    </ReflectorOptions>
                    </List>
                </Section> 
                {/* Lamp Details */}
                <Section>
                    <h3 style= {{ background: 'white' }}>Lamp Details</h3>
                    <List>
                    <ListItem key={5}><Describe>Type</Describe>  {productDetails.Type}</ListItem>
                    <ListItem key={6}><Describe>Watt</Describe>  {productDetails.Watt}</ListItem>
                    <ListItem key={6}><Describe>Temp</Describe>  {productDetails.Temp}</ListItem>
                    <ListItem key={7}><Describe>CRI</Describe>  {productDetails.CRI}</ListItem>
                    <ListItem key={8}><Describe>Angle</Describe>  {productDetails.Angle}</ListItem>
                    <ListItem key={9}><Describe>Voltage</Describe>  {productDetails.Voltage}</ListItem>
                    </List>
                </Section>
            </DescriptionPage>
        </PageContainer>
    );
};

// 스타일 정의

const PageContainer = styled.div`
    padding: 20px;
    background-color: #f4f4f4;
    text-align: center;
    margin: 0 auto;
    display : flex;
    flex-direction:row;
    justify-content : space-between;
    width:80%;
    margin-top:50px;
    margin-bottom:30px;
    border-radius:15px;
`;

const TEXT_DECRIPTION = styled.div`
        display:flex;
        flex-direction:column;

`
const Image_jorib = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    img {
        width: 60%; /* 부모의 가로 크기의 절반 */
        height: auto; /* 비율에 맞게 높이 조정 */
        object-fit: contain; /* 이미지 비율 유지 */
        margin-top : 35px;
    }
`;


const DescriptionPage = styled.div`
    display : flex;
    flex-direction:column;
    width:55%;
`;

const ImageBox = styled.div`
    display : flex;
    flex-direction:Row;
    justify-content : start;
`;




const ColorContainer = styled.div`
    display: flex;
    gap: 15px; /* 색상 옵션 간의 간격 */
`;

const ColorOption = styled.div`
    display: flex;
    gap: 8px; /* 색상 박스와 텍스트 간의 간격 */
`;

const ColorBox = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid #ddd; /* 박스 테두리 */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); /* 약간의 그림자 */
    border-radius: 4px; /* 모서리를 둥글게 */
`;

const ColorLabel = styled.span`
    font-size: 14px; /* 텍스트 크기 */
    color: #555; /* 텍스트 색상 */
    top : 0%;
`;

const ImageContainer = styled.div`
    width: 40%; /* 부모 요소의 너비 */
    display: flex;
    flex-direction: column;
    justify-content : flex-start;
    img {
         max-width: 100%; /* 부모 요소를 벗어나지 않도록 설정 */
        height: auto;
    }
`;

const Section = styled.div`
    text-align: left;
    padding: 0 20px;

    h3 {
        color: #333;
        background: white;
        height: 50px;
        display: flex;
        justify-content: start; /* 수평 중앙 정렬 */
        align-items: center; /* 수직 중앙 정렬 */
        padding-left : 10px;
}

`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display:flex;
    flex-direction:column;
`;

const Describe = styled.span`
    font-weight: 600; /* 적당한 볼드체 */
    color: #333; /* 제목에 어울리는 색상 */
    margin-bottom: 10px; /* 아래 간격 추가 */
    width : 150px;
    display: inline-block;
    height:30px;
    margin-bottom:0;
    vertical-align: middle;
`;



const ListItem = styled.li`
    display: flex; /* Flexbox로 가로 정렬 */
    gap: 10px; /* 간격 추가 */
    height:35px;
`;

const ReflectorOptions = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;

const ReflectorItem = styled.div`
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    color: #555;
    text-align: center;
    border: 1px solid #ddd;
`;

// 컴포넌트 내보내기
export default DetailPage;
