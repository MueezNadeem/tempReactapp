import React from 'react';
import { Layout, Row, Col } from 'antd';
import NavBar from '../components/NavBar';
import FeatureCard from '../components/FeatureCard';
import Testimonials from '../components/Testimonials';
import DownloadApp from '../components/DownloadApp';

const { Content } = Layout;

const HomePage = () => {
  return (
    <Layout className="layout">
      <NavBar />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Row gutter={[16, 16]} justify="center">
            <Col span={8}>
              <FeatureCard
                icon={<i className="icon" />}
                title="Fresh Ingredients"
                description="We use only the freshest ingredients in our dishes."
              />
            </Col>
            <Col span={8}>
              <FeatureCard
                icon={<i className="icon" />}
                title="Fast Delivery"
                description="Enjoy fast and reliable delivery services."
              />
            </Col>
            <Col span={8}>
              <FeatureCard
                icon={<i className="icon" />}
                title="Great Taste"
                description="Our dishes are crafted to deliver amazing taste."
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Testimonials />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DownloadApp />
            </Col>
          </Row>
        </div>
      </Content>
      {/* Add footer */}
      {/* <AppFooter /> */}
    </Layout>
  );
};

export default HomePage;
