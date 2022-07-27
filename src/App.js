import './App.css';
import UserCard from './components/UserCard'
import ProfileLucas from './assets/perfil.jpg'

export default function App() {
  return (
    <div className='container'>
      <UserCard
        name="Lucas Carvalho"
        jobRole="Developer Fullstack"
        avatar={ProfileLucas}
      />
      <UserCard
        name="Ebby Chaner"
        jobRole="Developer Backend"
        avatar="https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_640.jpg"
      />
    </div>
  );
};

