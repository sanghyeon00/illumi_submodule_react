import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaGooglePlus, FaInstagram, FaYoutube, FaDribbble } from 'react-icons/fa';

// npm install react-icons 해야함!!

// Footer 스타일 정의
const FooterSection = styled.section`
  background-color: #000;
  padding: 20px 0;
  color: white;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LogoImage = styled.img`
  max-height: 50px;
  margin-bottom: 10px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    color: #61dafb;
  }
`;

const FooterInfo = styled.div`
  font-size: 14px;
  line-height: 1.6;
  max-width: 600px;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterRow>
          <LogoWrapper>
            <LogoImage
              src="./imgs/illumi_logo_re-removebg-preview.png"
              alt="Illumi Logo"
            />
            <SocialLinks>
              <SocialIcon href="https://facebook.com"><FaFacebook /></SocialIcon>
              <SocialIcon href="https://twitter.com"><FaTwitter /></SocialIcon>
              <SocialIcon href="https://plus.google.com"><FaGooglePlus /></SocialIcon>
              <SocialIcon href="https://instagram.com"><FaInstagram /></SocialIcon>
              <SocialIcon href="https://youtube.com"><FaYoutube /></SocialIcon>
              <SocialIcon href="https://dribbble.com"><FaDribbble /></SocialIcon>
            </SocialLinks>
          </LogoWrapper>

          <FooterInfo>
            <div>회사명 : 일루미  대표 : 조재포  사업자번호 : 106-86-55919</div>
            <div>본사 : 서울시 성동구 성수일로 8길53 (성수동2가) 캐슬프라자 702호 / 공장 : 경기도 파주시 상지석동 554-124번지 (교하산업단지 23부지)</div>
            <div>Tel : 02-707-1661 / Fax : 02-707-1731 / Email : illumi@illumi.co.kr</div>
            <div>Copyright 일루미 All Rights Reserved. Created By hompynara.com</div>
          </FooterInfo>
        </FooterRow>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
