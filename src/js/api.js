import axios from 'axios';

const API_KEY = '35262385-2c9229883c996cd868b84315c';
const BASE_URL = 'https://pixabay.com/api/';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.PER_PAGE = 40;
  }

  async fetchGallery() {
    const params = {
      key: API_KEY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.page,
      per_page: this.PER_PAGE,
    };

    try {
      const response = await axios.get(BASE_URL, { params });
      const data = response.data;
      this.incrementPage();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
