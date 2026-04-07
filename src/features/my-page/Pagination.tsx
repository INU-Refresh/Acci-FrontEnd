import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

function buildPageHref(basePath: string, page: number) {
  if (page <= 1) {
    return basePath;
  }
  return `${basePath}?page=${page}`;
}

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  return (
    <div className="flex items-center justify-center gap-5">
      <div className="flex items-center gap-2 text-gray-300">
        {isFirstPage ? (
          <>
            <span className="h-6 w-6 text-gray-300" aria-hidden>
              «
            </span>
            <span className="h-6 w-6 text-gray-300" aria-hidden>
              ‹
            </span>
          </>
        ) : (
          <>
            <Link href={buildPageHref(basePath, 1)} className="h-6 w-6 text-gray-300 hover:text-gray-500" aria-label="첫 페이지">
              «
            </Link>
            <Link href={buildPageHref(basePath, currentPage - 1)} className="h-6 w-6 text-gray-300 hover:text-gray-500" aria-label="이전 페이지">
              ‹
            </Link>
          </>
        )}
      </div>
      <div className="flex items-center gap-3 text-body9">
        {pages.map((page) => (
          <Link
            key={page}
            href={buildPageHref(basePath, page)}
            className={page === currentPage ? "text-gray-600" : "text-gray-300"}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2 text-gray-300">
        {isLastPage ? (
          <>
            <span className="h-6 w-6 text-gray-300" aria-hidden>
              ›
            </span>
            <span className="h-6 w-6 text-gray-300" aria-hidden>
              »
            </span>
          </>
        ) : (
          <>
            <Link href={buildPageHref(basePath, currentPage + 1)} className="h-6 w-6 text-gray-300 hover:text-gray-500" aria-label="다음 페이지">
              ›
            </Link>
            <Link href={buildPageHref(basePath, totalPages)} className="h-6 w-6 text-gray-300 hover:text-gray-500" aria-label="마지막 페이지">
              »
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
