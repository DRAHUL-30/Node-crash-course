import { useState } from 'react';
import { Table, Modal } from 'antd';
import { ColumnData } from './Columns';

export const UsersList = () => {
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
        console.log(record, "DELETE");
    }
    
    const columns = ColumnData(onEditStudent, onDeleteStudent);

  return (
    <div className="w-[95%] mx-auto">
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}
