import { IFestival } from "../interfaces/interfaces";

type FestivalDispatchAction = React.Dispatch<React.SetStateAction<IFestival | null>>

export const festivalService = {
  fetchFestival: async (festivalId: string, setFestival: FestivalDispatchAction) => {
    async function fetchFestival() {
      try {
        const module = await import(`../data/festivals/${festivalId}`) || null;
        const fetchedFestival = module[festivalId] || null;
        setFestival(fetchedFestival);
      } catch (error) {
        console.error('Error fetching festival:', error);
        // TODO add error notification
      }
    }
    fetchFestival();
  }
}