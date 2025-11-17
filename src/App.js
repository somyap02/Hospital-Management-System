import React, {useState} from "react";

const branches = [
  { id: 1, name: "Central Hospital", beds: 150 },
  { id: 2, name: "City Clinic", beds: 60 },
  { id: 3, name: "Metro Diagnostics", beds: 40 },
];

const patients = [
  { id: 1, name: "Manish", age: 22, ward: "General" },
  { id: 2, name: "Rohit", age: 32, ward: "ICU" },
  { id: 3, name: "Somya", age: 27, ward: "Maternity" },
];

export default function App() {
  const [view, setView] = useState("dashboard");

  return (
    <div className="app">
      <header>
        <h1>Hospital Management System — Demo Frontend</h1>
        <nav>
          <button onClick={()=>setView("dashboard")}>Dashboard</button>
          <button onClick={()=>setView("branches")}>Branches</button>
          <button onClick={()=>setView("patients")}>Patients</button>
        </nav>
      </header>

      <main>
        {view === "dashboard" && (
          <section>
            <h2>Overview</h2>
            <p>Total Branches: {branches.length}</p>
            <p>Total Patients: {patients.length}</p>
          </section>
        )}

        {view === "branches" && (
          <section>
            <h2>Branches</h2>
            <ul>
              {branches.map(b => (
                <li key={b.id}>{b.name} — Beds: {b.beds}</li>
              ))}
            </ul>
          </section>
        )}

        {view === "patients" && (
          <section>
            <h2>Patients</h2>
            <table>
              <thead>
                <tr><th>ID</th><th>Name</th><th>Age</th><th>Ward</th></tr>
              </thead>
              <tbody>
                {patients.map(p => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.age}</td>
                    <td>{p.ward}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </main>

      <footer></footer>
    </div>
  );
}
