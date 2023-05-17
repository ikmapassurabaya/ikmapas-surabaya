import Image from "next/image";
import img from "../../images/about.png";
function HeroSection() {
  return (
    <section id="hero" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg text-center text-lg-start d-flex align-items-center" >
            <div>
              <h1 className="fw-bold">Selamat Datang di IKMAPAS Surabaya!</h1>
              <p style={{ textAlign: 'justify' }}>
                Selamat datang di website resmi Ikatan Mahasiswa Pasuruan Surabaya (IKMAPAS)!
                Terima kasih telah mengunjungi website resmi IKMAPAS. Mari bersama-sama membangun dan mengembangkan potensi mahasiswa Pasuruan demi masa depan yang lebih baik.
              </p>
              <p>
                <a href="#about" className="btn btn-primary btn-lg" >
                  Penasaran? Gas Kepoin
                </a>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg">
            <Image priority src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section >
  );
}

export default HeroSection;