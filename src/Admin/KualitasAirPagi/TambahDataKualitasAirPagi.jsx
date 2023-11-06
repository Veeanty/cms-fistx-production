import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "semantic-ui-react";

const TambahDataKualitasAirPagi = () => {
    const [bulan_id, setBulanID] =  useState('');
    const [kolam_id, setKolamID] =  useState('');
    const [tap, setTap] = useState('');
    const [sp, setSp] = useState('');
    const [dop, setDop] = useState('');
    const [salp, setSalp] = useState('');
    const [kecs, setKecs] = useState('');

    const navigate = useNavigate();

    const addKualitasAirPagi = async(bulan_id, kolam_id, tap, sp, dop, salp, kecs) => {
        await fetch('http://localhost:8080/api/KualitasAirPagi/TambahDataAirKualitasPagi', {
            method: 'POST',
            body: JSON.stringify({
                bulan_id: bulan_id,
                kolam_id: kolam_id,
                tap : tap,
                sp : sp,
                dop : dop,
                salp: salp,
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
            setTap('');
            setSp('');
            setDop('');
            setSalp('');
            setKecs('');
            navigate("/Admin/TambahAirKualitasSore");
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const BulanIDNumber = parseInt(bulan_id);
        const KolamIDNumber =  parseInt(kolam_id);
        const tapNumber = parseInt(tap);
        const spNumber = parseInt(sp);
        const DopNumber = parseInt(dop);
        const SalpNumber = parseInt(salp);
        const KecsNumber = parseInt(kecs);
        addKualitasAirPagi(BulanIDNumber, KolamIDNumber, tapNumber, spNumber, DopNumber, SalpNumber, KecsNumber);
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

                    <Label>Angka TAP</Label>
                    <input type="text" className="form-control" value={tap}
                        onChange={(e) => setTap(e.target.value)}/>

                    <Label>Angka SP</Label>
                    <input type="text" className="form-control" value={sp}
                        onChange={(e) => setSp(e.target.value)}/>    

                    <Label>Angka DOP</Label>
                    <input type="text" className="form-control" value={dop}
                        onChange={(e) => setDop(e.target.value)}/>

                    <Label>Angka SALP</Label>
                    <input type="text" className="form-control" value={salp}
                        onChange={(e) => setSalp(e.target.value)}/>

                    <Label>Angka KECS</Label>
                    <input type="text" className="form-control" value={kecs}
                        onChange={(e) => setKecs(e.target.value)}/>

                        <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default TambahDataKualitasAirPagi;