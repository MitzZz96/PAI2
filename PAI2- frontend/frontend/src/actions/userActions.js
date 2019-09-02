import axios from "axios";
import {
  GET_ERRORS,
  GET_ADDRESS,
  GET_CONTACT,
  GET_USER,
  GET_CART,
  GET_PRODUCTORDERS,
  GET_CHANGEORDERSTATE,
  GET_USERS,
  GET_CARTS,
  GET_COORDINATES,
  GET_USER_CARTS,
  DELETE_PRODUCTORDER
} from "./types";

export const addNewUser = newUser => async dispatch => {
  try {
    await axios.post(`/api/user`, newUser);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getAddress = idAddress => async dispatch => {
  try {
    const res = await axios.get(`/api/address/get/${idAddress}`);
    dispatch({
      type: GET_ADDRESS,
      payload: res.data
    });
  } catch (error) {}
};

export const getContact = idContact => async dispatch => {
  try {
    const res = await axios.get(`/api/contact/get/${idContact}`);
    dispatch({
      type: GET_CONTACT,
      payload: res.data
    });
  } catch (error) {}
};

export const getUser = uID => async dispatch => {
  try {
    const res = await axios.get(`/api/user/uid/${uID}`);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (error) {}
};

export const getAllUsers = () => async dispatch => {
  try {
    const res = await axios.get(`/api/user/all`);
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (error) {}
};

export const getUserCart = uID => async dispatch => {
  try {
    const res = await axios.get(`/api/cart/user/${uID}`);
    dispatch({
      type: GET_CART,
      payload: res.data
    });
  } catch (error) {}
};

export const getUserCarts = uID => async dispatch => {
  try {
    const res = await axios.get(`/api/cart/user/${uID}/all`);
    dispatch({
      type: GET_USER_CARTS,
      payload: res.data
    });
  } catch (error) {}
};

export const getAllCarts = () => async dispatch => {
  try {
    const res = await axios.get(`/api/cart/all`);
    dispatch({
      type: GET_CARTS,
      payload: res.data
    });
  } catch (error) {}
};

export const addNewProductOrder = newProductOrder => async dispatch => {
  try {
    await axios.post(`/api/productOrder`, newProductOrder);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getUserCartProducts = uID => async dispatch => {
  try {
    const res = await axios.get(`/api/cart/user/orders/${uID}`);
    dispatch({
      type: GET_PRODUCTORDERS,
      payload: res.data
    });
  } catch (error) {}
};

export const changeOrderState = (id, state) => async dispatch => {
  try {
    const res = await axios.get(`/api/cart/${id}/change_state/${state}`);
    dispatch({
      type: GET_CHANGEORDERSTATE,
      payload: res.data
    });
  } catch (error) {}
};

export const getCoordinates = uID => async dispatch => {
  try {
    const res = await axios.get(`/api/user/${uID}/location`);
    dispatch({
      type: GET_COORDINATES,
      payload: res.data
    });
  } catch (error) {}
};

export const deleteProductOrder = id => async dispatch => {
  if (window.confirm("Czy aby na pewno chcesz usunąć produkt z koszyka?")) {
    await axios.delete(`/api/productOrder/delete/${id}`);
    dispatch({
      type: DELETE_PRODUCTORDER,
      payload: id
    });
  }
};
