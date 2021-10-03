import * as types from "../const/types";

export const getGameGenres = (page = 1, genres) => {
  return {
    type: types.GET_GAME_BEGIN,
    page,
    genres,
  };
};
