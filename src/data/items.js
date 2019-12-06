import items from './items.json'

export const load = (favoriteIds = []) => {
  return (items.map(sp => {
    sp.isFavorite = favoriteIds.includes(sp.id);

    return sp;
  }));
}