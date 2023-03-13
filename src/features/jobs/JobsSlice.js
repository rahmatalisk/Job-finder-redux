import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { changeJob, deleteJob, getJobs, postJob } from "./jobsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  jobs: [],
  error: "",
  editing: {},
};

//create async thunk thunk ----- start

//fetch Jobs
export const fetchJobs = createAsyncThunk("fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});

//fetch Add Jobs
export const fetchAddJobs = createAsyncThunk("fetchAddJobs", async (data) => {
  const jobs = await postJob(data);
  return jobs;
});
//fetch delete Job
export const fetchDeleteJob = createAsyncThunk(
  "fetchDeleteJob",
  async (data) => {
    const job = await deleteJob(data);
    return job;
  }
);
//fetch update Job
export const fetchChangeJob = createAsyncThunk(
  "fetchChangeJob",
  async ({ id, data }) => {
    const job = await changeJob(id, data);
    return job;
  }
);

//create async thunk thunk ----- Stop

//create slice
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    editActive: (state, action) => {
      console.log(action.payload)
      state.editing = action.payload;
    },
    editInActive: (state, action) => {
      state.editing = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs = action.payload;
      })

      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.error = action.error.message;
      })
      .addCase(fetchAddJobs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAddJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs.push(action.payload);
      })

      .addCase(fetchAddJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(fetchDeleteJob.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchDeleteJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs = state.jobs.filter((jb) => jb.id !== action.meta.arg);
      })

      .addCase(fetchDeleteJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(fetchChangeJob.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchChangeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        const indexToUpdate = state.jobs.findIndex(
          (t) => t.id === action.payload.id
        );

        state.jobs[indexToUpdate] = action.payload;
      })

      .addCase(fetchChangeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});


export const {editActive,editInActive} = jobsSlice.actions;
export default jobsSlice.reducer;
