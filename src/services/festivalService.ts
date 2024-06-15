import { modifyFestivalDaysTimes } from "../helpers/Stages.helpers";
import { IFestivalModified } from "../interfaces/interfaces";

type FestivalDispatchAction = React.Dispatch<React.SetStateAction<IFestivalModified | null>>

export const festivalService = {
  fetchFestival: async (festivalId: string, setFestivalData: FestivalDispatchAction) => {
    async function fetchFestival() {
      try {
        const module = await import(`../data/festivals/${festivalId}`) || null;
        const fetchedFestival = module[festivalId] || null;
        setFestivalData({
          ...fetchedFestival,
          festivalDays: modifyFestivalDaysTimes(fetchedFestival.festivalDays)
        });
      } catch (error) {
        console.error('Error fetching festival:', error);
        // TODO add error notification
      }
    }
    fetchFestival();
  }
}