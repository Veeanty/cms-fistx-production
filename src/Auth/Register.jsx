import { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Logo from "../image/Logo.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Register = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const MySwal = withReactContent(Swal);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
       // Validation for mandatory fields
    if (!username || !fullName || !email || !phone || !password || !confirmPassword) {
      MySwal.fire({
        icon: "error",
        title: "Harap isi semua kolom!",
      });
      return;
    }

    // Validation for matching passwords
    if (password !== confirmPassword) {
      MySwal.fire({
        icon: "error",
        title: "Password tidak cocok",
      });
      return;
    }

    // Validation for checkbox
    if (!document.getElementById("default-checkbox").checked) {
      MySwal.fire({
        icon: "error",
        title: "Menerima kebijakan marketing dan ketentuan privasi?",
      });
      return;
    }
      // Validation for matching passwords
      if (password !== confirmPassword) {
        MySwal.fire({
          icon: "error",
          title: "Password tidak cocok",
        });
        return;
      }

      MySwal.fire({
        title: "Apakah Anda Yakin?",
        text: "Kalau yakin tekan yes jika tidak tekan No",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Saya Yakin!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.post("http://localhost:8080/api/user/register", {
            username,
            name: fullName,
            email,
            password,
            no_telp: phone,
          });
          MySwal.fire(
            "Berhasil ditambahkan",
            "Akun anda berhasil diaktifkan",
            "success"
          ).then(function () {
            navigate("/login"); // Redirect to the dashboard upon successful registration
          });
        } else {
          MySwal.fire({
            icon: "error",
            title: "Maaf, isi dengan benar",
          });
        }
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <div className="background">
        <Helmet>
          <title>Register</title>
        </Helmet>

        <div className="container-register">
          {/* ... */}
          <div className="card-register">
            <img className="logo-register" src={Logo} alt="" />
            <div className="card">
              <h5 className="text-judul">Mulai dengan akun gratis!</h5>
              <hr />
              {msg && <div className="alert alert-danger">{msg}</div>}
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Nama Lengkap</label>
                  <input
                    type="text"
                    className="form-control"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nama Lengkap"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Alamat Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email atau Nomor Telepon"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Nomor Telepon</label>
                  <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Nomor Telepon"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan Password"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Ulangi Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Ulangi Password"
                  />
                </div>
                <div style={{ marginBottom: "20px" }}></div>
                <Form>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-3 mt-3">
                      <Form.Check // prettier-ignore
                        type={type}
                        id="default-checkbox" // Pastikan id sesuai
                        label={`Saya menerima kebijakan marketing dan ketentuan privasi
                        FisTx`}
                      />
                    </div>
                  ))}
                </Form>
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    style={{ marginBottom: "10px" }}
                  >
                    Daftar
                  </button>
                </div>
                <p
                  className="text-center"
                  style={{ fontSize: "12px", marginTop: "20px" }}
                >
                  Sudah mempunyai akun? <a href="/login">Masuk</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;