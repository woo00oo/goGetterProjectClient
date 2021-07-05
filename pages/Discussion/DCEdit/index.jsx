import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import DiscussionEditForm from '@components/DiscussionEditForm';
import { Container, DCContainer } from '@pages/Discussion/DCEdit/styles';

const DCEdit = (props) => {
  console.log(props);
  const title = props.location.state.title;
  const content = props.location.state.content;
  const Id = props.match.params.id;
  return (
    <div style={{ height: '100%' }}>
      <DCContainer>
        <Header />
        <Container>
          <DiscussionEditForm title={title} content={content} Id={Id}></DiscussionEditForm>
        </Container>
      </DCContainer>
      <Footer />
    </div>
  );
};

export default DCEdit;
