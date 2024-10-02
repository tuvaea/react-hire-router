import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

function PeopleListItem({person}) {
  const navigate = useNavigate();
  

  return (
    <li>
      <h3>
        <Link to={`/people/${person.id.value}`} >
          {person.name.first} {person.name.last}
        </Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {person.wage && (
        <button onClick={() => navigate(`/people/${person.id.value}`)}>
          Edit
        </button>
      )}
    </li>
  )
}

export default PeopleListItem

PeopleListItem.propTypes = {
  person: PropTypes.object.isRequired,
}

