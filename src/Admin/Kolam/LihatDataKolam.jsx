import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import MenuSidebar from "../components/MenuSidebar";
import { Helmet } from "react-helmet";

export default function LihatDataKolam() {
  const [APIData, setAPIData] = useState([]);
  let number = 1;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/Kolam/LihatDataKolam`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { ID, NamaKolam, LuasKolam, KedalamanKolam } = data;
    localStorage.setItem("ID", ID);
    localStorage.setItem("NamaKolam", NamaKolam);
    localStorage.setItem("LuasKolam", LuasKolam);
    localStorage.setItem("KedalamanKolam", KedalamanKolam);
  };

  const hapusData = (id) => {
    axios
      .delete(`http://localhost:8080/api/Kolam/HapusDataKolam/${id}`)
      .then(() => {
        window.location.reload(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Lihat Data Kolam</title>
      </Helmet>
      <MenuSidebar>
        <div>
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
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>No</Table.HeaderCell>
                <Table.HeaderCell>Nama Kolam</Table.HeaderCell>
                <Table.HeaderCell>Luas Kolam</Table.HeaderCell>
                <Table.HeaderCell>Kedalaman Kolam</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {APIData.map((data) => {
                return (
                  <Table.Row key={data.ID}>
                    <Table.Cell>{number++}</Table.Cell>
                    <Table.Cell>{data.NamaKolam}</Table.Cell>
                    <Table.Cell>{data.LuasKolam} CM</Table.Cell>
                    <Table.Cell>{data.KedalamanKolam} CM</Table.Cell>
                    <Table.Cell>
                      <Link to="/Admin/UpdateDataKolam">
                        <Button onClick={() => setData(data)}>Update</Button>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Button onClick={() => hapusData(data.ID)}>Delete</Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      </MenuSidebar>
    </>
  );
}
