import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

export interface Card {
  id: string;
  title: string;
  description: string;
}

interface AppContextType {
  data: Card[];
  filteredData: Card[];
  loading: boolean;
  error: string | null;
  searchCards: (query: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Card[]>([]);
  const [filteredData, setFilteredData] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8000/cards");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
      setFilteredData(result); // Initialize filteredData with the full dataset
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const searchCards = useCallback(
    (query: string) => {
      if (query.trim() === "") {
        setFilteredData(data);
      } else {
        const lowercasedQuery = query.toLowerCase();
        setFilteredData(
          data.filter(
            (card) =>
              card.title.toLowerCase().includes(lowercasedQuery) ||
              card.description.toLowerCase().includes(lowercasedQuery)
          )
        );
      }
    },
    [data]
  );

  const contextValue = useMemo(
    () => ({ data, filteredData, loading, error, searchCards }),
    [data, filteredData, loading, error, searchCards]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
