import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../utils/apiClient";

export const getGalleryList = createAsyncThunk("get-galleryList", async () => {
  const res = await apiClient.get(`/gallary_list?cat_id=7`);

  // Handle stringified JSON with invalid trailing content
  let jsonString = res.data;

  // Remove trailing <script> if present
  const scriptIndex = jsonString.indexOf('<script');
  if (scriptIndex !== -1) {
    jsonString = jsonString.substring(0, scriptIndex);
  }

  const parsedData = JSON.parse(jsonString);
  return parsedData.reverse();
});
