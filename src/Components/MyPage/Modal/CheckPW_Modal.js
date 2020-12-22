import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ModalWrapper,
  ModalOverlay,
  ModalInner,
  PWTitleText,
  PWInputBox,
  ConfirmButton,
} from './Modal_Styles';
import { message } from 'antd';
import sha256 from 'crypto';

export const CheckPWModal = ({
  className,
  onClose,
  visible,
  handleSubmit,
  getUserInfo,
}) => {
  const [PW, setPW] = useState('');
  const confirmClicked = async () => {
    message.loading('로딩중입니다.');
    setPW('');
    const hashedPW = sha256.createHash('sha256').update(PW).digest('hex');
    const targetInfo = { ...getUserInfo(), password: hashedPW };
    handleSubmit(targetInfo, hashedPW, onClose);
  };

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={onMaskClick}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          <PWTitleText>비밀번호 확인</PWTitleText>
          <PWInputBox
            type="password"
            placeholder={'현재 비밀번호 입력'}
            value={PW}
            onChange={(e) => {
              setPW(e.target.value);
            }}
          />
          <ConfirmButton onClick={confirmClicked}>확인</ConfirmButton>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};
CheckPWModal.propTypes = {
  visible: PropTypes.bool,
};

export default CheckPWModal;
