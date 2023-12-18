import React from 'react';
import { Modal, Input, Row, Col, Button } from 'antd';

interface UserModalProps {
  title: string;
  isVisible: boolean;
  setIsVisible: any;
  cancelFunc: any;
  dataFunc: any;
  showData?: any;
  setShowData?: any
}

export const UserModal = ({
  title,
  isVisible,
  setIsVisible,
  cancelFunc,
  dataFunc,
  showData,
  setShowData,
}: UserModalProps) => {
  return (
    <Modal
      title={title}
      visible={isVisible}
      centered={true}
    //   okText="Save"
      //   onCancel={() => {
      //     cancelFunc();
      //   }}
      maskClosable={true}
      footer={[
        <Button
          key="cancel"
          className="bg-[#b7dcfa] text-white"
          onClick={cancelFunc}
        >
          Cancel
        </Button>,
        <Button
          className="bg-[#fae3b7]"
          key="save"
          type="dashed"
          onClick={() => {
            dataFunc((pre: any) => {
              return pre.map((student: any) => {
                if (student?.id === showData?.id) {
                  return showData;
                } else return student;
              });
            });
            setIsVisible(false);
          }}
        >
          Save
        </Button>,
      ]}
      //   onOk={() => {
      //     dataFunc((pre: any) => {
      //       return pre.map((student: any) => {
      //         if (student?.id === showData?.id) {
      //           return showData;
      //         } else return student;
      //       });
      //     });
      //     setIsVisible(false);
      //   }}
    >
      {/* <MyInputWithLabel label={"Name"} showData={showData} setShowData={setShowData} /> */}
      {/* <MyInputWithLabel label={"Email"} showData={showData} setShowData={setShowData} /> */}
      {/* <MyInputWithLabel label={"Address"} showData={showData} setShowData={setShowData} /> */}
      <Input
        value={showData?.name}
        onChange={(e: any) => {
          setShowData((pre: any) => {
            return { ...pre, name: e.target.value };
          });
        }}
      />
      <Input
        value={showData?.email}
        onChange={(e: any) => {
          setShowData((pre: any) => {
            return { ...pre, email: e.target.value };
          });
        }}
      />
      <Input
        value={showData?.address}
        onChange={(e: any) => {
          setShowData((pre: any) => {
            return { ...pre, address: e.target.value };
          });
        }}
      />
    </Modal>
  );
};

// const MyInputWithLabel = ({ label, showData, setShowData }: any) => {
//   return (
//     <Row>
//       <Col
//         span={6}
//         // style={{ textAlign: "right", paddingRight: "8px", lineHeight: "32px" }}
//       >
//         {label}:
//       </Col>
//       <Col span={18}>
//         <Input
//           value={showData[label?.toLowercase()]}
//           onChange={(e: any) => {
//             setShowData((pre: any) => {
//               return { ...pre, [label?.toLowercase()]: e.target.value };
//             });
//           }}
//         />
//       </Col>
//     </Row>
//   );
// };
