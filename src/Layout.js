import { Outlet } from "react-router-dom";

import { getUserAuth } from "./actions";
import { useEffect } from "react";
import { connect } from "react-redux";
const Layout = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(null, mapDispatchToProps)(Layout);
