
import {masterServiceAPI} from "../../../masterServiceAPI";
import { addHoliday, fetchAllHoliday, fetchHoliday } from "./holiday";

export const AddHolidayApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addHoliday: addHoliday(build),
    fetchHoliday: fetchHoliday(build),
    fetchAllHoliday: fetchAllHoliday(build),
  }),
  overrideExisting: false,
});

export const {
  useAddHolidayMutation,
  useLazyFetchHolidayQuery,
  useLazyFetchAllHolidayQuery
} = AddHolidayApi;