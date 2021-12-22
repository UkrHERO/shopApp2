import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

// export const getProducts = createAsyncThunk('products/get', async () => {
//   try {
//     const { data } = await axios.get('/products');

//     return data;
//   } catch (error) {
//     alert(error.message);
//   }
// });

export async function getProducts() {
  const { data } = await axios.get(`/products`);
  return data;
}

export async function deleteProduct(id) {
  const { data } = await axios.delete(`/products/${id}`);
  return data;
}

export async function setProduct(all) {
  const { data } = await axios.post(`/products`, all);
  return data;
}

export async function getProductById(id) {
  const { data } = await axios.get(`/products/${id}`);
  return data;
}

export async function editProductById(id) {
  const { data } = await axios.patch(`/products/${id}`);
  return data;
}
