export const firstBuyAction = (symbol, quantity) => (dispatch) => {
  dispatch({
    type: "BUY_STOCK_FROM_ZERO_POSITION",
    payload: {
      symbol,
      quantity,
    },
  });
};

export const buyAction = (symbol, quantity) => (dispatch) => {
  dispatch({
    type: "BUY_STOCK_FROM_SOME_POSITIONS",
    payload: {
      symbol,
      quantity,
    },
  });
};

export const sellAction = (symbol, quantity) => (dispatch) => {
  dispatch({
    type: "SELL_POSITION",
    payload: {
      symbol,
      quantity,
    },
  });
};

export const sellAllAction = (symbol, quantity) => (dispatch) => {
  dispatch({
    type: "SELL_POSITION_ALL",
    payload: {
      symbol,
      quantity,
    },
  });
};
