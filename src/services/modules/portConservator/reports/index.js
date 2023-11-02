import { bookingServiceAPI } from "../../../bookingServiceAPI";
import {
  fetchPCSaleReports,
  fetchPCSpotSaleReports,
  fetchLsgdSaleRepots,
  fetchLsgdSpotSaleReports,
  fetchZoneSaleRepots,
  fetchZoneSpotSaleReports,
  downloadPCSpotSaleReports,
  downloadPCSaleReports,
  downloadLsgdSaleRepots,
  downloadLsgdSpotSaleReports,
  downloadZoneSaleReports,
  downloadZoneSpotSaleReports,
} from "./reports";

export const reportsApi = bookingServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchPCSaleReports: fetchPCSaleReports(build),
    fetchPCSpotSaleReports: fetchPCSpotSaleReports(build),
    fetchLsgdSaleRepots: fetchLsgdSaleRepots(build),
    fetchLsgdSpotSaleReports: fetchLsgdSpotSaleReports(build),
    fetchZoneSaleRepots: fetchZoneSaleRepots(build),
    fetchZoneSpotSaleReports: fetchZoneSpotSaleReports(build),
    downloadPCSpotSaleReports: downloadPCSpotSaleReports(build),
    downloadPCSaleReports: downloadPCSaleReports(build),
    downloadLsgdSaleRepots: downloadLsgdSaleRepots(build),
    downloadLsgdSpotSaleReports: downloadLsgdSpotSaleReports(build),
    downloadZoneSaleReports: downloadZoneSaleReports(build),
    downloadZoneSpotSaleReports: downloadZoneSpotSaleReports(build),
  }),
  overrideExisting: false,
});

export const {
  useLazyFetchPCSaleReportsQuery,
  useLazyFetchPCSpotSaleReportsQuery,
  useLazyFetchLsgdSaleRepotsQuery,
  useLazyFetchLsgdSpotSaleReportsQuery,
  useLazyFetchZoneSaleRepotsQuery,
  useLazyFetchZoneSpotSaleReportsQuery,
  useLazyDownloadPCSpotSaleReportsQuery,
  useLazyDownloadPCSaleReportsQuery,
  useLazyDownloadLsgdSpotSaleReportsQuery,
  useLazyDownloadLsgdSaleRepotsQuery,
  useLazyDownloadZoneSpotSaleReportsQuery,
  useLazyDownloadZoneSaleReportsQuery,
} = reportsApi;
