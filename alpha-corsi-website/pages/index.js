import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import PartnerCard from '../components/partnerCard';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={utilStyles.mainContainer}>
        <div className={utilStyles.hero}>
          <video autoPlay muted loop className={utilStyles.video}>
              <source src="/heroMountainBackground.mp4" type="video/mp4"/>
          </video>

          <div className={utilStyles.heroContent}>
            <h1>AlphaCorsi</h1>
            <p>A boutique Information Security consultancy firm</p>
            <div className={utilStyles.learnmoreButton}>
              <Link href='/#learn-more' className={utilStyles.learnmoreText}>Learn More</Link>
            </div>
          </div>
        </div>

        <div className={utilStyles.about}>
          <h3>CyberSecurity Consulting</h3>
          <p>
            At AlphaCorsi, we are your partner in effectively implementing  security technologies tailored to your
            organizational needs. Our team of experts can assist in identifying gaps, reducing risk,
            regulatory compliance, vulnerability management and more.
          </p>
        </div>

        <div className={utilStyles.partners}>
          <h3>Our Trusted Partners</h3>
          <p>
            We partner closely with leaders in the cybersecurity industry to deliver the best in class solutions to
            ensure our clients needs are being met
          </p>

          <div className={utilStyles.partnerCardsGroup}>
            <PartnerCard image="/images/companies/crowdstrike.png" companyName="CrowdStrike" companyColor="#FF0000" link="/#CrowdStrike" />
            <PartnerCard image="/images/companies/microsoft.png" companyName="Microsoft" useImageSize='true' link="/#Microsoft" />
            <PartnerCard image="/images/companies/okta.png" companyName="Okta" link="/#Okta" />
            <PartnerCard image="/images/companies/taegis.png" companyName="Taegis" companyColor="#2B00BB" link="/#Taegis" />
          </div>
        </div>

      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
