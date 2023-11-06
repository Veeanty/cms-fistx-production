import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../image/Logo.png";
import "./Login.css";
import Cookies from "js-cookie"; // Import the js-cookie library

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/token", {
        email: email,
        password: password,
      });

      const { token } = response.data; 
      Cookies.set("Login", token, { expires: 7 });
      navigate("/dashboard");
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
          <title>Login</title>
        </Helmet>
        <div className="container">
          <div className="row justify-content-center">
            <div className="text-center">
              <img
                src={Logo}
                width="190"
                height="160"
                alt=""
                style={{ marginBottom: "30px" }}
              />
              <div className="card">
                <div className="card-body">
                  <h4
                    className="fw-bold text-center "
                    style={{ marginBottom: "40px" }}
                  >
                    Selamat Datang
                  </h4>
                  <hr />
                  {msg && <div className="alert alert-danger">{msg}</div>}
                  <form onSubmit={Auth}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        ALAMAT EMAIL
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email atau Nomor Telepon"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        PASSWORD
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Masukkan Password"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-between align-items"
                      style={{ marginBottom: "10px" }}
                    >
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberMe"
                        >
                          Remember me
                        </label>
                      </div>
                      <span
                        role="button"
                        onClick={() => {}}
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                          marginBottom: "20px",
                        }}
                      >
                        Lupa Kata Sandi
                      </span>
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        className="btn btn-secondary"
                        style={{ marginBottom: "10px" }}
                      >
                        Masuk
                      </button>
                    </div>
                    <p
                      className="text-center"
                      style={{ fontSize: "12px", marginTop: "20px" }}
                    >
                      Belum mempunyai akun?{" "}
                      <Link to="/Register">Buat Akun</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
