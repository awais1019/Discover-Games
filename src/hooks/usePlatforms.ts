import { useData } from "./useData"
import { PlatForm } from "./useGames"

export const usePlatforms=()=>useData<PlatForm>("/platforms/lists/parents")
