import React from "react";

function NotificationBadge() {
  const count = 3;

  return (
    <>
      {count > 0 && <span>🔔 {count}</span>}
    </>
  );
}

export default NotificationBadge;