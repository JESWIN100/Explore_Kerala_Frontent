import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function About() {
  return (
    <>
      <Header />
      <div className="container-fluid mt-4">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4 mb-4 text-center">About Kerala - God's Own Country</h1>

            {/* Overview Section */}
            <div className="row mb-4">
              <div className="col-md-6">
                <p className="lead">
                  Kerala, famously known as "God's Own Country," is a land of diverse landscapes, serene backwaters, lush greenery, and vibrant cultural heritage. Located on the southwestern coast of India, Kerala is blessed with a pleasant climate throughout the year, making it a favorite destination for tourists seeking natural beauty and tranquility.
                </p>
                <p>
                  The state is renowned for its backwaters, where traditional houseboat cruises offer a unique experience of exploring the tranquil waters lined with coconut trees and traditional villages. Kerala is also known for its rich cultural traditions, including classical dance forms like Kathakali and Mohiniyattam, and festivals such as Onam and Thrissur Pooram.
                </p>
                <p>
                  Kerala's history is marked by ancient trade links with the world, colonial influences, and architectural marvels such as forts and palaces, reflecting its rich heritage.
                </p>
                <p>
                  The cuisine of Kerala is diverse and flavorful, featuring dishes like appam, seafood delicacies, and traditional sweets such as payasam.
                </p>
                <p>
                  Wildlife enthusiasts can explore Kerala's biodiversity in sanctuaries like Periyar Tiger Reserve, home to rare species of flora and fauna.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img src="https://www.keralataxis.com/wp-content/uploads/2024/04/Traditional-Kerala-Houseboat.webp" className="img-fluid rounded" alt="Kerala Backwaters" />
              </div>
            </div>

            {/* Art and Culture Section */}
            <div className="row mb-4">
              <div className="col-md-6">
                <h2 className="mb-3">Art and Culture</h2>
                <p>
                  Kerala's cultural landscape is enriched with classical dance forms like Kathakali and Mohiniyattam, vibrant festivals such as Onam and Thrissur Pooram, and traditional art forms like mural paintings and handicrafts.
                </p>
                <img src="https://wayfarerscorner.com/wp-content/uploads/2018/06/BJC_2049-edt-1.jpg" className="img-fluid rounded mb-3" alt="Kathakali Performance" />
              </div>
              <div className="col-md-6">
                <h2 className="mb-3">Ayurveda and Wellness</h2>
                <p>
                  Kerala is renowned for its Ayurvedic treatments and wellness tourism, offering visitors rejuvenating therapies amidst serene natural settings.
                </p>
                <img src="https://blueterra.in/wp-content/uploads/2020/01/ayurveda-1.jpg" className="img-fluid rounded mb-3" alt="Ayurvedic Treatment" />
              </div>
            </div>

            {/* Education and Literacy Section */}
            <div className="row mb-4">
              <div className="col-md-6">
                <h2 className="mb-3">Education and Literacy</h2>
                <p>
                  Kerala boasts high literacy rates and a strong focus on education, contributing significantly to its social development and progressive outlook.
                </p>
                <img src="https://content.jdmagicbox.com/comp/kannur/d7/9999px497.x497.131116074949.s9d7/catalogue/government-high-school-munderi-kannur-schools-roqmixz3hh.jpg" className="img-fluid rounded mb-3" alt="Kerala School" />
              </div>
              <div className="col-md-6">
                <h2 className="mb-3">Environment and Sustainability</h2>
                <p>
                  Known for its commitment to environmental conservation, Kerala promotes sustainable practices and eco-friendly tourism initiatives.
                </p>
                <img src="https://www.journeysinternational.com/wp-content/uploads/2019/04/periyar-national-park-india.jpg" className="img-fluid rounded mb-3" alt="Periyar Wildlife Sanctuary" />
              </div>
            </div>

            {/* Cuisine and Festivals Section */}
            <div className="row mb-4">
              <div className="col-md-6">
                <h2 className="mb-3">Cuisine</h2>
                <p>
                  Kerala's cuisine is a delightful blend of flavors, featuring dishes like appam, seafood delicacies, and traditional sweets such as payasam.
                </p>
                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/10/kerala-food.jpg?tr=w-400" className="img-fluid rounded mb-3" alt="Kerala Cuisine" />
              </div>
              <div className="col-md-6">
                <h2 className="mb-3">Festivals</h2>
                <p>
                  Kerala's festivals are a celebration of its rich cultural heritage, with grand events like Onam, Thrissur Pooram, and boat races attracting visitors from around the world.
                </p>
                <img src="https://static.toiimg.com/photo/msid-102577941/102577941.jpg" className="img-fluid rounded mb-3" alt="Onam Festival" />
              </div>
            </div>

            {/* Tourism and Wildlife Section */}
            <div className="row mb-4">
              <div className="col-md-6">
                <h2 className="mb-3">Tourism</h2>
                <p>
                  Kerala offers a diverse range of tourism experiences, from tranquil backwater cruises and hill station retreats to vibrant cultural festivals and wildlife adventures.
                </p>
                <img src="https://cdn.slidesharecdn.com/ss_thumbnails/keralatourism-190516071036-thumbnail.jpg?width=640&height=640&fit=bounds" className="img-fluid rounded mb-3" alt="Kerala Tourism" />
              </div>
              <div className="col-md-6">
                <h2 className="mb-3">Wildlife</h2>
                <p>
                  Kerala's biodiversity is showcased in its wildlife sanctuaries, where visitors can encounter exotic flora and fauna, including elephants, tigers, and diverse bird species.
                </p>
                <img src="https://www.keralatourspackages.org/images/kerala-wildlife-m.jpg" className="img-fluid rounded mb-3" alt="Wildlife Sanctuary" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
