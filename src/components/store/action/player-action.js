import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../utils/apiClient";

export const getPlayers = createAsyncThunk("get-players", async (cat_id = 1) => {
    const res = await apiClient.get(`/player_list?cat_id=${cat_id}`);
    return res.data;
});
