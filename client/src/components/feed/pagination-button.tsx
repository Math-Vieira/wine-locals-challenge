import { cn } from "@/src/lib";

interface PaginationButtonProps {
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

export const PaginationButton = ({
  fetchNextPage,
  hasNextPage = false,
  isFetchingNextPage,
}: PaginationButtonProps) => {
  const isDisabled = !hasNextPage || isFetchingNextPage;

  return (
    <>
      <button
        className={cn(
          "mx-auto my-2 w-fit rounded-full bg-yellow-600 px-4 py-2 text-sm font-semibold text-white shadow-sm",
          isDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-yellow-700"
        )}
        onClick={() => fetchNextPage()}
        disabled={isDisabled}
      >
        {isFetchingNextPage
          ? "Carregando..."
          : hasNextPage
          ? "Carregar mais"
          : "Nenhum restaurante a mais"}
      </button>
    </>
  );
};