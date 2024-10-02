import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


function HireForm({person, hiredPeople, setHiredPeople}) {
  const [wage, setWage] = useState(0);
  const existingPerson = hiredPeople.find(p => p.id.value === person.id.value);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (existingPerson) {
      setHiredPeople((prevHiredPeople) =>
        prevHiredPeople.map(p =>
          p.id.value === person.id.value ? { ...p, wage: wage } : p
        )
      );
    } else {
      setHiredPeople((prevHiredPeople) => [
        ...prevHiredPeople,
        { ...person, wage: wage }
      ]);
    }
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="number"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
        required
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm

HireForm.propTypes = {
  person: PropTypes.object.isRequired,
  setHiredPeople: PropTypes.func.isRequired,
  hiredPeople: PropTypes.array.isRequired,
}