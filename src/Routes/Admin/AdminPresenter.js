import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Admin from '../../Components/Admin/Admin';

const AdminPresenter = ({
  handleLoginInput,
  handleLoginSubmit,
  refreshUser,
  handleInfoInput,
  handleRegisterSubmit,
  handleMainImageSelect,
}) => (
  <>
    <Helmet>
      <title>반창고 | 관리자 페이지</title>
    </Helmet>
    <Admin
      handleLoginInput={handleLoginInput}
      handleLoginSubmit={handleLoginSubmit}
      refreshUser={refreshUser}
      handleInfoInput={handleInfoInput}
      handleRegisterSubmit={handleRegisterSubmit}
      handleMainImageSelect={handleMainImageSelect}
    />
  </>
);

AdminPresenter.propTypes = {
  handleLoginInput: PropTypes.func.isRequired,
  handleLoginSubmit: PropTypes.func.isRequired,
  refreshUser: PropTypes.func.isRequired,
  handleInfoInput: PropTypes.func.isRequired,
  handleRegisterSubmit: PropTypes.func.isRequired,
  handleMainImageSelect: PropTypes.func.isRequired,
};

export default AdminPresenter;
