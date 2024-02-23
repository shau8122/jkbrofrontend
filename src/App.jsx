import { useEffect, 
  // useState, forwardRef 
} from 'react';
import './App.css'
// import { useDispatch, useSelector } from 'react-redux';
import { 
  Home, 
  LandingPage, 
  SignUp, VerificationScreen, AccountScreen, AdminDashboard, Profile, TrackOrder 
} from './pages';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContext.jsx';
import { ModalProvider } from './Store/ModalStore.jsx';
import ProtectedRoute from './utils/ProtectedRoute';
// import { getUserAction } from './redux/actions/userAction';
// import { setError, clearError, clearSuccess } from './redux/slices/appSlice';
// import { Tracking } from './components/index.js';


function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   const isAuthenticated = useSelector((state) => state.userState.isAuthenticated);
  //   const { error, success } = useSelector((state) => state.appState);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getUserAction());

  // }, [dispatch])

  return (
    <BrowserRouter>
    <ModalProvider/>

      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/verification" element={<VerificationScreen />} />
          <Route path="/loginsignup" element={<SignUp />} />
          <Route path="/account" element={<AccountScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/tracking" element={<ProtectedRoute><TrackOrder /></ProtectedRoute>} />

          {/* <Route path="/psignup" element={<PSignup />} />
          <Route path="/pverification" element={<PVerification/>} />
          <Route path="/paccount" element={<PAccount />} /> */}
{/*       
          <Route path="/emailscreen" element={<EmailScreen/>} />
          <Route path="/verifyidentity" element={<VerifyIdentity />} />
          <Route path="/orderdetails" element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />
          <Route path="/orderprogress" element={<ProtectedRoute><OrderProgress /></ProtectedRoute>} />
          <Route path="/orderongoing" element={<ProtectedRoute><OrderOngoing /></ProtectedRoute>} />
          <Route path="/orderongoing3" element={<ProtectedRoute><OrderOngoing3 /></ProtectedRoute>} />
          <Route path="/earnings" element={<ProtectedRoute><Earnings /></ProtectedRoute>} />
          <Route path="/pprofile" element={<ProtectedRoute><AccountProfile /></ProtectedRoute>} />
           */}
          <Route path="/admindashboard" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
