export const useRouter = () => ({
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  refresh: jest.fn(),
  query: {},
  pathname: '',
});

export const Router = {
  push: jest.fn(),
  replace: jest.fn(),
};

