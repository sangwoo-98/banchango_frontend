import React, { useState, useRef } from 'react';
import {
  Container,
  Wrapper,
  BackgroundImage,
  RegisterContainer,
  ImageContainer,
  RegisterImage,
  HeaderTitleBottom,
  HeaderTitleTop,
  TextContainer,
  TwoElementContainer,
  ItemContainer,
  InputTitle,
  Input,
  DescriptionInput,
  RadioButton,
  RadioButtonContainer,
  RadioButtonLabel,
  CheckboxContainer,
  CheckBoxLine,
  CheckBox,
  AddButton,
  ButtonAndInputContainer,
  RemoveButton,
  SubmitButton,
  ArrayInput,
  InputType,
} from './Register';

import RegisterBackground from '../../assets/images/login-background.jpg';

import MainImage from '../../assets/images/banchango-main.png';

import {
  warehouseTypes,
  mainItemTypes,
  facilityChecks,
  airConditioningTypes,
  availableWeekdays,
  warehouseConditions,
} from '../../static/register';

import { warehouseApi } from '../../api';

const Register = () => {
  const ref = useRef();
  const [inputs, setInputs] = useState({
    name: null,
    space: null,
    address: null,
    addressDetail: null,
    description: null,
    availableWeekdays: null,
    openAt: null,
    closeAt: null,
    availableTimeDetail: null,
    insurances: [],
    cctvExist: false,
    securityCompanies: [],
    doorLockExist: false,
    airConditioningType: null,
    workerExist: false,
    canPark: false,
    mainItemTypes: [],
    warehouseType: null,
    minReleasePerMonth: null,
    deliveryTypes: [],
    warehouseFacilityUsages: [],
    warehouseUsageCautions: [],
    warehouseCondition: [],
  });

  const InputRefs = {
    name: useRef(InputType.NAME),
    space: useRef(InputType.SPACE),
    address: useRef(InputType.ADDRESS),
    addressDetail: useRef(InputType.ADDRESS_DETAIL),
    description: useRef(InputType.DESCRIPTION),
    availableWeekdays: useRef(InputType.AVAIL_WEEK_DAYS),
    openAt: useRef(InputType.OPEN_AT),
    closeAt: useRef(InputType.CLOSE_AT),
    availableTimeDetail: useRef(InputType.AVAIL_TIME_DETAIL),
    insurances: useRef(InputType.INSURANCES),
    cctvExist: useRef(InputType.CCTV_EXIST),
    securityCompanies: useRef(InputType.SECURITY_COMPANIES),
    doorLockExist: useRef(InputType.DOOR_LOCK_EXIST),
    airConditioningType: useRef(InputType.AIR_CONDITIONING_TYPE),
    workerExist: useRef(InputType.WORKER_EXIST),
    minReleasePerMonth: useRef(InputType.MIN_RELEASE_PER_MONTH),
    deliveryTypes: useRef(InputType.DELIVERY_TYPES),
    warehouseFacilityUsages: useRef(InputType.WAREHOUSE_FACILITY_USAGES),
    warehouseUsageCau: useRef(InputType.WAREHOUSE_USAGE_CAUTIONS),
    warehouseCondition: useRef(InputType.WAREHOUSE_CONDITION),
  };

  const sout = (requestBody) => {
    console.log(requestBody);
  };

  const [deliveryTypes, setDeliveryTypes] = useState([
    <ButtonAndInputContainer key={0}>
      <Input
        id="deliveryTypes0"
        className="deliveryTypes"
        name="deliveryTypes"
        type="text"
        width="256px"
        ref={InputRefs.deliveryTypes}
      />
      &nbsp;
      <AddButton onClick={() => addDeliveryTypes()}>추가</AddButton>
    </ButtonAndInputContainer>,
  ]);

  const [warehouseFacilityUsages, setWarehouseFaciltiyUsages] = useState([
    <ButtonAndInputContainer key={0}>
      <ArrayInput
        id="warehouseFacilityUsages0"
        className="warehouseFacilityUsages"
        name="warehouseFacilityUsages"
        type="text"
        width="316px"
        ref={InputRefs.warehouseFacilityUsages}
      />
      <AddButton onClick={() => addWarehouseFacilityUsages()}>추가</AddButton>
    </ButtonAndInputContainer>,
  ]);

  const [warehouseUsageCautions, setWarehouseUsageCautions] = useState([
    <ButtonAndInputContainer key={0}>
      <ArrayInput
        id="warehouseUsageCautions0"
        className="warehouseUsageCautions"
        name="warehouseUsageCautions"
        type="text"
        width="316px"
        ref={InputRefs.warehouseUsageCautions}
      />
      <AddButton onClick={() => addWarehouseUsageCautions()}>추가</AddButton>
    </ButtonAndInputContainer>,
  ]);

  const addDeliveryTypes = () => {
    const arrOfDeliveryTypes = deliveryTypes;
    let key = arrOfDeliveryTypes.length;
    arrOfDeliveryTypes.push(
      <ButtonAndInputContainer key={key}>
        <Input
          id={`deliveryTypes${key}`}
          className="deliveryTypes"
          name="deliveryTypes"
          type="text"
          width="256px"
          ref={InputRefs.deliveryTypes}
        />
        {key === 1 ? (
          <RemoveButton onClick={removeDeliveryTypes}>삭제</RemoveButton>
        ) : null}
      </ButtonAndInputContainer>,
    );
    setDeliveryTypes([...arrOfDeliveryTypes]);
  };

  const addWarehouseFacilityUsages = () => {
    const arrOfWarehouseFacilityUsages = warehouseFacilityUsages;
    let key = arrOfWarehouseFacilityUsages.length;
    arrOfWarehouseFacilityUsages.push(
      <ButtonAndInputContainer key={key}>
        <ArrayInput
          id={`warehouseFacilityUsages${key}`}
          className="warehouseFacilityUsages"
          name="warehouseFacilityUsages"
          type="text"
          width="316px"
          ref={InputRefs.warehouseFacilityUsages}
        />
        {key === 1 ? (
          <RemoveButton onClick={removeWarehouseFacilityUsages}>
            삭제
          </RemoveButton>
        ) : null}
      </ButtonAndInputContainer>,
    );
    setWarehouseFaciltiyUsages([...arrOfWarehouseFacilityUsages]);
  };

  const addWarehouseUsageCautions = () => {
    const arrOfWarehouseUsageCautions = warehouseUsageCautions;
    let key = arrOfWarehouseUsageCautions.length;
    arrOfWarehouseUsageCautions.push(
      <ButtonAndInputContainer key={key}>
        <ArrayInput
          id={`warehouseUsageCautions${key}`}
          className="warehouseUsageCautions"
          name="warehouseUsageCautions"
          type="text"
          width="316px"
          ref={InputRefs.warehouseUsageCautions}
        />
        {key === 1 ? (
          <RemoveButton onClick={removeWarehouseUsageCautions}>
            삭제
          </RemoveButton>
        ) : null}
      </ButtonAndInputContainer>,
    );
    setWarehouseUsageCautions([...arrOfWarehouseUsageCautions]);
  };

  const removeDeliveryTypes = () => {
    let arrOfDeliveryTypes = deliveryTypes;
    arrOfDeliveryTypes.pop();
    setDeliveryTypes([...arrOfDeliveryTypes]);
  };

  const removeWarehouseFacilityUsages = () => {
    let arrOfWarehouseFacilityUsages = warehouseFacilityUsages;
    arrOfWarehouseFacilityUsages.pop();
    setWarehouseFaciltiyUsages([...arrOfWarehouseFacilityUsages]);
  };

  const removeWarehouseUsageCautions = () => {
    let arrOfWarehouseUsageCautions = warehouseUsageCautions;
    arrOfWarehouseUsageCautions.pop();
    setWarehouseUsageCautions([...arrOfWarehouseUsageCautions]);
  };

  return (
    <Container>
      <Wrapper>
        <BackgroundImage
          bgImage={RegisterBackground}
          alt="Background Image."
        ></BackgroundImage>
        <RegisterContainer>
          <ImageContainer>
            <RegisterImage
              bgImage={MainImage}
              alt="Main Image."
            ></RegisterImage>
          </ImageContainer>
          <TextContainer>
            <HeaderTitleTop>온라인 셀러를 위한</HeaderTitleTop>
            <HeaderTitleBottom>통합 물류 파트너</HeaderTitleBottom>
            <TwoElementContainer>
              <ItemContainer>
                <InputTitle>
                  창고명<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="창고명"
                  width="256px"
                  ref={InputRefs.name}
                />
              </ItemContainer>
              <ItemContainer>
                <InputTitle>
                  창고 평수<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                <Input
                  id="space"
                  type="number"
                  name="space"
                  placeholder="창고 평수(평 단위 숫자만 입력)"
                  width="256px"
                  ref={InputRefs.space}
                />
              </ItemContainer>
            </TwoElementContainer>
            <TwoElementContainer>
              <ItemContainer>
                <InputTitle>
                  주소(동 단위까지)<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                <Input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="인천광역시 서구"
                  width="256px"
                  ref={InputRefs.address}
                />
              </ItemContainer>
              <ItemContainer>
                <InputTitle>
                  상세 주소<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                <Input
                  id="addressDetail"
                  type="text"
                  name="addressDetail"
                  placeholder="상세 주소"
                  width="256px"
                  ref={InputRefs.addressDetail}
                />
              </ItemContainer>
            </TwoElementContainer>
            <InputTitle>
              창고 소개(최대 400자)<span style={{ color: 'red' }}>*</span>
            </InputTitle>
            <DescriptionInput
              id="description"
              type="text"
              name="description"
              placeholder="창고"
              width="480px"
              height="240px"
              ref={InputRefs.description}
            />
            <TwoElementContainer>
              <ItemContainer>
                <InputTitle>
                  영업 시작 시간<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                <Input
                  id="openAt"
                  name="openAt"
                  type="text"
                  placeholder="09:00"
                  width="256px"
                  ref={InputRefs.openAt}
                />
              </ItemContainer>
              <ItemContainer>
                <InputTitle>
                  영업 종료 시간<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                <Input
                  id="closeAt"
                  name="closeAt"
                  type="text"
                  placeholder="18:00"
                  width="256px"
                  ref={InputRefs.closeAt}
                />
              </ItemContainer>
            </TwoElementContainer>
            <ItemContainer>
              <InputTitle>
                영업 시간 유의사항<span style={{ color: 'red' }}>*</span>
              </InputTitle>
              <Input
                id="availableTimeDetail"
                name="availableTimeDetail"
                type="text"
                placeholder="물류 센터 사정에 따라 변경될 수 있습니다."
                width="316px"
                ref={InputRefs.availableTimeDetail}
              />
            </ItemContainer>
            <InputTitle>
              영업요일 선택<span style={{ color: 'red' }}>*</span>
            </InputTitle>
            <RadioButtonContainer>
              {availableWeekdays.map((day, index) => (
                <React.Fragment key={index + `AWD_TYPE`}>
                  <RadioButton
                    id={day.id}
                    type="radio"
                    value={day.value}
                    name="availableWeekdays"
                    ref={InputRefs.availableWeekdays}
                  />
                  <RadioButtonLabel htmlFor={day.id}>
                    {day.children}
                  </RadioButtonLabel>
                </React.Fragment>
              ))}
            </RadioButtonContainer>
            <ItemContainer>
              <InputTitle>
                월 최소 출고량<span style={{ color: 'red' }}>*</span>
              </InputTitle>
              <Input
                id="minReleasePerMonth"
                name="minReleasePerMonth"
                type="number"
                placeholder="없으면 1 입력"
                width="316px"
                ref={InputRefs.minReleasePerMonth}
              />
            </ItemContainer>
            <TwoElementContainer>
              <ItemContainer>
                <InputTitle>
                  보험사(1개)<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                <Input
                  type="text"
                  id="insurance"
                  name="insurance"
                  placeholder="화재 보험"
                  width="256px"
                  ref={InputRefs.insurances}
                />
              </ItemContainer>
              <ItemContainer>
                <InputTitle>
                  경비 업체(1개)<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                <Input
                  type="text"
                  id="securityCompanyName"
                  name="securityCompanyName"
                  placeholder="ADT 캡스"
                  width="256px"
                  ref={InputRefs.securityCompanies}
                />
              </ItemContainer>
            </TwoElementContainer>
            <InputTitle>
              업종 선택<span style={{ color: 'red' }}>*</span>
            </InputTitle>
            <RadioButtonContainer>
              {warehouseTypes.map((type, index) => (
                <React.Fragment key={index + `WH_TYPE`}>
                  <RadioButton
                    id={type.id}
                    type="radio"
                    value={type.value}
                    name="warehouseType"
                    ref={InputRefs.warehouseType}
                  />
                  <RadioButtonLabel htmlFor={type.id}>
                    {type.children}
                  </RadioButtonLabel>
                </React.Fragment>
              ))}
            </RadioButtonContainer>
            <InputTitle>
              냉난방 지원 방식 선택<span style={{ color: 'red' }}>*</span>
            </InputTitle>
            <RadioButtonContainer>
              {airConditioningTypes.map((type, index) => (
                <React.Fragment key={index + `AC_TYPE`}>
                  <RadioButton
                    id={type.id}
                    type="radio"
                    value={type.value}
                    name="airConditioningType"
                    ref={InputRefs.airConditioningType}
                  />
                  <RadioButtonLabel htmlFor={type.id}>
                    {type.children}
                  </RadioButtonLabel>
                </React.Fragment>
              ))}
            </RadioButtonContainer>
            <InputTitle>
              대표 품목 선택(최대 3개)<span style={{ color: 'red' }}>*</span>
            </InputTitle>
            <CheckboxContainer>
              {mainItemTypes.map((type, index) => (
                <React.Fragment key={index + 'MAIN_TYPE'}>
                  <CheckBoxLine>
                    <CheckBox
                      id={type.id}
                      type="checkbox"
                      value={type.value}
                      name="mainItemTypes"
                      ref={InputRefs.mainItemTypes}
                    />
                    <RadioButtonLabel htmlFor={type.id}>
                      {type.children}
                    </RadioButtonLabel>
                  </CheckBoxLine>
                  {(index + 1) % 4 === 0 ? <br /> : null}
                </React.Fragment>
              ))}
            </CheckboxContainer>
            <InputTitle>창고 시설 해당사항 선택</InputTitle>
            <CheckboxContainer>
              {facilityChecks.map((check, index) => (
                <React.Fragment key={index + `CHECK`}>
                  <CheckBoxLine>
                    <CheckBox
                      id={check.id}
                      type="checkbox"
                      value={check.value}
                      name="facilityChecks"
                      // ref={InputRefs.warehouseCondition}
                    />
                    <RadioButtonLabel htmlFor={check.id}>
                      {check.children}
                    </RadioButtonLabel>
                  </CheckBoxLine>
                </React.Fragment>
              ))}
            </CheckboxContainer>
            <InputTitle>
              창고 유형 선택(다중 선택 가능)
              <span style={{ color: 'red' }}>*</span>
            </InputTitle>
            <CheckboxContainer>
              {warehouseConditions.map((condition, index) => (
                <React.Fragment key={index + `COND`}>
                  <CheckBoxLine>
                    <CheckBox
                      id={condition.id}
                      type="checkbox"
                      value={condition.value}
                      name="warehouseCondition"
                      ref={InputRefs.warehouseCondition}
                    />
                    <RadioButtonLabel htmlFor={condition.id}>
                      {condition.children}
                    </RadioButtonLabel>
                  </CheckBoxLine>
                </React.Fragment>
              ))}
            </CheckboxContainer>
            <ItemContainer>
              <InputTitle>
                제휴 택배사<span style={{ color: 'red' }}>*</span>
              </InputTitle>
              {deliveryTypes}
            </ItemContainer>
            <ItemContainer>
              <InputTitle>창고 시설 이용 유의사항</InputTitle>
              {warehouseFacilityUsages}
            </ItemContainer>
            <ItemContainer>
              <InputTitle>창고 이용 시 주의사항</InputTitle>
              {warehouseUsageCautions}
            </ItemContainer>
            <SubmitButton>창고 등록 요청하기</SubmitButton>
          </TextContainer>
        </RegisterContainer>
      </Wrapper>
    </Container>
  );
};

export default Register;
