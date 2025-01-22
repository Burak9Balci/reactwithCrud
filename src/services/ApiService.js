import axios from "axios";

class ApiService {
  constructor(url) {
    this.url = url;
  }

  async getAll() {
    try {
      const response = await axios.get(`${this.url}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async makePost(model = "", obj) {
    try {
      const response = await axios.post(`${this.url}/${model}`, obj);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async makePut(model = "", obj) {
    try {
      const response = await axios.put(`${this.url}/${model}`, obj);
      return response.data;
    } catch (error) {
      console.error("POST isteği sırasında hata oluştu:", error);
      throw error;
    }
  }
  async makeDelete(model = "", id) {
    try {
      await axios.delete(`${this.url}/${model}/${id}`);
    } catch (error) {
      console.error("DELETE isteği sırasında hata oluştu:", error);
    }
  }
}
export default ApiService;
