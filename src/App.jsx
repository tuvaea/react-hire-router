import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Route, Routes, Link, Navigate, useParams } from 'react-router-dom';
import PersonProfile from './pages/PersonProfile';

function NavigateToPeople() {
  const { id } = useParams();  
  return <Navigate to={`/people/${id}`} replace />; 
}

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([])

  const fetchPeople = async () => {
    const response = await fetch(
      `https://randomuser.me/api/?results=50`
    );
    const data = await response.json();
    setPeople(data.results);
  }

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
            <div>
              <Link to='/'>Dashboard</Link>
            </div>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Dashboard people={people} hiredPeople={hiredPeople}/> }/>
        <Route path='/people/:id' 
        element={
          <PersonProfile
          people={people}
          hiredPeople={hiredPeople}
          setHiredPeople={setHiredPeople}
        />}
        />
        <Route 
          path='/view/:id' 
          element={
            <NavigateToPeople />
          }
        />
      </Routes>
    </>
  )
}
