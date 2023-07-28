export const TYPE_COLOR = {
    normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
}

export const hexToRGBA = (hex : string, a = 0.2) => {
    if (!hex) return hex;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    return `rgba(${r},${g},${b},${a})`;
  };

  export const COLOR = {
	TYPE: (type : string) => TYPE_COLOR[type],
	LINEAR_GRAD: (type = "normal", opacity = 0.6) =>
	  `linear-gradient(${hexToRGBA(TYPE_COLOR[type], opacity)},#fff)`,
	RGBA: (type = "normal", opacity = 0.6) =>
	  hexToRGBA(TYPE_COLOR[type], opacity),
  };
  
  export const capitalize = (str = "") => {
	if (!str) return "";
	return str.charAt(0).toUpperCase() + str.slice(1);
  };