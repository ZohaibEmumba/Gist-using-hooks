import React, { useState , useEffect } from 'react';
import { Table, Radio, Divider } from 'antd';
import {publicGistsRecord} from '../../../utils/fetchAPIs';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Time',
    dataIndex: 'time',
  },
  {
    title: 'Keyword',
    dataIndex: 'keyword',
  },
  {
    title: 'Notebook Name',
    dataIndex: 'notebook',
  },
];


const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const TableData = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  const [publicGists, setPublicGists] = useState([]);

  useEffect(() => {
    publicGistsRecord().then(data => setPublicGists(data));
    console.log(publicGists)
  }, [])
  return (
    <div>
      {/* <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group> */}

      <Divider />

      <Table
        columns={columns}
        dataSource={publicGists}
      />
    </div>
  );
};
export default TableData;