import "./App.css";
import { Users } from "./components/Users";

const App = () => {
  return (
    <div className="h-screen w-screen bg-slate-300">
      <div className="w-full h-full border">
        <div className="flex justify-start items-center flex-col h-full gap-8">
          <h2 className="text-4xl underline">Users List App</h2>
            <Users />
        </div>
      </div>
    </div>
  );
};


export default App;
