import Head from 'next/head';
import Layout from "../layout/Layout";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

export default function AvailablePuppies() {
  return (
    <>
    <Layout>
    <Breadcrumb pageName="French Bulldog Puppies" pageTitle="Available French Bulldog Puppies" />
      <Head>
        <title>Available French Bulldog Puppies</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5">Available French Bulldog Puppies</h1>
            <p className="lead">
              Adorable looks and lovely nature – common traits that run in Ethical Frenchie's Frenchie Family. Below you can find our available French bulldog puppies who are looking for their forever homes in the USA and worldwide! Your dream Frenchie is waiting for you!
            </p>
          </div>
        </div>
        <div className="row gy-4">
          {/* Loop for generating the image grid */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="col-md-6" key={index}>
              <div className="card h-100">
              <a href="/#">
                <img
                  src="https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg?resize=696,463"
                  alt="Puppy Name"
                  className="card-img-top"
                  width="400"
                  height="267"
                  style={{ objectFit: 'cover' }}
                />
                </a>
                <div className="card-body">
                  <h2 className="card-title">Puppy Name</h2>
                  <h3 className="card-subtitle mb-2 text-muted">Color, Birthdate</h3>
                  <a href="/#" className="primary-btn1">    More info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Layout>
    </>
  );
}