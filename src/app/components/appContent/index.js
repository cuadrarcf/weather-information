import React from 'react';
import { Col, Layout, Row, Typography } from 'antd';
import './index.css';

const { Title } = Typography;
const { Content } = Layout;

/**
 *
 * @param title {string}
 * @param children {React.ReactNode}
 *
 */
export function AppContent(props) {
  const { title, children } = props;

  return (
    <Content className="app-content">
      <Row>
        <Col span={24}>
          <Title level={3}>{title}</Title>
          <article className="main-place">{children}</article>
        </Col>
      </Row>
    </Content>
  );
}
