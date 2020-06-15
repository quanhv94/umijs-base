import React, { ReactNode } from 'react';
import { useHistory } from 'umi';
import Navigation from '@/utils/navigation';

interface IProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: IProps) {
  const history = useHistory();
  Navigation.setTopLevelHistory(history);
  return <div className="app-wrapper">{children}</div>;
}
