import React, {useState} from "react";
import Header from "../header/Header";

const Layout = ({renderComp}) => {

  const [isReleased, setIsReleased] = useState(false);
  const [refreshHeader, setRefreshHeader] = useState(false);

  const PageComponent = renderComp;

  return (
    <div>
      <Header isReleased={isReleased} setRefreshHeader={setRefreshHeader} refreshHeader={refreshHeader}/>
      <PageComponent setIsReleased = {setIsReleased} />
    </div>
  );
};

export default Layout;
