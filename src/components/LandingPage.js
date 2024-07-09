import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'antd'; // Import Button from antd
import axios from 'axios';

const LandingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Row gutter={16}>
      {products.map((product) => (
        <Col span={8} key={product.id}>
          <Card title={product.name}>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <Button>Add to Cart</Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default LandingPage;
