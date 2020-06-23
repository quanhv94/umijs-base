import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: IProps) {
  return <div className="app-wrapper">{children}</div>;
}
