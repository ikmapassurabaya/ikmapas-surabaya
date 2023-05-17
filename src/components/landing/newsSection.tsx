import Link from 'next/link';
import img1 from '../../images/rangkaian-resepsi-puncak-satu-abad-nu-hqi.jpg';
import img2 from '../../images/pesona.jpeg';
import img3 from '../../images/duta.jpeg';
function NewsSection() {

  return (
    <section id="news" className="py-3">
      <div className="container">
        <h3 className="fw-bold">Berita Terkini</h3>
        <p><Link href="/news" className='text-primary'>selengkapnya {'>>'}</Link></p>
        <div className="row flex-lg-row-reverse">
          <div className="col-12 col-lg-8 mb-3">
            <div className="row">
              <div className="col-12 col-lg-8 mb-3">
                <Link href='/news/judul-artikel-1'>
                  <div className="card news-preview main-news" style={{ backgroundImage: `url('${img1.src}')` }}>
                    <div className="card-body d-flex flex-column justify-content-end text-white">
                      <p className='fw-bold text-white'>Diduga Seorang Mahasiswa Kehilangan HP saat Satu Abad NU.</p>
                      <small>7 Februari 2023</small>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card news-preview mb-3" style={{ backgroundImage: `url('${img2.src}')` }}>
                  <div className="card-body d-flex flex-column justify-content-end text-white">
                    <p className='fw-bold text-white'>Pesona Ramadhan Ikmapas Surabaya 2023</p>
                    <small>7 Apri 2023</small>
                  </div>
                </div>
                <div className="card news-preview" style={{ backgroundImage: `url('${img3.src}')` }}>
                  <div className="card-body d-flex flex-column justify-content-end text-white">
                    <p className='fw-bold text-white'>Anggota Ikmapas Surabaya Juara Kedutaan Fakultas UINSA 2023.</p>
                    <small>1 hari lalu</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-3">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Link href='/news/judul-artikel-4'>
                  <p className='fw-bold'>Diduga Seorang Mahasiswa Kehilangan HP saat Satu Abad NU.</p>
                  <small className='text-muted'>7 Februari 2023</small>
                </Link>
              </li>
              <li className="list-group-item">
                <p className='fw-bold'>Waspada! Seorang Mahasiswa Kehilangan Motor di Wonocolo Gang II</p>
                <small className='text-muted'>6 Maret 2023</small>
              </li>
              <li className="list-group-item">
                <p className='fw-bold'>Dulur Faris dan Dulur Dzulfikar Terpilih Menjadi Ketum & Waketum Ikmapas 2023-2024</p>
                <small className='text-muted'>25 Februari 2023</small>
              </li>
              <li className="list-group-item">
                <p className='fw-bold'>Resmi! Pengurus Ikmapas 2023-2024 Telah Dilantik Pada Minggu 7 Mei 2023</p>
                <small className='text-muted'>1 hari lalu</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;