// CharacterCarousel.jsx
import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import SuperheroCard from './SuperheroCard';
import './CharacterCarousel.css';

export default function CharacterCarousel() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/characters')
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.error('Failed to fetch characters:', err));
  }, []);

  return (
    <section className="character-carousel-section">
      <h2 className="carousel-title">Character Cards</h2>
      <Carousel className="character-carousel" interval={3000} fade>
        {characters.map((character) => (
          <Carousel.Item key={character.id}>
            <div className="carousel-card-wrapper">
              <SuperheroCard
                character={character}
                onEdit={() => {}}
                onDelete={() => {}}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
