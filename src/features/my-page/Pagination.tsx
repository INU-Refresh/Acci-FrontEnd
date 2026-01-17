type PaginationProps = {
  currentPage: number;
  pages: number[];
};

export function Pagination({ currentPage, pages }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="flex items-center gap-2 text-gray-300">
        <button type="button" className="h-6 w-6 text-gray-300" aria-label="첫 페이지">
          «
        </button>
        <button type="button" className="h-6 w-6 text-gray-300" aria-label="이전 페이지">
          ‹
        </button>
      </div>
      <div className="flex items-center gap-3 text-body9">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            className={page === currentPage ? "text-gray-600" : "text-gray-300"}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 text-gray-300">
        <button type="button" className="h-6 w-6 text-gray-300" aria-label="다음 페이지">
          ›
        </button>
        <button type="button" className="h-6 w-6 text-gray-300" aria-label="마지막 페이지">
          »
        </button>
      </div>
    </div>
  );
}
