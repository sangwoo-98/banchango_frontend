import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Categories = {
  CLOTH: 'CLOTH',
  COSMETIC: 'COSMETIC',
  FURNITURE: 'FURNITURE',
  GENERAL: 'GENERAL_MERCHANDISE',
  FOOD: 'TEMPERATURE_SENSITIVE',
  JEWELRY: 'ACCESSORY',
};

const WarehouseConditions = {
  ROOM_TEMPERATURE: 'ROOM_TEMPERATURE',
  LOW_TEMPERATURE: 'LOW_TEMPERATURE',
  BONDED: 'BONDED',
  SAVAGE: 'SAVAGE',
  HAZARDOUS: 'HAZARDOUS',
  SELF_STORAGE: 'SELF_STORAGE',
  CONTAINER: 'CONTAINER',
};

const WarehouseTypes = {
  THREEPL: 'THREEPL',
  FULFILLMENT: 'FULFILLMENT',
};

const types = (warehouseType) => {
  switch (warehouseType) {
    case WarehouseTypes.THREEPL:
      return '3PL';
    case WarehouseTypes.FULFILLMENT:
      return '풀필먼트';
    default:
      return '';
  }
};

const condition = (warehouseCondition) => {
  switch (warehouseCondition) {
    case WarehouseConditions.ROOM_TEMPERATURE:
      return '상온창고';
    case WarehouseConditions.LOW_TEMPERATURE:
      return '저온창고';
    case WarehouseConditions.BONDED:
      return '보세창고';
    case WarehouseConditions.SAVAGE:
      return '야외창고';
    case WarehouseConditions.HAZARDOUS:
      return '위험창고';
    case WarehouseConditions.SELF_STORAGE:
      return '셀프창고';
    case WarehouseConditions.CONTAINER:
      return '컨테이너';
    default:
      return '';
  }
};

const categoryName = (category) => {
  switch (category.toString().toUpperCase()) {
    case Categories.CLOTH:
      return '의류 창고 ';
    case Categories.COSMETIC:
      return '화장품 창고 ';
    case Categories.FURNITURE:
      return '가구 창고 ';
    case Categories.GENERAL:
      return '잡화 창고 ';
    case Categories.FOOD:
      return '식품 창고 ';
    case Categories.JEWELRY:
      return '악세사리 창고 ';
    default:
      return '';
  }
};

const convertDeliveryTypes = (deliveryTypes) => {
  let size = deliveryTypes.length;

  if (size >= 2) {
    return (
      <span>
        {deliveryTypes[0]}
        <br />외 {size - 1} 곳
      </span>
    );
  } else {
    return deliveryTypes[0];
  }
};

const MainTitleContainer = styled.div`
  margin-top: 70px;
`;

const MainTitle = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 1.3em;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1920px;
  padding: 30px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 481px) {
    margin-left: -10px;
    margin-right: -10px;
  }
  @media screen and (min-width: 768px) {
    margin-right: -10px;
    margin-left: -10px;
  }
  @media screen and (min-width: 992px) {
    margin-right: -10px;
    margin-left: -10px;
  }
`;

const ItemWrapper = styled.div`
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  @media screen and (min-width: 481px) {
    width: 50%;
    padding-right: 10px;
    padding-left: 10px;
  }
  @media screen and (min-width: 768px) {
    width: 33.33333333333333%;
    padding-right: 10px;
    padding-left: 10px;
  }
  @media screen and (min-width: 992px) {
    width: 25%;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

const Item = styled.div`
  position: relative;
  background-color: rgb(255, 255, 255);
  padding: 0px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
  transition: transform 0.2s ease 02;
  margin-bottom: 30px;
`;

const Image = styled.div`
  width: 100%;
  height: 31vh;
  background-size: cover;
  background-position: center center;
  position: relative;
  background-image: url(${(props) => props.bgImage});
`;

const InformationWrapper = styled.div`
  position: relative;
  padding: 15px;
  color: #333333;
`;

const LinkToDetailPage = styled.a`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const Address = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 1.4em;
  min-height: 20px;
`;

const Name = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 1.4em;
  height: 56px;
  font-weight: bold;
  font-family: 'Nanum Gothic', sans-serif;
`;

const StickerContainer = styled.div`
  display: flex;
`;

const StickerWrapper = styled.div`
  flex: 1 1 0%;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1px solid lightgray;
`;

const Stickers = styled.div`
  display: inline-block;
  min-height: 30px;
`;

const Sticker = styled.span`
  font-size: 8px;
  display: inline-block;
  background-color: rgb(238, 240, 246);
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: 5px;
`;

const AdditionInformationWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  min-height: 40px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

const MonthlyMinimumExports = styled.div`
  border-left: none;
  flex: 1 1 0%;
  text-align: center;
`;

const InfoTitle = styled.span`
  font-size: 10px;
`;

const InfoValue = styled.span`
  font-size: 12px;
`;

const MinReleaseValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #1d489b;
`;

const AdditionalInfo = styled.div`
  flex: 1 1 0%;
  text-align: center;
  border-left: 1px solid rgb(229, 232, 240);
`;

const Category = ({ warehouses, category }) => {
  return (
    <>
      <MainTitleContainer>
        <MainTitle>{categoryName(category)} 리스트</MainTitle>
      </MainTitleContainer>
      <Container>
        <ItemContainer>
          {warehouses.map((warehouse, index) => (
            <ItemWrapper key={index}>
              <Item
                onClick={() =>
                  (window.location.href = `/warehouses/${warehouse.warehouseId}`)
                }
              >
                <Image bgImage={warehouse.mainImageUrl}></Image>
                <InformationWrapper>
                  <LinkToDetailPage
                    href={`/warehouses/${warehouse.warehouseId}`}
                  >
                    <Address>{warehouse.address}</Address>
                    <Name>
                      <div>{warehouse.name}</div>
                    </Name>
                  </LinkToDetailPage>
                  <StickerContainer>
                    <StickerWrapper>
                      <Stickers>
                        <Sticker>
                          {condition(warehouse.warehouseCondition[0])}
                        </Sticker>
                        <Sticker>{types(warehouse.warehouseType)}</Sticker>
                      </Stickers>
                    </StickerWrapper>
                  </StickerContainer>
                  <AdditionInformationWrapper>
                    <MonthlyMinimumExports>
                      <InfoTitle>월 최소 출고량</InfoTitle>
                      <br />
                      <MinReleaseValue>
                        {warehouse.minReleasePerMonth}
                      </MinReleaseValue>
                    </MonthlyMinimumExports>
                    <AdditionalInfo>
                      <InfoTitle>평수</InfoTitle>
                      <br />
                      <InfoValue>{warehouse.totalArea}</InfoValue>
                    </AdditionalInfo>
                    <AdditionalInfo>
                      <InfoTitle>택배사</InfoTitle>
                      <br />
                      <InfoValue>
                        {convertDeliveryTypes(warehouse.deliveryTypes)}
                      </InfoValue>
                    </AdditionalInfo>
                  </AdditionInformationWrapper>
                </InformationWrapper>
              </Item>
            </ItemWrapper>
          ))}
        </ItemContainer>
      </Container>
    </>
  );
};

Category.propTypes = {
  warehouses: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};

export default Category;