import {Route, Routes } from 'react-router-dom';
import './App.css';
import Chart from './component/Chart';
import LihatDataUdang from './component/Udang/LihatDataUdang';
import Dashboard from './Dashboard/Dashboard';
import LandingPage from './LandingPage';

import Login from './Auth/Login';
import Register from './Auth/Register';
import CekKualitasAir from './KualitasAir/CekKualitasAir';
import AdminIndex from './Admin/AdminIndex';
import LihatDataKolam from './Admin/Kolam/LihatDataKolam';
import LihatDataKualitasAirPagi from './Admin/KualitasAirPagi/LihatDataKualitasAirPagi';
import LihatDataKualitasAirSore from './Admin/KualitasAirSore/LihatDataKualitasAirSore';
import TambahKolam from './Admin/Kolam/TambahKolam';
import TambahDataKualitasAirPagi from './Admin/KualitasAirPagi/TambahDataKualitasAirPagi';
import TambahDataKualitasAirSore from './Admin/KualitasAirSore/TambahDataKualitasAirSore';
import LihatDataSpesifikasiKolam from './Admin/Kolam/LihatDataSpesifikKolam';
import UpdateDataKolam from './Admin/Kolam/UpdateDataKolam';


function App() {
  return(
    <Routes>
      <Route exact path="/" element={<LandingPage/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="Dashboard" element={<Dashboard/>}/>
        <Route path="chart" element={<Chart/>}/>
        <Route path="CekKualitasAir" element={<CekKualitasAir/>}/>
        <Route path="lihat_data_udang" element={<LihatDataUdang/>}/>

        <Route path="Admin" element={<AdminIndex/>}/>
        <Route path="Admin/LihatKolam" element={<LihatDataKolam/>}/>
        <Route path="Admin/LihatDataSpesifikKolam" element={<LihatDataSpesifikasiKolam/>}/>
        <Route path="Admin/LihatKualitasPagi" element={<LihatDataKualitasAirPagi/>}/>
        <Route path="Admin/LihatKualitasSore" element={<LihatDataKualitasAirSore/>}/>

        <Route path="Admin/UpdateDataKolam" element={<UpdateDataKolam/>}></Route>

        <Route path="Admin/TambahKolam" element={<TambahKolam/>}/>
        <Route path="Admin/TambahAirKualitasPagi" element={<TambahDataKualitasAirPagi/>}/>
        <Route path="Admin/TambahAirKualitasSore" element={<TambahDataKualitasAirSore/>}/>
    </Routes>
  );
}

export default App;
