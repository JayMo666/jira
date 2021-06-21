import { AuthenticatedApp } from "authenticated-app";
import { useAuth } from "context/auth-context";
import { UnauthenticatedApp } from "unauthenticated-app";
// import { TsReactTest } from "./test/try-use-array";
function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
