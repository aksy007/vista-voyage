// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

const Home = () => <div>Home Page</div>;
const Blogs = () => <div>Blogs Page</div>;
const Account = () => <div>Account Page</div>;

function App() {
  console.log("App component rendered");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
