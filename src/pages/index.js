import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { HomeHeader, Banner, BannerButton } from "../utils";
import img from "../images/bcg/homeBcg.jpeg";
import QuickInfo from "../components/homePageComponents/QuickInfo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="55 main street - santa monica, ca ">
        <BannerButton style={{ margin: "2rem auto" }}>Menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
);

export default IndexPage;
