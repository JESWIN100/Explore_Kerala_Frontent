// src/store/authStore.js
import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuth: !!localStorage.getItem("product-token"),
  username: localStorage.getItem("product-username") || '', // Initialize with stored username
  loginAuth: (token, username) => {
    localStorage.setItem("product-token", token);
    localStorage.setItem("product-username", username);
    set({ isAuth: true, username });
  },
  logoutAuth: () => {
    localStorage.removeItem("product-token");
    localStorage.removeItem("product-username");
    set({ isAuth: false, username: '' });
  },
}));

export default useAuthStore;
