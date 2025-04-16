const Movie = ({title,year,rating='Not Rated'}) => {
  return (
    <>
      <h2>{title} ({year})</h2>
      <p>Rating: {rating}</p>
    </>
  );
};

export default Movie;

const Button = ({ label }) => {
  return (<button>{label}</button>);
};

export function UserProfile({ name = 'Guest', email = 'N/A', age = 'N/A' }) {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}

const Modal = ({ title, content }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{content}</p>
    </>
  );
};


export {Movie,Button,Modal}
