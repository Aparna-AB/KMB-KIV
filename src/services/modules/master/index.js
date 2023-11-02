import { api } from '../../api'
import addMaster from './addMasterData'

export const masterApi = api.injectEndpoints({
  endpoints: (build) => ({
    addMaster: addMaster(build),
  }),
  overrideExisting: false,
})

export const { useAddMasterMutation } = masterApi
