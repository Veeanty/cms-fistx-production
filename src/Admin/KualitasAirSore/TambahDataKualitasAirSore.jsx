import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "semantic-ui-react";


const TambahDataKualitasAirSore = () => {
    const [bulan_id, setBulanID] = useState('');
    const [kolam_id, setKolamID] = useState('');
    const [tas, setTas] = useState('');
    const [ss, setSs] = useState('');
    const [dos, setDos] = useState(''); 
    const [sals, setSals] = useState('');
    const [kecs, setKecs] = useState('');

    const navigate = useNavigate();

    const addKualitasAirSore = async(bulan_id, kolam_id, tas, ss, dos, sals, kecs) => {
        await fetch('http://localhost:8080/api/KualitasAirSore/TambahDataAirKualitasSore', {
            method: 'POST',
            body: JSON.stringify({
                bulan_id: bulan_id,
                kolam_id: kolam_id,
                tas: tas,
                ss: ss,
                dos: dos,
                sals: sals,
                kecs: kecs
            }),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8'
            },
        })
        .then((response) => response.json())
        .then(() => {
            setBulanID('');
            setKolamID('');
            setTas('');
            setSs('');
            setDos('');
            setSals('');
            setKecs('');
            navigate("/Admin/LihatKolam");
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const BulanIDNumber = parseFloat(bulan_id);
        const KolamIDNumber = parseFloat(kolam_id);
        const TasNumber = parseFloat(tas);
        const SsNumber = parseFloat(ss);
        const DosNumber = parseFloat(dos);
        const SalsNumber = parseFloat(sals);
        const KecsNumber = parseFloat(kecs);
        addKualitasAirSore(BulanIDNumber, KolamIDNumber, TasNumber, SsNumber, DosNumber, SalsNumber, KecsNumber);
    }

    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                <Label>Bulan</Label>
                    <input type="text" className="form-control" value={bulan_id}
                        onChange={(e) => setBulanID(e.target.value)}/>

                    <Label>Kolam</Label>
                    <input type="text" className="form-control" value={kolam_id}
                        onChange={(e) => setKolamID(e.target.value)}/>

                    <Label>Angka TAS</Label>
                    <input type="text" className="form-control" value={tas}
                        onChange={(e) => setTas(e.target.value)}/>

                    <Label>Angka SS</Label>
                    <input type="text" className="form-control" value={ss}
                        onChange={(e) => setSs(e.target.value)}/>


                    <Label>Angka DOS</Label>
                    <input type="text" className="form-control" value={dos}
                        onChange={(e) => setDos(e.target.value)}/>


                    <Label>Angka SALS</Label>
                    <input type="text" className="form-control" value={sals}
                        onChange={(e) => setSals(e.target.value)}/>


                    <Label>Angka KECS</Label>
                    <input type="text" className="form-control" value={kecs}
                        onChange={(e) => setKecs(e.target.value)}/>


                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default TambahDataKualitasAirSore;