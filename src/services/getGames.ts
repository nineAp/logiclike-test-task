import axios, { AxiosResponse } from "axios";
import { API_URL } from "../const";

export interface IGame {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}

export const getGames = async () => {
  try {
    const response: AxiosResponse<IGame[]> = await axios.get(
      `${API_URL}/docs/courses.json`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
