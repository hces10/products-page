import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


export const PaginationProduct = ({ nextPage, previousPage, currentPage }) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={previousPage} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>{currentPage + 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={nextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};