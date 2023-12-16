import React from 'react';
import { Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

export const Dashboard = () => {
  return (
    <div className='border border-white w-[100%]'>
      <Button type="primary" icon={<SmileOutlined />}>
        Dashboard
      </Button>
    </div>
  );
}
