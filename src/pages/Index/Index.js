import React from 'react';
import { connect } from 'umi';

function Index() {
  return (
    <div>
      <h1>Page index</h1>
    </div>
  );
}
export default connect()(Index);
