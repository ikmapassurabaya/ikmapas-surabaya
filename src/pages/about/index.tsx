import MainNavbar from "@/components/navbars/mainNavbar";
import Link from "next/link";
import img from '../../images/about.jpg';
import Image from "next/image";
import MainFooter from "@/components/footers/mainFooter";

function About() {
  return (
    <main>
      <MainNavbar>
        <Link className="btn btn-primary" href='/'>Kembali</Link>
      </MainNavbar>
      <section>
        <div className="container-fluid bg-primary">
          <div className="row">
            <div className="col text-center">
              <Image className="img-fluid" style={{ maxHeight: '75vh' }} alt="" src={img} />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center fw-bold text-primary">Tentang IKMAPAS</h1>
              <div style={{ textAlign: 'justify' }}>
                <p>
                  IKMAPAS Surabaya merupakan organisasi mahasiswa yang berasal dari Pasuruan dan berkuliah di Surabaya. Organisasi ini didirikan dengan tujuan untuk membawa misi dan visi dari mahasiswa Pasuruan ke lingkungan kampus di Surabaya. IKMAPAS Surabaya berkomitmen untuk menjadi wadah bagi para mahasiswa Pasuruan yang ingin mempererat hubungan sosial, meningkatkan kualitas diri, serta berpartisipasi aktif dalam kegiatan-kegiatan yang positif.
                </p>
                <p>
                  Sebagai organisasi mahasiswa, IKMAPAS Surabaya juga aktif dalam kegiatan sosial kemasyarakatan dan lingkungan. Kami memiliki program-program yang dirancang khusus untuk memberikan dampak positif bagi masyarakat sekitar kampus dan lingkungan hidup. Kami berupaya untuk mengajak seluruh mahasiswa Pasuruan yang berkuliah di Surabaya untuk turut serta dalam kegiatan-kegiatan yang kami selenggarakan.
                </p>
                <p>
                  Salah satu tongkrongan anak muda yang memunculkan sejarah baru.
                  Beginilah awal kisah Ikmapas terbentuk yakni dari pemikir muda  yang ingin mengamalkan keilmuan mahasiswa untuk banyak perubahan terhadap daerah asal, tiga orang pemuda dengan akrab dipanggil dengan sebutan ‘cak’ .
                  Pada tahun 2000 Cak Kaji, Cak Jalaludin serta mengajak Cak Affandi berkumpul pada salah satu hari untuk mencetak generasi, diskusi  lama yang terasa sebentar dengan pembahasan santai namun serius, beliau mulai menyusun strategi mengumpulkan mahasiswa Surabaya yang  berasal dari Pasuruan Jawa timur untuk menjadi satu kesatuan dalam organisasi daerah.
                </p>
                <p>
                  Tepat pada 06 Juni 2001, nama Ikmapas telah resmi sebagai nama organisasi daerah yang mewadahi mahasiswa Surabaya asal Pasuruan, lambat laun pada tahun 2002 diadakan kegiatan dakwah sosial yang menjadi pondasi Ikmapas hingga kini, yaitu Bakti Sosial yang bertempat di NongkoJajar.
                  Tak hanya mahasiswa asal Pasuruan saja yang hadir melainkan siapapun yang mau berbagi kebaikan diperbolehkan kontribusi.
                  Sejak saat itu Ikmapas semakin berkembang sampai pada dua tahun menyedihkan 2014-2015  yang mana Ikmapas lebih memilih untuk vakum organisasi, namun tidak berhenti disitu. Setalah tahun sedih, Ikmapas kembali bangkit dengan sejuta cita dan harapan untuk memberikan perubahan pada Pasuruan, hingga kini Ikmapas mengganti sebutannya dengan Ikmapas Surabaya dengan dalih organisasi ini mencakup keseluruhan universitas yang terdapat di Surabaya.
                </p>
                <h3 className="fw-bold text-primary">Visi</h3>
                <p>
                  Visi IKMAPAS SURABAYA adalah Terwujudnya generasi yang bertakwa kepada Tuhan Yang Maha Esa, kritis, dan aktif berpartisipasi dalam kegiatan sosial maupun masyarakat.
                </p>
                <h3 className="fw-bold text-primary">Misi</h3>
                <p>
                  Misi IKMAPAS SURABAYA adalah:
                </p>
                <p>
                  1. Meningkatkan ketakwaan kepada Tuhan Yang Maha Esa.
                </p>
                <p>
                  2. Mempererat rasa kekeluargaan mahasiswa Pasuruan di Surabaya.
                </p>
                <p>
                  3. Menyosialisasikan pendidikan di Surabaya kepada putra-putri di Pasuruan.
                </p>
                <p>
                  4. Menanamkan rasa tanggung jawab dalam diri setiap anggota.
                </p>
                <p>
                  5. Membentuk generasi yang terdidik untuk dikembangkan di Pasuruan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MainFooter />
    </main>
  );
}

export default About;