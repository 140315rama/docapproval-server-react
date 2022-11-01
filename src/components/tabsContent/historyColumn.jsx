export const getGridColumns = formatters => [
  {
    id: 'id',
    name: 'ID',
    formatter: formatters?.rowNumber,
    sortable: true,
    readonly: true,
    width: 50
  },
  {
    id: 'documentId',
    name: 'Document Id',
    field: 'documentId',
    sortable: false,
    readonly: true,
    formatter: formatters?.text
  },
  {
    id: 'documentType',
    name: 'Document Type',
    field: 'documentType',
    sortable: false,
    readonly: true,
    formatter: formatters?.text
  },
  {
    id: 'description',
    name: 'Description',
    field: 'description',
    sortable: false,
    readonly: true,
    formatter: formatters?.text
  },
  {
    id: 'dateCreated',
    name: 'Date Created',
    field: 'dateCreated',
    formatter: formatters?.date
  },
  {
    id: 'unit',
    name: 'Unit',
    field: 'unit',
    sortable: false,
    readonly: true,
    formatter: formatters?.text
  }
];