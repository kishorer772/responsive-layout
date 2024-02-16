import { useState } from 'react';
import { Layout } from 'antd';
import './assets/css/globals.css';
import './App.css';
import Sidebar from './Sidebar';
import AppContent from './AppContent';
import Header from './Header';
function App() {
  const [collapse, setCollapse] = useState(false);

  const collapseHandler = () => {
    console.log('handler');
    setCollapse(!collapse);
  };
  return (
    <div className="App">
      <Layout className="flex">
        <Sidebar
          collapse={collapse}
          setCollapse={setCollapse}
          collapseHandler={collapseHandler}
        ></Sidebar>
        <div className="flex-column h-screen bg-red-100 overflow-hidden">
          <Header
            isCollapsed={collapse}
            collapseHandler={collapseHandler}
          ></Header>
          <AppContent></AppContent>
        </div>
      </Layout>
    </div>
  );
}

export default App;
