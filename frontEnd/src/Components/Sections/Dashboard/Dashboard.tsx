import React from "react";
import { Typography, Space, Card, Statistic } from "antd";
import { counts } from "./CountCards";
import _ from "lodash";

export const Dashboard = () => {
  const renderList = _.map(counts, (item: any) => (
    <CountCard key={item.title} icon={item?.icon} title={item.title} value={item.value} />
  ));

  return (
    <div className="space-y-4 pl-2">
      <Typography.Title level={3}>Dashboard</Typography.Title>
      <Space direction="horizontal" className='w-full'>{renderList}</Space>
    </div>
  );
};

interface CountCardType{
  title: string;
  value: number;
  icon: any
}

function CountCard({ title, value, icon }: CountCardType) {
  return (
    <Card className="w-[300px]">
      <Space direction="horizontal" className="">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
