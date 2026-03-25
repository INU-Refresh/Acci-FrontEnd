export const useRouter = () => ({
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  refresh: jest.fn(),
});

export const usePathname = () => '';

export const useSearchParams = () => ({
  get: jest.fn(() => null),
  toString: jest.fn(() => ''),
});

export const useParams = () => ({});

export const redirect = jest.fn();

