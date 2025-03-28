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

const UserProfile = ({ user }) => {
  return (
    <>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </>
  );
};

const Modal = ({ title, content }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{content}</p>
    </>
  );
};


export {Movie,Button,UserProfile,Modal}
