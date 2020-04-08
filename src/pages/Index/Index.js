import React from 'react';
import { connect } from 'umi';

function Products() {
  return (
    <div>
      <h1>Page index 1</h1>
    </div>
  );
}
export default connect()(Products);
