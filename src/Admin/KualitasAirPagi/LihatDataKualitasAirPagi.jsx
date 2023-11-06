import { useEffect, useState } from "react";
import MenuSidebar from "../components/MenuSidebar";
import { Button, Table } from "react-bootstrap";
import { Helmet } from "react-helmet";

const LihatDataKualitasAirPagi = () => {
  let Number = 1;

  const [DataKualitasPagi, setDataKualitasPagi] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/KualitasAirPagi/LihatDataAirKualitasPagi")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataKualitasPagi(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Lihat Data Kualitas Air Pagi</title>
      </Helmet>
      <MenuSidebar>
        <a href="/Admin/TambahKolam" rel="noreferrer">
          <Button
            variant="outline-primary"
            style={{
              position: "relative",
              float: "right",
              margin: "20px 0px 20px 100px",
            }}
          >
            Tambah Data Kolam
          </Button>
        </a>
        <Table striped>
          <thead>
            <tr>
              <th>No</th>
              <th>Bulan</th>
              <th>Kolam</th>
              <th>Angka php</th>
              <th>Angka SP</th>
              <th>Angka DOP</th>
              <th>Angka SALP</th>
              <th>Angka KECP</th>
              <th>Angka orp</th>
              <th>Angka warna</th>
              <th>Angka Cuaca</th>
            </tr>
          </thead>
          {DataKualitasPagi.map((KualitasPagi, index) => {
            return (
              <tbody
                style={{
                  textAlign: "center",
                }}
                key={index}
              >
                <td>{Number++}</td>
                <td>{KualitasPagi.kolam_id}</td>
                <td>{KualitasPagi.bulan_id}</td>
                <td>{KualitasPagi.php}</td>
                <td>{KualitasPagi.sp}</td>
                <td>{KualitasPagi.dop}</td>
                <td>{KualitasPagi.salp}</td>
                <td>{KualitasPagi.kecp}</td>
                <td>{KualitasPagi.orp}</td>
                <td>{KualitasPagi.warna}</td>
                <td>{KualitasPagi.cuaca}</td>
              </tbody>
            );
          })}
        </Table>
      </MenuSidebar>
    </>
  );
};

export default LihatDataKualitasAirPagi;
