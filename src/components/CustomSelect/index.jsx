import React, { useEffect, useState } from 'react';
import ReactSelect from 'react-select';
import axios from 'axios';

const CustomSelect = ({ field, form }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.11.13.197:8080/api/supervisors');

        console.log(response.data);
        // Assuming the response data is an array of objects with value and label properties
        setOptions(
          response.data.map((item) => ({
            id: item.id,
            firstName: item.firstName,
            lastName: item.lastName,
            label: item.firstName + ' ' + item.lastName,
          }))
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <ReactSelect
      {...field}
      options={options}
      placeholder="Select Category"
      isClearable={false}
      isSearchable
      isMulti={false}
      onChange={(option) => form.setFieldValue(field.name, option)}
    />
  );
};

export default CustomSelect;
