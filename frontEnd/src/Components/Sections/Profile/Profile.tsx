import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, LinkedinFilled, GithubOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import dev from "../../../assets/dev.jpg";
import dev_logo from "../../../assets/dev_logo.png";

const { Meta } = Card;

export const Profile: React.FC = () => {
  // Define state variables
  const [profileDetails, setProfileDetails] = useState({
    name: "Rahul",
    role: "Software Developer",
    linkedin_url: "https://www.linkedin.com/in/rahul-dharmaraja-ba8b88269/",
    github_url: "https://github.com/DRAHUL-30",
  });

  // Your component code...

  return (
    <div className="w-[98%] mx-auto py-2">
      <Card
        style={{ width: 330, backgroundColor: "#d2e0fa" }}
        cover={<img alt="example" src={dev} />}
        actions={[
          <a
            href={profileDetails?.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            key="linkedin"
          >
            <LinkedinFilled />
          </a>,
          <a
            href={profileDetails?.github_url}
            target="_blank"
            rel="noopener noreferrer"
            key="github"
          >
            <GithubOutlined />
          </a>,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="more" />,
        ]}
      >
        <Meta
          avatar={<Avatar src={dev_logo} />}
          title={profileDetails?.name}
          description={profileDetails?.role}
        />
      </Card>
    </div>
  );
};
