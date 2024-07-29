import { createSlice } from "@reduxjs/toolkit";
import { act, useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialState: any[] = [];

function useFetchAllData(state) {
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        initialState.push(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser();
  }, []);
}

export const handleDataForm = createSlice({
  name: "handleForm",
  initialState,
  reducers: {
    fetchData: useFetchAllData,
    submitData: (state, action) => {
      const result = action.payload;
      async function handleCreate() {
        try {
          const response = await fetch("http://localhost:3000/users/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...initialState,
              result,
            }),
          });
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
});

export const { fetchData } = handleDataForm.actions;

export default handleDataForm.reducer;
