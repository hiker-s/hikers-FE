import styled from "styled-components";
import { Layout } from "../../components/common/layout/Layout";
import Logo from "../../components/common/logo/Logo";
import MountainLogo from "../../components/common/logo/MountainLogo";
import { Search } from "../../components/home/Search";
import { Weather } from "../../components/home/Weather";
import { FamousMountain } from "../../components/home/FamousMountain";

const Home = () => {
  return (
    <Layout $margin="6.25rem 0 0 0" $isFooter={true}>
      <Wrapper>
        <Logo />
        <Section>
          <Search />
          <Weather />
          <FamousMountain />
        </Section>
        <MountainLogo />
      </Wrapper>
    </Layout>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh; // Fallback
  min-height: calc(100dvh - 11.3rem);

  overflow-y: hidden;
  overflow-x: hidden;
`;

const Section = styled.div`
  display: flex;
  width: 21.875rem;
  align-items: flex-end;
  align-content: flex-end;
  gap: 0.5625rem 1rem;
  flex-wrap: wrap;
`;
