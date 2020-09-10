import React, { ReactNode, useEffect } from 'react';
// import { useSelector, useDispatch } from 'umi';
// import { Spin } from 'antd';
import _ from 'lodash';

interface IProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: IProps) {
  // const dispatch = useDispatch();
  // const resources = useSelector((state: any) => state.resources);

  // useEffect(() => {
  //   dispatch({ type: 'resources/loadResources' });
  // }, []);

  // if (_.isEmpty(resources)) return <Spin />;
  return <div className="app-wrapper">{children}</div>;
}
