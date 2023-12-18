import { useState } from 'react';
import { Table, Modal, Layout, Flex } from 'antd';
import { ColumnData } from './Columns';

export const UsersList = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            name: "John",
            email: "john@gmail.com",
            address: "John Address",
        },
        {
            id: 2,
            name: "David",
            email: "david@gmail.com",
            address: "David Address",
        },
        {
            id: 3,
            name: "James",
            email: "james@gmail.com",
            address: "James Address",
        },
        {
            id: 4,
            name: "Sam",
            email: "sam@gmail.com",
            address: "Sam Address",
        },
    ]);

    const onEditStudent = (record: any) => {
        console.log(record, "EDIT");
    }

    const onDeleteStudent = (record: any) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this student record?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                setDataSource((pre: any) => {
                    return pre.filter((student: any) => student?.id !== record?.id);
                })
            }
        })
    }
    
    const columns = ColumnData(onEditStudent, onDeleteStudent);

  return (
    <div className="w-[95%] mx-auto space-y-4">
      <h1 className="bg-white text-[24px] px-2 py-3 text-[#a02669]">Users Table List</h1>
      <Table columns={columns} dataSource={dataSource} />
    </div>
    // <Flex gap="middle" vertical>
    //   <Layout className="space-y-4">
    //     <Header className="bg-white text-[22px] border">
    //       Users Table List
    //     </Header>
    //     <Table columns={columns} dataSource={dataSource} />
    //   </Layout>
    // </Flex>
  );
}
