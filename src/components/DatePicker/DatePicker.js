import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import moment from 'moment';

const DatePicker = ({ value, defaultValue, format = 'YYYY/MM/DD', onChange, ...restProps }) => {
  const triggerChange = (date) => {
    if (onChange) {
      const dateString = date ? date.format(format) : date;
      onChange(dateString);
    }
  };

  return (
    <AntdDatePicker
      onChange={triggerChange}
      format={format}
      value={value ? moment(value) : null}
      defaultValue={defaultValue}
      {...restProps}
    />
  );
};

export default DatePicker;
