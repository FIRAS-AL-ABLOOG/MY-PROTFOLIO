import { Routes, Route } from "react-router-dom";

import {
  NameAndEmage,
  Navbare,
  Maind,
  Consultation,
  Projects,
  BackEnd,
  App as AppPage, // اسم مختلف حتى لا يتعارض مع App الرئيسي
  Websites,
  Footer,
  Tools
} from "./components";
// ======================================================
// الصفحة الرئيسية
// ======================================================

function Home() {
  return (
    <div className="maind-content">
      <div className="header">
        <NameAndEmage />
      <Navbare />
      </div>
   

      <div className="cont">
        <Maind />
        <Consultation />
      </div>

      <Projects />
      <Tools />
      < Footer />
     
    </div>
  );
}

// ======================================================
// App الرئيسي الخاص بالـ Routing
// ======================================================

function App() {
  return (
    <Routes>

      {/* الصفحة الرئيسية */}
      <Route path="/" element={<Home />} />

      {/* صفحة Website المستقلة */}
      <Route
  path="/website"
  element={<Websites />}
/>

      {/* صفحة App المستقلة */}
      <Route
        path="/app"
        element={<AppPage />}
      />

      {/* صفحة BackEnd المستقلة */}
      <Route
        path="/backend"
        element={<BackEnd />}
      />

    </Routes>
  );
}

export default App;