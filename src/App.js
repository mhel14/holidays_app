import React from 'react';
import { Observer } from 'mobx-react-lite';
import { Select } from 'antd';
import DropdownList from './components/DropdownList/DropdownList';
import useStore from './hooks/useStore';
import DataTable from './components/DataTable/DataTable';
import ErrorHandler from './components/ErrorHandler/ErrorHandler';

import './App.css';

const { Option } = Select;

function App() {
  const store = useStore();

  return (
    <Observer>
      {() => (
        <div className="App">
          <h1>UK Bank Holidays</h1>
          <DropdownList year={store.year} setYear={store.setYear} hasError={!!store.error}>
            <Option key="all" value="all">All</Option>
            {store.years?.map((year) => (
              <Option value={year} key={year}>
                {year}
              </Option>
            ))}
          </DropdownList>
          {
            store.error
              ? <ErrorHandler errorCode={store.error} />
              : <DataTable rows={store.holidays[store.year]} loading={store.isLoading} />
          }
        </div>
      )}
    </Observer>

  );
}

export default App;
