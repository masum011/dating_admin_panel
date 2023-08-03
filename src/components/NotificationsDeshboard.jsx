import React from "react";
const notifydata = [
  { id: 1, name: "Masum Reza", raise: "Raise by query", hour: "2hr ago" },
  { id: 2, name: "Masum Reza", raise: "Raise by query", hour: "2hr ago" },
  { id: 3, name: "Masum Reza", raise: "Raise by query", hour: "2hr ago" },
  { id: 4, name: "Masum Reza", raise: "Raise by query", hour: "2hr ago" },
];

export default function NotificationsDeshboard({ isOpen, isClose }) {
  return (
    <>
      {isOpen && (
        <div className="notification w-[350px] bg-[white] ">
          <div className="notification-head flex justify-between p-4">
            <p className="text-[20px]">Notification</p>
            <p className="text-[#FF6B6B]">Mark all as read</p>
          </div>
          <hr />
          {notifydata.map((data) => (
            <>
              <div className="body-notification flex gap-4 p-4  " key={data.id}>
                <p className="h-2 w-2 bg-[#FF6B6B] self-center"></p>
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  className="h-8 w-8 self-center"
                  alt="notify"
                />
                <div className="name-user">
                  <p className="font-semibold">
                    {data.name}{" "}
                    <span className="font-normal">{data.raise}</span>
                  </p>
                  <p>{data.hour}</p>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>
      )}
    </>
  );
}
