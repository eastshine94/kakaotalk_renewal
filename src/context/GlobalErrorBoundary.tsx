import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

interface GlobalErrorBoundaryProps {
  children: React.ReactNode;
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      <p>에러가 발생하였습니다.:</p>
      <pre>{error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        다시 시도
      </button>
    </div>
  );
}

export default function GlobalErrorBoundary({
  children
}: GlobalErrorBoundaryProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
}
