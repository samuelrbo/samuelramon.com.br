const CareerSummary = ({ experienceTime }: { experienceTime: string }) => {
  return (
    <>
      <h2>Career Summary</h2>
      <section>
        <p>
          <b>{experienceTime} years</b> in Web development using <b>NodeJS</b>{' '}
          (actuall job language), <b>Java</b>, <b>Python</b> and <b>PHP</b>.
          Expertise in system integrations and API creations, as well as code
          optimization and process analysis for business improvement.
        </p>

        <p>
          Knowledge in web frameworks (<b>NestJS</b>, <b>NextJS</b>,{' '}
          <b>Express</b>, <b>Spring Boot</b>, <b>Laravel</b>), in linux servers
          (<b>CentOS</b>, <b>Ubuntu</b> and <b>RedHat</b>), Content Management
          System (CMS) like <b>Wordpress</b>, <b>Joomla</b>! and <b>Hippo</b>{' '}
          (Now known as Bloomreach), integration tools like <b>Pentaho</b> and{' '}
          <b>ODI</b> (Oracle Data Integration), relational databases (
          <b>Oracle</b>, <b>Postgres</b> and <b>MySQL</b>), non relational
          databases (<b>MongoDB</b> and <b>Cassandra</b>), application servers (
          <b>JBoss</b>, <b>WildFly</b> and <b>WebSphere</b>), A.I. chat bots for
          Whatsapp and Telegram (<b>IBM Watson</b>, <b>Google Cloud</b> and{' '}
          <b>Facebook Wit.ai</b>).
        </p>

        <p>
          Graduated in System Analysis by Estácio de Sá University in november
          of 2013 with basic to intermediate english.
        </p>
      </section>
    </>
  );
};

export default CareerSummary;
