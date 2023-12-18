import { useState } from 'react';
import { Table, Modal, Button, Input } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { ColumnData } from './Columns';
import { UserModal } from './UserModal';

export const UsersList = () => {
    const [isAdded, setIsAdded] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [addingStudent, setAddingStudent] = useState(null as any);
    const [editingStudent, setEditingStudent] = useState(null as any);
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

    const onAddStudent = (record:any) => {} 

    const onEditStudent = (record: any) => {
        setIsEditing(true);
        setEditingStudent({ ...record });
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

    const resetEditing = () => {
        setIsEditing(false);
        setEditingStudent(null)
    }

  return (
    <div className="w-[95%] mx-auto space-y-4">
      <div className="flex gap-4 items-center">
        <h1 className="bg-white text-[24px] px-2 py-3 text-[#a02669]">
          Users Table List
        </h1>
        <Button
          type="dashed"
          className="text-blue-500"
          icon={<UserAddOutlined />}
          size="large"
          onClick={() => setIsAdded(true)}
        >
          Add User
        </Button>
        <UserModal
          title={"Add Student"}
          isVisible={isAdded}
          setIsVisible={setIsAdded}
          cancelFunc={()=>setIsAdded(false)}
          dataFunc={setDataSource}
          showData={addingStudent}
          setShowData={setAddingStudent}
        />
      </div>
      <Table columns={columns} dataSource={dataSource} />
      <UserModal
        title={"Edit Student"}
        isVisible={isEditing}
        setIsVisible={setIsEditing}
        cancelFunc={resetEditing}
        dataFunc={setDataSource}
        showData={editingStudent}
        setShowData={setEditingStudent}
      />
    </div>
  );
}
