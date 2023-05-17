import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import img1 from '../../images/about.jpg';
import photo from '../../images/profil1.jpg';
import ad from '../../images/adv.png';
import Image from "next/image";
import MainFooter from "@/components/footers/mainFooter";
import { CSSProperties } from "react";
import NavbarLinks from "@/components/navbars/navbarLinks";
import Comments from "@/components/comments/comments";

function newsDetail() {
  //eslint-disable-next-line
  const router: NextRouter = useRouter();
  const { slug }: ParsedUrlQuery = router.query;
  const jumbotronStyle: CSSProperties = {
    // backgroundImage: `url(${img1.src})`,
    backgroundImage: `url(https://picsum.photos/1600/1000)`
  }

  return (
    <main>
      <NavbarLinks />
      <section className="mt-5 mb-3">
        <div className="container">
          <div className="row justify-content-center align-items-center rounded">
            <div className="col">
              <div className="card border-0 jumbotron" style={jumbotronStyle}>
                <div className="card-body d-flex justify-content-center align-items-center" style={{ position: 'relative', zIndex: '1' }}>
                  <div className="text-white text-center">
                    <p><span className="badge bg-primary">Berita Terkini</span></p>
                    <h2 className="fw-bold">Diduga Mahasiswa Kehilangan HP pada Saat Puncak Resepsi 1 Abad Nu</h2>
                    <div className="d-flex justify-content-center align-items-center flex-wrap p-0">
                      <p className="text-white"><Image width={40} src={photo} className="me-2 rounded-circle" alt="" /></p>
                      {/* <p className="text-white"><img width={40} src='https://picsum.photos/100' className="me-2 rounded-circle" alt="" /></p> */}
                      <p className="text-white">by Fairuzul Wafy</p>
                      <p className="text-white mx-1">•</p>
                      <p className="text-white">7 Februari 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-9">
              <div style={{ textAlign: 'justify' }}>
                <p>S
                  <span className="dropcap bg-dark text-white px-2">s</span>eorang mahasiswa Universitas Negeri Surabaya (Unesa) bernama Fairuzul Wafi diduga mengalami kehilangan handphone (HP) pada saat menghadiri acara resepsi satu abad Nahdlatul Ulama di Surabaya pada tanggal 6 Februari 2023 pukul 21.50.

                  Berdasarkan informasi yang diperoleh, Fairuzul Wafi menghadiri acara tersebut bersama dengan teman-temannya. Namun sayangnya, saat acara berlangsung, HP miliknya diduga hilang karena kecopetan. Diduga,
                  hal tersebut terjadi karena Fairuzul lalai dan tidak mengamankan barang bawaannya dengan baik.
                  Fairuzul Wafi mengaku sangat kecewa dan merasa rugi dengan kehilangan HP tersebut.
                  Ia juga mengatakan bahwa HP tersebut memiliki nilai sentimental yang tinggi bagi dirinya karena banyak dokumen penting yang tersimpan di dalamnya.
                </p>
                <p>
                  Sementara itu, pihak keamanan acara menyatakan bahwa pihaknya telah berkoordinasi dengan pihak kepolisian untuk melakukan penyelidikan atas kejadian tersebut.
                  Pihak keamanan juga meminta kepada para pengunjung untuk selalu waspada dan mengamankan barang bawaan mereka dengan baik agar kejadian serupa tidak terulang di kemudian hari.
                  Kepolisian setempat mengimbau kepada masyarakat yang memiliki informasi terkait kejadian ini untuk segera melaporkannya. Pihak kepolisian juga akan berusaha sekuat tenaga untuk mengungkap kasus ini dan memulihkan kerugian yang dialami oleh Fairuzul Wafi.
                </p>
                <p>
                  Fairuzul Wafi sendiri berharap agar kejadian ini dapat menjadi pelajaran bagi dirinya dan bagi para mahasiswa lainnya untuk selalu memperhatikan keamanan barang bawaan mereka. Ia juga mengucapkan terima kasih atas perhatian dan dukungan yang diberikan oleh teman-temannya serta pihak keamanan acara dan kepolisian.
                </p>
              </div>
              <Comments />
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <div className="card border-0 mb-3" style={{ backgroundColor: 'var(--bs-primary-bg-subtle)' }}>
                <div className="card-body p-3">
                  <p>Subscribe untuk informasi konten lebih banyak</p>
                  <form>
                    <input type="email" name="email" placeholder="Email..." className="form-control mb-3" />
                  </form>
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </div>
              <Image src={ad} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <MainFooter />
    </main>
  );
}


export default newsDetail;
