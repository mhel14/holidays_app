import {
  Table, Button, Popconfirm, message,
} from 'antd';
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Observer } from 'mobx-react-lite';
import 'antd/dist/antd.css';
import { TABLE_COLUMNS } from '../../constants';
import useGetSelectedDates from '../../hooks/useGetSelectedDates';
import fakePost from '../../helpers/fakePost';

const FAKE_POST_URL = 'http://localhost:3000/';

const DataTable = ({ rows, loading: isLoading }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const dates = useGetSelectedDates(selectedRowKeys);

  const hasSelected = selectedRowKeys.length > 0;

  const onSelectChange = (_selectedRowKeys) => {
    setSelectedRowKeys(_selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleConfirm = async () => {
    setLoading(true);
    message.loading({ content: 'Deleting...', key: 'fakeDelete' });
    await fakePost(FAKE_POST_URL, dates);

    const loadingTimeout = setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
      message.success({ content: 'Fake delete record successful!', key: 'fakeDelete' });
      clearTimeout(loadingTimeout);
    }, 1000);
  };

  const renderPopConfirm = () => (
    <Popconfirm
      title={`Are you sure to delete this dates? [${dates?.toString()}]`}
      onConfirm={handleConfirm}
      okText="Yes"
      cancelText="No"
      placement="bottomLeft"
    >
      <Button type="primary" disabled={!hasSelected} loading={loading}>
        Delete
      </Button>
    </Popconfirm>
  );

  return (
    <Observer>
      {() => (
        <div>
          <div style={{ margin: '24px 0', textAlign: 'left' }}>
            {
              hasSelected && (
                <div>
                  {renderPopConfirm()}
                  <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                  </span>
                </div>
              )
            }
          </div>
          <Table
            rowSelection={rowSelection}
            columns={TABLE_COLUMNS}
            dataSource={rows}
            loading={isLoading}
          />
        </div>
      )}
    </Observer>
  );
};

DataTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

DataTable.defaultProps = {
  rows: [],
  loading: false,
};

export default DataTable;
