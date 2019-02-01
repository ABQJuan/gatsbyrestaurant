import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import img from "../images/bcg/contactBcg.jpeg";
import { PageHeader, Banner } from "../utils";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
      <Banner title="contact us" subtitle="here's how to find us" />
    </PageHeader>
  </Layout>
);

export default ContactPage;
