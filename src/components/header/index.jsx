import styled from "styled-components";

export default function HeaderComponent() {
  return (
    <Header>
      <HeaderZoneOne>
        <PageTitle>Menu</PageTitle>
        <UserName>User Name</UserName>
      </HeaderZoneOne>

      <SalesReportContainer>
        <SalesReport>Sales Report</SalesReport>
      </SalesReportContainer>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #5896e6;
  width: 100vw;
  color: white;
  height: 60px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 85px;
    justify-content: center;
  }
`;

const HeaderZoneOne = styled.div`
  display: flex;
  align-items: center;
  margin-left: 300px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const PageTitle = styled.div`
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
`;

const UserName = styled.div`
  margin-left: 70px;
  font-size: 1.2rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SalesReportContainer = styled.div`
  margin-right: 400px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    margin-top: 10px;
  }
`;

const SalesReport = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  font-style: italic;
`;
