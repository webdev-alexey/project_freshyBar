import { API_URL } from "./config.js";

export const getData = async () => {
  const response = await fetch(`${API_URL}api/goods`);
  const data = await response.json();
  return data;
};

export const sentData = async (data) => {
  return await fetch(`${API_URL}api/order`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
