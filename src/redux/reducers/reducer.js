let defaultState = {
  "Пепперони Фреш с перцем": {
    name: "Пепперони Фреш с перцем",
    count: 0,
    prices: 0,
    type: "",
    size: "",
  },
  Сырная: {
    name: "Сырная",
    count: 0,
    prices: 0,
    type: "",
    size: "",
  },
  "Цыпленок барбекю": {
    name: "Цыпленок барбекю",
    count: 0,
    prices: 0,
    type: "",
    size: "",
  },
  "Кисло-сладкий цыпленок": {
    name: "Кисло-сладкий цыпленок",
    count: 0,
    prices: 0,
    type: "",
    size: "",
  },
  "Чизбургер-пицца": {
    name: "Чизбургер-пицца",
    count: 0,
    prices: 0,
    type: "",
    size: "",
  },
  "Крэйзи пепперони": {
    name: "Крэйзи пепперони",
    count: 0,
    prices: 0,
    type: "",
    size: "",
  },
  Пепперони: {
    name: "Пепперони",
    count: 0,
    prices: 0,
    type: "",
    size: "",
  },
  Маргарита: {
    name: "Маргарита",
    count: 0,
    prices: 0,
    type: "",
    size: "",
  },
  "Четыре сезона": {
    name: "Четыре сезона",
    count: 0,
    prices: 0,
    type: "",
    size: "",
  },
  "Овощи и грибы 🌱": {
    name: "Овощи и грибы 🌱",
    count: 0,
    prices: 0,
    type: "",
    size: "",
  },
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
    case "DELETE_PIZZA": {
      return {
        ...state,
        payload: 0,
      };
    }
    default:
      return state;
  }
};

export default reducer;
