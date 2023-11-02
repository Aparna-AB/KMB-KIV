import { bookingServiceAPI } from "../../../bookingServiceAPI";
import {
  fetchReIssueList,
  fetchReprint,
  reprintRequest,
  approveRequest,
  downloadReprint
} from "./sandIssueReprint";
export const bankApi = bookingServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchReIssueList: fetchReIssueList(build),
    fetchReprint: fetchReprint(build),
    reprintRequest: reprintRequest(build),
    approveRequest: approveRequest(build),
    downloadReprint:downloadReprint(build)
  }),
  overrideExisting: false,
});

export const {
  useLazyFetchReIssueListQuery,
  useLazyFetchReprintQuery,
  useReprintRequestMutation,
  useApproveRequestMutation,
  useDownloadReprintQuery,useLazyDownloadReprintQuery
} = bankApi;
