import { useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import './Cards.css';

export default function Cards() {

  useEffect(() => {
    fetch('http://127.0.0.1:5000/characters') // Replace with your actual API or local file
      .then((res) => res.json())
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="cards-page">
      <div className="container py-4">
        <h2 className="text-center text-white mb-4">Marvel Character Cards</h2>
        <CharacterList />
      </div>
    </div>
  );
}
