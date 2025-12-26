import React from "react";

function Layout({ children }) {
  return (
    <div style={{ margin: "20px" }}>
      {children}
    </div>
  );
}

export default Layout;

<Layout>
  <h2>Main Content</h2>
  <p>This is inside layout</p>
</Layout>