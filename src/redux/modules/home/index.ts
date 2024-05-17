import { createSelector } from "reselect";


const selectForHomeData = () => (state:any) => state["HOME"]
export const HomeDataSelector=()=>createSelector(selectForHomeData(),state=>state)