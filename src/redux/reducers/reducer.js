let defaultState = {
  "Пепперони Фреш с перцем": 0,
  Сырная: 0,
  "Цыпленок барбекю": 0,
  "Кисло-сладкий цыпленок": 0,
  "Чизбургер-пицца": 0,
  "Крэйзи пепперони": 0,
  Пепперони: 0,
  Маргарита: 0,
  "Четыре сезона": 0,
  "Овощи и грибы 🌱": 0,
};

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_PEPPER":
      return {
        ...state,
        "Пепперони Фреш с перцем": payload,
      };
    case "SET_CHEESE":
      return {
        ...state,
        Сырная: payload,
      };
    case "SET_CHICKEN": {
      return {
        ...state,
        "Цыпленок барбекю": payload,
      };
    }
    case "SET_TASTE_CHICKEN": {
      return {
        ...state,
        "Кисло-сладкий цыпленок": payload,
      };
    }
    case "SET_CHEESEBURGER_PIZZA": {
      return {
        ...state,
        "Чизбургер-пицца": payload,
      };
    }
    case "SET_CRAZY_PEPPER": {
      return {
        ...state,
        "Крэйзи пепперони": payload,
      };
    }
    case "SET_PEPPER_PIZZA": {
      return { ...state, Пепперони: payload };
    }
    case "SET_MARGARITA": {
      return { ...state, Маргарита: payload };
    }
    case "SET_FOUR_SEASON": {
      return { ...state, "Четыре сезона": payload };
    }
    case "SET_VEGETABLES_PIZZA": {
      return { ...state, "Овощи и грибы 🌱": payload };
    }
    default:
      return state;
  }
};

export default reducer;
