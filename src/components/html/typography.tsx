import type { ReactNode } from "react";

export function typoP({ children }: { children: ReactNode[] | string }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

export function typoH1({ children }: { children: ReactNode[] | string }) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  );
}

export function typoH2({ children }: { children: ReactNode[] | string }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export function typoH3({ children }: { children: ReactNode[] | string }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function typoH4({ children }: { children: ReactNode[] | string }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}
