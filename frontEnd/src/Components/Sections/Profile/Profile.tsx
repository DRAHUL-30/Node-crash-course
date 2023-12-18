import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, LinkedinFilled, GithubOutlined } from '@ant-design/icons';
import { Avatar, Card, Modal, Button, Input } from 'antd';
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
  const [loading, setLoading] = useState(false);

    const resetEditing = () => {
      setLoading(false);
      setProfileDetails({
        name: "Rahul",
        role: "Software Developer",
        linkedin_url: "https://www.linkedin.com/in/rahul-dharmaraja-ba8b88269/",
        github_url: "https://github.com/DRAHUL-30",
      });
    }

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
          <EditOutlined key="edit" onClick={() => setLoading(true)} />,
          <EllipsisOutlined key="more" />,
        ]}
      >
        <Meta
          avatar={<Avatar src={dev_logo} />}
          title={profileDetails?.name}
          description={profileDetails?.role}
        />
      </Card>
      <Modal
        title={"Edit Profile Details"}
        visible={loading}
        centered={true}
        width={600}
        footer={[
          <Button
            key="cancel"
            className="bg-[#b7dcfa] text-white"
            onClick={resetEditing}
          >
            Cancel
          </Button>,
          <Button
            className="bg-[#fae3b7]"
            key="save"
            type="dashed"
            onClick={() => {
              setProfileDetails((pre: any) => {
                return pre;
              });
              setLoading(false);
            }}
          >
            Save
          </Button>,
        ]}
      >
        <Input
          value={profileDetails?.name}
          onChange={(e: any) => {
            setProfileDetails((pre: any) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <Input
          value={profileDetails?.role}
          onChange={(e: any) => {
            setProfileDetails((pre: any) => {
              return { ...pre, role: e.target.value };
            });
          }}
        />
        <Input
          value={profileDetails?.linkedin_url}
          onChange={(e: any) => {
            setProfileDetails((pre: any) => {
              return { ...pre, linkedin_url: e.target.value };
            });
          }}
        />
        <Input
          value={profileDetails?.github_url}
          onChange={(e: any) => {
            setProfileDetails((pre: any) => {
              return { ...pre, github_url: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
};
