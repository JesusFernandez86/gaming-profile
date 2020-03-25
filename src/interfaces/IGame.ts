export interface IGame {
  id: number;
  name: string;
  picturePath: string;
  added: boolean;
  isHovering: boolean;
}
export interface IGames {
  byId: Record<number, IGame>; 
  order: number[];
}