import {
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom'
import '../src/style/global.css'
import Login from './pages/beforeAuth/Login';
import ForgetPassword from './pages/beforeAuth/ForgetPassword';
import RootLayout from './pages/RootLayout';
import PrivateRoute from './pages/privateRoute/PrivateRoute';
import Dashboard from './pages/afterAuth/Dashboard';
import UserManagement from './pages/afterAuth/usermanagement/UserManagement';
import ValidateOTP from './pages/beforeAuth/ValidateOTP';
import UpdatePassword from './pages/beforeAuth/UpdatePassword';
import SignInPage from './pages/beforeAuth/SignInPage';
import TransactionHistory from './pages/afterAuth/transactionHistory/TransactionHistory';
import ContectManagement from './pages/afterAuth/ContectManagement/ContectManagement';
import HelpDesk from './pages/afterAuth/helpDesk/HelpDesk';
import HelpDeskRow from './pages/afterAuth/helpDesk/HelpDeskRow';
import UserManageRow from './pages/afterAuth/usermanagement/UserManageRow';
import TransactionHistoryRow from './pages/afterAuth/transactionHistory/TransactionHistoryRow';
import ContentManagementRow from './pages/afterAuth/ContectManagement/ContechManagementRow';
// path="/" element={<RootLayout />}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login Component={Login} />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />
  },
  {
    path: "/validate-otp",
    element: <ValidateOTP />
  },
  {
    path: "/update-password",
    element: <UpdatePassword />
  },
  {
    path: "/sign-in-page",
    element: <SignInPage />
  },
  {
    path: "/",
    element: <PrivateRoute Component={RootLayout} />,
    children: [
      {  
      path: "/",
      // element: <PrivateRoute Component={Dashboard} />,
      element: <Dashboard />
      },
      {
        path: "/user-management",
        element: <UserManagement />
      },
      {
        path: "/user-management-row",
        element: <UserManageRow />
      },
  
      {
        path: "/transaction-history",
        element: < TransactionHistory/>
      },
      {
        path: "/transaction-history-row",
        element: < TransactionHistoryRow/>
      },
      {
        path: "/content-management",
        element: <ContectManagement />
      },
      {
        path: "/content-management-row",
        element: <ContentManagementRow />
      },
      {
        path: "/help-desk",
        element: <HelpDesk />
      },
      {
        path: "/help-desk-row",
        element: <HelpDeskRow />
      },
      

    ]

  }

])

  // createRoutesFromElements(
  //   <Route >
  //     <Route index element={<Login />} />
  //     <Route path="forget-password" element={<ForgetPassword />} />
  //   </Route>
  // )


function App() {
  return (<RouterProvider router={router} />);
}
export default App;
