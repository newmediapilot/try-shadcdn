import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationLocal() {
  return (
      <Pagination>
          <PaginationContent>
              <PaginationItem>
                  <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">9</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">10</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationNext href="#" />
              </PaginationItem>
          </PaginationContent>
      </Pagination>
  );
}
