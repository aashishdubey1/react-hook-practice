import UpdateUser from "./hooks/useContext/UpdateUser"
import { UserContext, UserProvider } from "./hooks/useContext/UserContext"
import UserProfile from "./hooks/useContext/UserProfile"
import BasicEffect from "./hooks/useEffect/BasicEffect"
import CounterEffect from "./hooks/useEffect/CounterEffect"
import FetchDataEffect from "./hooks/useEffect/FetchDataEffect"
import Counter from "./hooks/useReducer/Counter"

function App() {
  

  return (
    <>
      {/* <BasicEffect /> */}
      {/* <CounterEffect /> */}
      {/* <FetchDataEffect /> */}
      {/* <UserProvider>
        <UserProfile/>
        <UpdateUser />
      </UserProvider> */}

        <Counter />

    </>
  )
}

export default App
