import { useEffect, useState } from "react";
import MenuSidebar from "../components/MenuSidebar";
import { Button, Table } from "react-bootstrap";
import { Helmet } from "react-helmet";

const LihatDataKualitasAirSore = () => {
  const [DataKualitasSore, setDataKualitasSore] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/KualitasAirSore/LihatDataAirKualitasSore")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataKualitasSore(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Lihat Data Kualitas Air Sore</title>
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
              <th>Angka TAP</th>
              <th>Angka SP</th>
              <th>Angka DOP</th>
              <th>Angka SALP</th>
              <th>Angka KECS</th>
            </tr>
          </thead>
          {DataKualitasSore.map((kualitasSore, index) => {
            return (
              <tbody
                style={{
                  textAlign: "center",
                }}
                key={index}
              >
                <td>{kualitasSore.ID}</td>
                <td>{kualitasSore.bulan_id}</td>
                <td>{kualitasSore.kolam_id}</td>
                <td>{kualitasSore.tas}</td>
                <td>{kualitasSore.ss}</td>
                <td>{kualitasSore.dos}</td>
                <td>{kualitasSore.sals}</td>
                <td>{kualitasSore.kecs}</td>
              </tbody>
            );
          })}
        </Table>
      </MenuSidebar>
    </>
  );
};

export default LihatDataKualitasAirSore;
