import { Divider } from "@mui/material";
import React from "react";
const newticketarr = [
  {
    id: 1,
    raisebt: "masum",
    date: "01/02/33221",
    reason: "i dont't know",
    status: "Pending",
  },
  {
    id: 2,
    raisebt: "masum",
    date: "01/02/33221",
    reason: "i dont't know",
    status: "Pending",
  },
  {
    id: 3,
    raisebt: "masum",
    date: "01/02/33221",
    reason: "i dont't know",
    status: "sucess",
  },
  {
    id: 4,
    raisebt: "masum",
    date: "01/02/33221",
    reason: "i dont't know",
    status: "Pending",
  },
  {
    id: 5,
    raisebt: "masum",
    date: "01/02/33221",
    reason: "i dont't know",
    status: "sucess",
  },
  {
    id: 6,
    raisebt: "masum",
    date: "01/02/33221",
    reason: "i dont't know",
    status: "sucess",
  },
];
console.log("🚀 ~ file: NewTicketRaise.jsx:41 ~ newticketarr:", newticketarr);
export default function NewTicketRaise() {
  return (
    <div>
      <table>
        <tr>
          <th>Riased by</th>
          <th>Date and time</th>
          <th>Reason</th>
          <th>Status</th>
        </tr>
        <hr />
        {newticketarr.map((item) => (
            <tr  key={item.id}>
              <td>{item.raisebt}</td>
              <td>{item.date}</td>
              <td>{item.reason}</td>
              <td
                style={{
                  backgroundColor:
                    item.status === "sucess" ? "#93D96F" : "#FBD051",
                }}
              >
                {item.status}
              </td>
            </tr>
        ))}
      </table>
    </div>
  );
}
