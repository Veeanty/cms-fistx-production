import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Label } from "semantic-ui-react";

export default function UpdateDataKolam() {

    const navigate = useNavigate();

    const [NamaKolam, setNamaKolam] = useState('');
    const [luasKolam, setLuasKolam] = useState('');
    const [kedalamanKolam, setKedalamanKolam] = useState('');

    var LuasKolam = parseInt(luasKolam);
    var KedalamanKolam = parseInt(kedalamanKolam);

    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setNamaKolam(localStorage.getItem('NamaKolam'));
        setLuasKolam(localStorage.getItem('LuasKolam'));
        setKedalamanKolam(localStorage.getItem('KedalamanKolam'));
    }, [])

  

    const updateAPIData = () => {

        axios.put(`http://localhost:8080/api/Kolam/UpdateDataKolam/${id}`, {
            NamaKolam,
            LuasKolam,
            KedalamanKolam
        }).then(() => {
            navigate("/Admin/LihatKolam");
        })
    }

    return(
        <div>
            <Form className="update-form">
                <Form.Field>
                    <Label>Nama Kolam</Label>
                    <input placeholder="Nama Kolam" value={NamaKolam} onChange={(e) => setNamaKolam(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Label>Luas Kolam</Label>
                    <input type="number" placeholder="Luas Kolam" value={LuasKolam} onChange={(e) => setLuasKolam(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Label>Kedalaman Kolam</Label>
                    <input type="number" placeholder="Kedalaman Kolam" value={KedalamanKolam} onChange={(e) => setKedalamanKolam(e.target.value)}/>
                </Form.Field>
                <Button onClick={updateAPIData} type="submit">Update</Button>
            </Form>
        </div>
    )
}