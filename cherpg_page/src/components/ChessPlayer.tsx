import { useEffect, useState } from 'react'

interface ChessPlayer {
  id: number;
  name: string;
  level: number;
  experience: number;
}

export default function ChessPlayers() {
  const [players, setPlayers] = useState<ChessPlayer[]>([])

  useEffect(() => {
    fetch('http://localhost:8000/api/players/')
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(error => console.error('Error fetching players:', error))
  }, [])

  return (
    <div>
      <h1>Chess Players</h1>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.name} - Level: {player.level}, XP: {player.experience}
          </li>
        ))} 
      </ul>
    </div>
  )
}