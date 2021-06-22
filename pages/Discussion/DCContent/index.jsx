import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import {
  Container,
  DCContainer,
  SubHeader,
  MainContainer,
  SubTitle,
  SubMeta,
  SubMetaLeft,
  SubMetaRight,
  SubArticle,
} from '@pages/Discussion/DCContent/styles';

const DCContent = () => {
  return (
    <div style={{ height: '100%' }}>
      <DCContainer>
        <Header></Header>
        <Container>
          <SubHeader>토론 게시판</SubHeader>
          <MainContainer>
            <SubTitle>베니스의 상인</SubTitle>
            <SubMeta>
              <SubMetaLeft>
                <span className="divide">2021-06-22</span>
                <span className="divide">조회수 10</span>
                <span>
                  댓글<span className="comment">3</span>
                </span>
              </SubMetaLeft>
              <SubMetaRight>
                <span>안토니오</span>
                <i class="fas fa-user-circle"></i>
              </SubMetaRight>
            </SubMeta>
            <SubArticle>
              {`셰익스피어의 ‘베니스의 상인’에서 고리대금업자 샤일록은 안토니오에게 돈을 빌려주며 갚지 못하면 살 1파운드를 베어갈 수 있다는 계약을 체결합니다. 
              샤일록은 안토니오가 돈을 갚지 못하자 위 계약대로 살 1파운드를 베어갈 수 있다고 주장하였고, 이에 대해 재판장 포샤는 계약서에 ‘살 1파운드’라고 되어 있으니 ‘살’이외에 피는 단 한방울도 흘려서는 안된다고 판결하며 샤일록의 청구를 기각하고 있습니다(이외의 소설 상의 판결 내용은 생략함).
        위 포샤의 판단 및 위 계약에 대해 다들 어떻게 생각하시나요?`}
            </SubArticle>
          </MainContainer>
        </Container>
      </DCContainer>
      <Footer></Footer>
    </div>
  );
};

export default DCContent;
