
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "semantic-ui-react";

const TambahKolam = () => {

     const [NamaKolam, setNamaKolam] = useState('');
     const [LuasKolam, setLuasKolam] = useState('');
     const [KedalamanKolam, setKedalamanKolam] = useState('');
     
     const navigate = useNavigate();

     const addKolam = async(NamaKolam, LuasKolam, KedalamanKolam) => {
        await fetch('http://localhost:8080/api/Kolam/TambahDataKolam', {
            method: 'POST',
            body: JSON.stringify({
                NamaKolam: NamaKolam,
                LuasKolam: LuasKolam,
                KedalamanKolam: KedalamanKolam,
            }),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then(() => {
            setNamaKolam('');
            setLuasKolam(parseFloat(LuasKolam));
            setKedalamanKolam(parseFloat(KedalamanKolam));
            navigate("/Admin/TambahAirKualitasPagi");
        });
     };

    

     const handleSubmit = (e) => {
        e.preventDefault();
        const LuasKolamNumber = parseInt(LuasKolam);
        const KedalamanKolamNumber = parseInt(KedalamanKolam);
        addKolam(NamaKolam, LuasKolamNumber, KedalamanKolamNumber);
     }


    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <Label>Nama Kolam</Label>
                    <input type="text" className="form-control" value={NamaKolam}
                        onChange={(e) => setNamaKolam(e.target.value)}/>
                    <Label>Luas Kolam</Label>
                    <input type="number" className="form-control" value={LuasKolam}
                        onChange={(e) => setLuasKolam(e.target.value)}
                    />
                    <Label>Kedalaman Kolam</Label>
                    <input type="number" className="form-control" value={KedalamanKolam}
                        onChange={(e) => setKedalamanKolam(e.target.value)}
                    />
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    );
}

export default TambahKolam;