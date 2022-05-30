import React from 'react';

// swiper
import { Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'antd/dist/antd.css';
import { Button, Card, Layout, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';

const { Content } = Layout;
const { Title } = Typography;

function HomeContent() {
  return (
    <div>
      <Content style={{}}>
        <Title level={3} style={{ padding: '12px' }}>
          Welcome back, Bread 👋
          {/* Let me know Rice 🤤 */}
        </Title>
        <div
          style={{
            // height: '20%',
            border: `1px solid black`,
            height: '100px',
          }}
        >
          추천하는 곳으로 이동
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px',
          }}
        >
          <Button type='primary' shape='round'>
            All
          </Button>
          <Button type='primary' shape='round'>
            Category1
          </Button>
          <Button type='primary' shape='round'>
            Category2
          </Button>
          <Button type='primary' shape='round'>
            Category3
          </Button>
          <Button type='primary' shape='round'>
            Category4
          </Button>
        </div>

        {/* FIXME: Swiper 적용  */}
        <Swiper
          modules={[Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          scrollbar={{ draggable: true }}
          // pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Card
              hoverable
              cover={
                <img
                  alt='example'
                  height={220}
                  src='https://i.pinimg.com/564x/1d/f1/bb/1df1bb675b3bd2ab585b7358a0793bd8.jpg'
                />
              }
            >
              <Meta
                title='Europe Street beat'
                description='www.instagram.com'
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              hoverable
              cover={
                <img
                  alt='example'
                  height={220}
                  src='https://i.pinimg.com/564x/1d/f1/bb/1df1bb675b3bd2ab585b7358a0793bd8.jpg'
                />
              }
            >
              <Meta
                title='Europe Street beat'
                description='www.instagram.com'
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              hoverable
              cover={
                <img
                  alt='example'
                  height={220}
                  src='https://i.pinimg.com/564x/1d/f1/bb/1df1bb675b3bd2ab585b7358a0793bd8.jpg'
                />
              }
            >
              <Meta
                title='Europe Street beat'
                description='www.instagram.com'
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              hoverable
              cover={
                <img
                  alt='example'
                  height={220}
                  src='https://i.pinimg.com/564x/1d/f1/bb/1df1bb675b3bd2ab585b7358a0793bd8.jpg'
                />
              }
            >
              <Meta
                title='Europe Street beat'
                description='www.instagram.com'
              />
            </Card>
          </SwiperSlide>
        </Swiper>
      </Content>
      <Content style={{ display: 'flex', marginTop: '40px' }}>
        {/* FIXME: Grid */}
        <div style={{ width: '60%' }}>추천 메뉴?</div>
        <div style={{ width: '40%' }}>weather</div>
      </Content>
    </div>
  );
}

export default HomeContent;
