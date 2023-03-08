import axios from 'axios';
axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const AuthApi = {
  // реєструємо юзера
  async registerNewUser(userData) {
    const { data } = await axios.post('/auth/register', userData);
    return data;
  },

  async loginUser(signedUserData) {
    // логіним юзера
    const { data } = await axios.post('/auth/login', signedUserData);
    return data;
  },

  async logOutUser() {
    // юзерлогаут
    const { data } = await axios.post('/auth/logout');
    return data;
  },
};

export const DailyApi = {
  // інфа про незареєстрованого юзера
  async getDailyRateInfo(userInfo) {
    const { data } = await axios.post('/daily-rate', userInfo);
    return data;
  },

  async getDailyRateInfoBasedOnId(userId, userInfo) {
    const { data } = await axios.post(`​/daily-rate​/${userId}`, userInfo);
    return data;
  },
};

export const ProductApi = {
  async productSearch(search) {
    const { data } = await axios.get('/product/', { params: { search } });
    console.log(data);
    return data;
  },
};

export const DayApi = {
  async productSearch(productInfo) {
    const { data } = await axios.get('/day', productInfo);
    return data;
  },

  async deleteProduct(productInfo) {
    const { data } = await axios.delete('/day', productInfo);
    return data;
  },

  async getDayInfo(dateInfo) {
    const { data } = await axios.post('/day/info', dateInfo);
    return data;
  },
};

export const UserApi = {
  async getUserInfo() {
    const { data } = await axios.get('/user');
    return data;
  },
};
// 640637c11fbd81052541e3d9

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return token;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};
