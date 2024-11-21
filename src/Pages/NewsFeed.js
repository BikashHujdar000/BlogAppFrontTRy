import React from 'react'
import Base from '../Components/Base'
import Home from './Home'
import { Col, Container, Row } from 'reactstrap'
import CategoryMenu from '../Components/CategoryMenu'
import PostCard from '../Components/PostCard'

const NewsFeed = () => {
  return (
    <div>

      <Container>


        <Row>
          <Col md={3}>
            <CategoryMenu></CategoryMenu>
          </Col>
          <PostCard></PostCard>

          <Col md={3}>

          </Col>
        </Row>

      </Container>



    </div>
  )
}

export default NewsFeed
