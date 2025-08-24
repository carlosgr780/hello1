export type Card = {
  id: string
  name: string
  type: 'Grass' | 'Fire' | 'Water' | 'Lightning' | 'Psychic' | 'Fighting' | 'Darkness' | 'Metal' | 'Dragon' | 'Colorless'
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Ultra Rare'
  hp: number
}

export const sampleCards: Card[] = [
  { id: '001', name: 'Bulbasaur', type: 'Grass', rarity: 'Common', hp: 60 },
  { id: '004', name: 'Charmander', type: 'Fire', rarity: 'Common', hp: 60 },
  { id: '007', name: 'Squirtle', type: 'Water', rarity: 'Common', hp: 60 },
  { id: '025', name: 'Pikachu', type: 'Lightning', rarity: 'Uncommon', hp: 70 },
  { id: '039', name: 'Jigglypuff', type: 'Colorless', rarity: 'Common', hp: 60 },
  { id: '052', name: 'Meowth', type: 'Colorless', rarity: 'Common', hp: 60 },
  { id: '066', name: 'Machop', type: 'Fighting', rarity: 'Common', hp: 70 },
  { id: '092', name: 'Gastly', type: 'Psychic', rarity: 'Common', hp: 50 },
  { id: '129', name: 'Magikarp', type: 'Water', rarity: 'Common', hp: 30 },
  { id: '133', name: 'Eevee', type: 'Colorless', rarity: 'Uncommon', hp: 70 },
  { id: '143', name: 'Snorlax', type: 'Colorless', rarity: 'Rare', hp: 130 },
  { id: '149', name: 'Dragonite', type: 'Dragon', rarity: 'Ultra Rare', hp: 160 },
]

export const samplePacks = [
  { id: 'base', name: 'Base Set Redux', cards: 10 },
  { id: 'jungle', name: 'Jungle Echoes', cards: 10 },
  { id: 'fossil', name: 'Fossil Remnants', cards: 10 },
]