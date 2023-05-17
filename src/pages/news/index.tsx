import Link from "next/link";
import img1 from '../../images/duta.jpeg';
import img2 from '../../images/wafy.jpg';
import img3 from '../../images/pesona.jpeg';
import MainFooter from "@/components/footers/mainFooter";
import NavbarLinks from "@/components/navbars/navbarLinks";

function News() {
  return (
    <main>
      <NavbarLinks />
      <section className="py-5" style={{ minHeight: '100vh' }}>
        <div className="container">
          <h1 className="fw-bold text-primary">IKMAPAS Surabaya News</h1>
          <hr />

          <form>
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="bi bi-search"></i></span>
              <input type="text" className="form-control" placeholder="Cari di Sini..." />
            </div>
          </form>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <Link className="text-decoration-none" href='/news/judul-artikel-dua'>
                <div className="card news-preview mb-3" style={{ backgroundImage: `url('${img2.src}')` }}>
                  <div className="card-body d-flex flex-column justify-content-end text-white">
                    <p className='fw-bold text-white'>Diduga Seorang Mahasiswa Kehilangan HP saat Satu Abad NU</p>
                    <small>7 Februari 2023</small>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Link className="text-decoration-none" href='/news/judul-artikel-tiga'>
                <div className="card news-preview mb-3" style={{ backgroundImage: `url('${img3.src}')` }}>
                  <div className="card-body d-flex flex-column justify-content-end text-white">
                    <p className='fw-bold text-white'>Disambut Antusias oleh Warga, begini Pesona Ramadhan Ikmapas Surabaya 2023! </p>
                    <small>7 April 2023</small>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Link className="text-decoration-none" href='/news/judul-artikel-satu'>
                <div className="card news-preview mb-3" style={{ backgroundImage: `url('${img1.src}')` }}>
                  <div className="card-body d-flex flex-column justify-content-end text-white">
                    <p className='fw-bold text-white'>Dua anggota Aktif Ikmapas Surabaya Sabet juara kedutaan Fakultas UINSA 2023</p>
                    <small>1 hari lalu</small>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <MainFooter />
    </main>
  );
}

export default News;