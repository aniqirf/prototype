import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './pages/Test';
import UserList from './pages/User/UserList';
import DataCollectionList from './pages/DataCollection/DataCollectionList';
import Login from './pages/Auth/Login';
import MetadataList from './pages/metadata/MetadataList';
import MetadataDetail from './pages/metadata/MetadataDetail';
import LandingPage from './pages/LandingPage';
import PengesahanDataList from './pages/PengesahanData/PengesahanDataList';
import Berita from './pages/CMS/Berita/Berita';
import Pengumuman from './pages/CMS/Pengumuman/Pengumuman';
import Analitik from './pages/CMS/Analitik/Analitik';
import Role from './pages/User/Role/Role';
import AuditList from './pages/Audit/AuditList';
import DataCollectionByAgensi from './pages/DataCollection/DataCollectionByAgensi';
import DataCollectionByAgensiView from './pages/DataCollection/DataCollectionByAgensiView';
import Dashboard from './pages/Dashboard/Dashboard';
import CustomerList from './pages/Customer/CustomerList';
import TIcketList from './pages/Ticket/TicketList';
import Review from './pages/Ticket/Review';
import ReportingAnalytics from './pages/Metadata/ReportingAnalytics';

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/cms-berita" element={<Berita />} />
        <Route path="/cms-pengumuman" element={<Pengumuman />} />
        <Route path="/cms-analitik" element={<Analitik />} />
        <Route path="/role" element={<Role />} />
        <Route path="/data-collection-list" element={<DataCollectionList />} />
        <Route path="/data-collection-by-agensi" element={<DataCollectionByAgensi />} />
        <Route path="/data-collection-by-agensi-view" element={<DataCollectionByAgensiView />} />
        <Route path="/metadata-list" element={<ReportingAnalytics />} />
        <Route path="/metadata-detail" element={<MetadataDetail />} />
        <Route path="/pengesahan-data-list" element={<PengesahanDataList />} />
        <Route path="/audit-list" element={<AuditList />} />
        <Route path="/customer-list" element={<CustomerList />} />
        <Route path="/ticket-list" element={<TIcketList />} />
        <Route path="/ticket-review" element={<Review />} />
      </Routes>
    </Router>
  );
};

export default App;
