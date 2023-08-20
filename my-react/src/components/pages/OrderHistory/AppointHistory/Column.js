export const COLUMNS = [
    {
        Header:"Order Id",
        accessor:"razorpayOrderId"

    },
    {
        Header:"Patient's Name",
        accessor:"patient_name"
  
    },
    {
        Header:"Contact",
        accessor:"phone"
    },
    {
        Header:"Amount",
        accessor:"amount"

    },
    {
        Header: 'Created At',
    accessor: 'date', // Access the "date" object
    Cell: ({ value }) => {
      const formattedDate = value.date;
      const formattedTime = value.time;

      return (
        <div >
          <span>{formattedDate}</span>   
          <span style={{paddingLeft:"0.5rem"}}>{formattedTime}</span>
        </div>
      );
    },
    },
    {
        Header:"Status",
        accessor:"status"
  
    },
   
]