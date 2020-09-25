import React, { ReactNode, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'umi';
import { Spin } from 'antd';
import _ from 'lodash';

interface IProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: IProps) {
  const dispatch = useDispatch();
  // const resources = useSelector((state: any) => state.resources);
  const language = useSelector((state: any) => state.language);
  useEffect(() => {
    //   dispatch({ type: 'resources/loadResources' });
    dispatch({ type: 'language/loadLanguage' });
  }, []);

  // if (_.isEmpty(resources) ) return <Spin />;
  if (_.isEmpty(language)) return <Spin />;
  return (
    <div className="app-wrapper">
      <div>{children}</div>
    </div>
  );
}
