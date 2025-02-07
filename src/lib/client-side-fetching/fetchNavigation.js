// import fetcher from "@/utils/fetcher";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function getNavigation() {
  const { data, error, isLoading } = useSWR(`/api/navigation`, fetcher);

  return {
    navigation: data?.navigation_links,
    isLoading,
    isError: error,
  };
}
