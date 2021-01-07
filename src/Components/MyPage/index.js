import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckPWModal from './Modal/CheckPW_Modal';
import ChangePWModal from './Modal/ChangePW_Modal';
import {
  Container,
  HelloTitleText,
  UserInfoContainer,
  InfoTitleText,
  LeftBanner,
  InfoBox,
  BannerTextEnabledBox,
  BannerTextDisabledBox,
  ButtonContainer,
  ChangePWButton,
  ConfirmButton,
} from './style';

const MyPage = ({ userInfo, handleSubmit }) => {
  const [checkModalShow, setCheckModalShow] = useState(false);
  const [changeModalShow, setChangeModalShow] = useState(false);

  const [nameIn, setNameIn] = useState(userInfo.name);
  const [telNumberIn, setTelNumberIn] = useState(userInfo.telephoneNumber);
  const [phoneNumberIn, setPhoneNumberIn] = useState(
    userInfo.phoneNumber || '',
  );
  const [companyNameIn, setCompanyNameIn] = useState(userInfo.companyName);

  const closeCheckModal = () => {
    setCheckModalShow(false);
  };
  const closeChangeModal = () => {
    setChangeModalShow(false);
  };
  const getUserInfo = () => {
    const userInfoSet = {
      email: userInfo.email,
      telephoneNumber: telNumberIn,
      phoneNumber: phoneNumberIn,
      companyName: companyNameIn,
      name: nameIn,
      type: userInfo.type,
    };
    return userInfoSet;
  };
  return (
    <>
      <CheckPWModal
        className={'checkPWModal'}
        onClose={closeCheckModal}
        visible={checkModalShow}
        handleSubmit={handleSubmit}
        getUserInfo={getUserInfo}
      />
      <ChangePWModal
        className={'changePWModal'}
        onClose={closeChangeModal}
        visible={changeModalShow}
        handleSubmit={handleSubmit}
        getUserInfo={getUserInfo}
      />
      <Container>
        <LeftBanner>
          <BannerTextEnabledBox>내 프로필</BannerTextEnabledBox>
          <BannerTextDisabledBox
            onClick={() => {
              localStorage.clear();
              window.location.href = '/';
            }}
          >
            로그아웃
          </BannerTextDisabledBox>
        </LeftBanner>
        <UserInfoContainer>
          <HelloTitleText>{userInfo.name}님 안녕하세요.</HelloTitleText>
          <InfoTitleText>이메일</InfoTitleText>
          <InfoBox defaultValue={userInfo.email} disabled />
          <InfoTitleText>성함</InfoTitleText>
          <InfoBox value={nameIn} onChange={(e) => setNameIn(e.target.value)} />
          <InfoTitleText>유선전화 번호</InfoTitleText>
          <InfoBox
            value={phoneNumberIn}
            onChange={(e) => setPhoneNumberIn(e.target.value)}
          />
          <InfoTitleText>휴대전화 번호</InfoTitleText>
          <InfoBox
            value={telNumberIn}
            onChange={(e) => setTelNumberIn(e.target.value)}
          />
          <InfoTitleText>회사명</InfoTitleText>
          <InfoBox
            value={companyNameIn}
            onChange={(e) => setCompanyNameIn(e.target.value)}
          />
          <ButtonContainer>
            <ChangePWButton
              onClick={() => {
                setChangeModalShow(true);
              }}
            >
              비밀번호 변경
            </ChangePWButton>
            <ConfirmButton
              onClick={() => {
                setCheckModalShow(true);
              }}
            >
              확인
            </ConfirmButton>
          </ButtonContainer>
        </UserInfoContainer>
      </Container>
    </>
  );
};
MyPage.propTypes = {
  userInfo: PropTypes.object,
};
export default MyPage;