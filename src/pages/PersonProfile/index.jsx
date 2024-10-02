import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';


function PersonProfile({people, hiredPeople, setHiredPeople}) {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const foundPerson =
      hiredPeople.find((p) => p.id.value === id) ||
      people.find((p) => p.id.value === id);
    setPerson(foundPerson);
  }, [id, people, hiredPeople]);

  if (!person) return <p>Loading...</p>;
  

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople}/>
    </article>
  )
}

export default PersonProfile


PersonProfile.propTypes = {
  people: PropTypes.array.isRequired,
  hiredPeople: PropTypes.array.isRequired,
  setHiredPeople: PropTypes.func.isRequired,
}