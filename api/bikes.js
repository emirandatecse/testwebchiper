import { BASE_API } from "../utils/constants";
import { authFetch } from "../utils/fetch";

export async function getBikeById(id) {
   try {
    const url = `${BASE_API}/bikes/${id}`;
    console.log(url);
    let result = await authFetch(url, null);
    result = result?.bike == null ? [] : result.bike;
    return result;
  } catch (error) {
    return null;
  }
}

export async function getBikesStolen(props) {
  
  const {location} = props;
  try {
    const url = `${BASE_API}/search/count?location=${location}&distance=100&stolenness=stolen`;
    console.log(url);
    let result = await authFetch(url, null);
    return result;
  } catch (error) {
    return null;
  }
}
export async function getBikes(props) {
    const {page, per_page, location, title, description } = props;
    try {
      const url = `${BASE_API}/search?page=${page}&per_page=${per_page}&location=${location}&title=${title}&description=${description}&distance=100&stolenness=stolen`;
      console.log(url);
      let result = await authFetch(url, null);
      result = result?.bikes == null ? [] : result.bikes;
      return result;
    } catch (error) {
      return null;
    }
}