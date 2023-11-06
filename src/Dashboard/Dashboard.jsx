import NavSidebar from "../component/NavSidebar";
import "./Dashboard.css";
import Logo1 from "../image/dashboard1.jpg";
import Logo2 from "../image/dashboard2.jpg";

const Dashboard = () => {
  return (
    <NavSidebar>
      <div className="konten-luar">
        <div className="konten-dalam">
          <div className="card-dashboard">
            <div className="logo-dashboard-tengah">
              <img src={Logo1} className="logo-dashboard" />
              <img src={Logo2} className="logo-dashboard" />
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-dashboard">Nama Lahan</label>
                  <input
                    id="namalahan"
                    className="form-control"
                    placeholder="Nama Lahan"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-dashboard">Luas Lahan</label>
                  <input
                    id="luaslahan"
                    className="form-control"
                    placeholder="Contoh : 150"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-dashboard">Provinsi</label>
                  <input
                    id="luaslahan"
                    className="form-control"
                    placeholder="Pilih Provinsi"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-dashboard">Kabupaten</label>
                  <input
                    id="luaslahan"
                    className="form-control"
                    placeholder="Pilih Kabupaten"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-dashboard">Kecamatan</label>
                  <input
                    id="luaslahan"
                    className="form-control"
                    placeholder="Pilih Kecamatan"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-dashboard">Kelurahan atau Desa</label>
                  <input
                    id="luaslahan"
                    className="form-control"
                    placeholder="Pilih Kelurahan atau Desa"
                  />
                </div>
                <label className="form-dashboard">Sumber Air</label>
                <div
                  className="d-flex align-items"
                  style={{ marginBottom: "10px" }}
                >
                  <div
                    className="form-check text-black"
                    style={{ marginRight: "10px" }}
                  >
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Sumur</label>
                  </div>
                  <div
                    className="form-check text-black"
                    style={{ marginRight: "10px" }}
                  >
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Sungai</label>
                  </div>
                  <div className="form-check text-black">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Laut</label>
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    style={{ marginBottom: "20px", marginTop: "20px" }}
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </NavSidebar>
  );
};

export default Dashboard;
