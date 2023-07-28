import './App.css';
import Form2 from './Form2';
import ClippedDrawer from './dummy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import Info from './Info';
import Admin from './Admin/Admin';
import AdmminSign from './Admin/AdmminSign';
import Home2 from './Admin/Home2';
import Dashboard from './Admin/Dashboard';
import CaseForm from './CaseForm';
import LocationDisplay from './Loc';
import DashBoard2 from './Admin/DashBoard2';
import News from './Admin/News';
import Chart from 'C:/React/crimetrackingapplication/src/Admin/Chart.jsx';
import ChatLayout from './ChatLayout';
import Case from './Admin/CaseView';
import Feedback from './Admin/Feedback';
import UserFeedback from './UserFeedback';
import Chat from './Chat';
import ChatAdmin from './Admin/ChatAdmin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ClippedDrawer />}></Route>
          <Route path='/login' element={<SignIn />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/ad' element={<AdmminSign />}></Route>
          <Route path='/home' element={<Home2 />}></Route>
          <Route path='/signUp' element={<Form2 />}></Route>
          <Route path='/case' element={<ClippedDrawer />}></Route>
          <Route path='/info' element={<Info />}></Route>
          <Route path='/form' element={<CaseForm />}></Route>
          <Route path='/new' element={<Dashboard />}></Route>
          <Route path='/house' element={<ClippedDrawer />}></Route>
          <Route path='/chat' element={<ChatLayout />}></Route>
          <Route path='/caseview' element={<Case />}></Route>
          <Route path='/feed' element={<UserFeedback />}></Route>
          <Route path='/feedback' element={<Feedback />}></Route>
          <Route path='/chat' element={<Chat />}></Route>
          <Route path='/admin/chat' element={<ChatAdmin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    // <div>
    //   <Chart />
    // </div>
  );
}

export default App;
