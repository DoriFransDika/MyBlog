import React from "react";
import { Toast } from "react-bootstrap";

const AjaxTutorial = () => {
  const toastCode = (title, code) => (
    <Toast className="custom-toast">
      <Toast.Header
        style={{ backgroundColor: "#003143", color: "white", width: "100%" }}
      >
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{title}</strong>
        <small>Just now</small>
      </Toast.Header>
      <Toast.Body
        style={{ backgroundColor: "black", color: "white", width: "100%" }}
      >
        <pre>
          <code>{code}</code>
        </pre>
      </Toast.Body>
    </Toast>
  );

  return (
    <div>
      <h1>Menyimpan Data ke Database dengan AJAX</h1>
      <p>
        Untuk lebih memperjelas pemahaman anda bagaimana cara menyimpan data ke
        database dengan AJAX, anda akan diajak untuk berlatih. Pada latihan ini
        anda akan membuat sebuah form simpan satuan dan menyimpan data yang
        diinput oleh user dengan menggunakan Ajax. Pada contoh ini saya
        asumsikan anda memiliki sebuah tabel pada database anda dengan nama
        satuan dan dengan struktur seperti berikut. DB = cafe_anisya
      </p>

      <h2>Langkah I. Membuat File Koneksi</h2>
      {toastCode(
        "PHP",
        `<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cafe_anisya";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Mengecek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>`
      )}
      <p>
        Simpan dengan nama <strong>koneksi.php</strong>
      </p>

      <h2>Langkah II. Membuat HTML Form</h2>
      <p>
        Pertama buatlah sebuah document baru dengan text editor anda, dan buat
        sebuah HTML form dengan script di bawah.
      </p>
      {toastCode(
        "HTML",
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form Satuan</title>
    <script type="text/javascript" src="ajax.js"></script>
</head>
<body>
    <h2>Form Satuan</h2>
    <form id="satuanForm">
        <label for="satuan">Satuan:</label>
        <input type="text" id="satuan" name="satuan" required>
        <input type="button" value="Save" onclick="sendData('save_data.php', 'content'); return false;">
    </form>
    <div id="content"></div>
</body>
</html>`
      )}
      <p>
        Simpan dengan nama file <strong>satuan.php</strong> di direktori web
        server anda. Script di atas untuk membentuk sebuah form seperti berikut.
      </p>

      <h2>
        Langkah III. Membuat File Javascript untuk Membentuk XMLHttpRequest
      </h2>
      <p>
        Langkah selanjutnya adalah membuat JavaScript untuk membentuk
        XMLHttpRequest dan membuat function untuk mengirim data ke server. Buat
        kembali document baru dengan text editor anda dan ketik script berikut:
      </p>
      {toastCode(
        "JavaScript",
        `function sendData(url, resultDiv) {
    var xhr = new XMLHttpRequest();
    var formData = new FormData(document.getElementById("satuanForm"));
    
    xhr.open("POST", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(resultDiv).innerHTML = xhr.responseText;
        }
    };
    xhr.send(formData);
}`
      )}
      <p>
        Kemudian simpan dengan nama <strong>ajax.js</strong> di direktori yang
        sama dengan file satuan.php yang dibuat sebelumnya.
      </p>

      <h2>Langkah IV. Membuat handlePage dan Menyimpan Data</h2>
      <p>
        Setelah selesai dengan langkah I dan II, selanjutnya adalah membuat
        handlePage untuk menangani data yang dikirim dan menyimpan data yang
        dikirim ke database. Perlu anda ingat, walaupun sebelum data dikirim
        telah divalidasi dengan javascript anda harus kembali melakukan validasi
        setelah data sampai di server dengan server side scripting seperti PHP.
        Ingat jangan pernah percaya kepada user anda dan jangan pernah percaya
        dengan apa yang diinputkan oleh user serta jangan percaya dengan apa
        yang dikirim oleh web browser anda. Sekarang buatlah sebuah document
        baru dengan text editor dan ketikkan script berikut:
      </p>
      {toastCode(
        "PHP",
        `<?php
include 'koneksi.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $satuan = $_POST['satuan'];

    if (empty($satuan)) {
        echo "Satuan tidak boleh kosong!";
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO satuan (nama_satuan) VALUES (?)");
    $stmt->bind_param("s", $satuan);

    if ($stmt->execute()) {
        echo "Data berhasil disimpan!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method!";
}
?>`
      )}
      <p>
        Setelah selesai simpan dengan nama <strong>save_data.php</strong> di
        direktori yang sama dengan file satuan.php.
      </p>

      <h2>Langkah V. Finishing</h2>
      <p>
        Setelah selesai membuat ketiga file di atas, sekarang buka kembali file
        contact.php dan edit pada bagian yang diberi warna biru seperti berikut:
      </p>
      {toastCode("HTML", `<input type="button" name="Button" value="Save" />`)}
      <p>menjadi</p>
      {toastCode(
        "HTML",
        `<script type="text/javascript" src="ajax.js"></script>
<input type="button" name="Button" value="Save" onclick="sendData('save_data.php', 'content'); return false;" />`
      )}

      <h2>LATIHAN</h2>
      <p>
        Silahkan anda buat program ajax untuk menyimpan data ke tabel berikut.
      </p>
    </div>
  );
};

export default AjaxTutorial;
