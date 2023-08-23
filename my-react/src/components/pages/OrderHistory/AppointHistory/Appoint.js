import React, { useEffect, useMemo, useState } from "react";
import Error from "../../../atoms/Error/Error";
import axios from "axios";
import styles from "./Appoint.module.css";
import { useTable } from "react-table";
import { COLUMNS } from "./Column";
import Loader from "../../../atoms/Loader/Loader";
import Records from "../UserRecords/Records";

const AppointHistory = () => {
  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const getUserPhone = JSON.parse(localStorage.getItem("regPhone"));

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://server-practo.onrender.com/booking-Data/${getUserPhone}`
        );
        if (response) {
          setBookingData(response.data);
          setLoading(false);
          setShowTable(true);
        } else {
          setShowTable(false);
        }
      } catch (err) {
        setLoading(false);
        setError(true);
        setBookingData([]);
      }
    };
    fetchData();
  }, []);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => bookingData, [bookingData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  console.log(bookingData);
  if (error) {
    return <Error width="80vw" message="OOPs" />;
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : showTable ? (
        <table className={styles.table} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Records />
      )}
    </>
  );
};

export default AppointHistory;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styles from "./Appoint.module.css"
// import Loader from "../../../atoms/Loader/Loader";
// import Error from "../../../atoms/Error/Error";

// const Appoint = () => {
//   const [bookingData, setBookingData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const[error,setError] = useState(false)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:5000/bookingdata");

//         setBookingData(data);
//         setLoading(false);
//       } catch (err) {

//         setError(true)
//         setLoading(false)
//         setBookingData([])
//       }
//     };
//     fetchData();
//   }, []);
//   console.log(bookingData)

//   return (
//    <div  className={styles.appoint_container}>
//     {loading ? <Loader/> : (
//     <table className={styles.table_container}>

//       <thead>
//         <tr>
//           <th>Order Id</th>
//           <th>Status</th>
//           <th>Patient's name</th>
//           <th>Contact</th>
//           <th>Amount</th>
//         </tr>
//       </thead>
//       <tbody>
//         {bookingData.map((item) => (
//           <tr key={item._id}>
//             <td>{item.razorpayOrderId}</td>
//             <td>{item.isPaid}</td>
//             <td>{item.username} </td>
//             <td>{item.phone} </td>
//             <td>{item.amount} </td>
//           </tr>
//         ))}
//       </tbody>

//     </table>
//       )}
//     </div>
//   );
// };

// export default Appoint;
