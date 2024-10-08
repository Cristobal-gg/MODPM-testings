import React from 'react';
import DataTable from 'react-data-table-component';

const ComponenteDataTable = () => {

    const columns = [
        {
          name: 'Título',
          selector: row => row.title,
          sortable: true,
        },
        {
          name: 'Año',
          selector: row => row.year,
          sortable: true,
        },
      ];
      
    const data = [
        {
          id: 1,
          title: 'Beetlejuice',
          year: '1988',
        },
        {
          id: 2,
          title: 'Ghostbusters',
          year: '1984',
        },
      ];

    return(
        <DataTable columns={columns}
        data={data}
        pagination
        highlightOnHover />
    );


};

export default ComponenteDataTable;
  