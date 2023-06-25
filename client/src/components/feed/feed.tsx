import { useFeedRestaurants } from "@/src/hooks";
import { Items } from "./items";
import { PaginationButton } from "./pagination-button";
import { Title } from "./title";

export const Feed = () => {
  const {
    restaurants,
    error,
    totalCount,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useFeedRestaurants();

  return (
    <div className="container flex flex-col justify-center gap-4">
      <Title totalCount={totalCount} />
      <Items restaurants={restaurants} />

      <PaginationButton
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  );
};