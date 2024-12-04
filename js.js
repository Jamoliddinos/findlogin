// JSON formatidagi ma'lumotlar (Exceldan olingan)
const data = [
    { name: "Abdubakirov", surname: "Dilshodbek", birthdate: "2008-08-23", login: "dabdubakirov" },
    { name: "Abdurahmonov", surname: "Bilol", birthdate: "2008-09-27", login: "bilol.abdurahmonov" },
    { name: "Abdurayimov", surname: "Sanatjon", birthdate: "2008-09-01", login: "sanatjona" },
    { name: "Abdusamiyev", surname: "Shohruzbek", birthdate: "2008-09-03", login: "shohruzabdusamiyev" },
    { name: "Ergashev", surname: "Ravshanbek", birthdate: "2007-12-19", login: "ergashevravshanbek12" },
    { name: "Ismoilov", surname: "Javohir", birthdate: "2008-11-02", login: "ismoilovjavohir11200" },
    { name: "Jorayeva", surname: "Gulsanam", birthdate: "2008-04-22", login: "gulsanam.jorayeva042" },
    { name: "Mamajonova", surname: "Zarina", birthdate: "2008-06-12", login: "zarina.mamajonova200" },
    { name: "Mansurova", surname: "Mohinur", birthdate: "2008-06-12", login: "mohinur.mansurova062" },
    { name: "Nasibaliyeva", surname: "Orasta", birthdate: "2008-05-22", login: "orastanasibaliyeva" },
    { name: "Nazirov", surname: "Azizbek", birthdate: "2008-11-10", login: "azizbek.nazirov11200" },
    { name: "Nematova", surname: "Gulsanam", birthdate: "2008-04-30", login: "gulsanam.nematova042" },
    { name: "Nozimjonova", surname: "Nurjahon", birthdate: "2008-09-02", login: "nozimjonovanurjahon" },
    { name: "Rasuljonova", surname: "Laylo", birthdate: "2008-05-30", login: "rasuljonovalaylo" },
    { name: "Rozmatov", surname: "Dilshodbek", birthdate: "2008-04-01", login: "dilshodbekrozmatov" },
    { name: "Rozmatova", surname: "Kumushxon", birthdate: "2008-12-16", login: "rozmatovakumushxon" },
    { name: "Rustamov", surname: "Jamshidbek", birthdate: "2008-01-31", login: "jamshidbekrustamov01" },
    { name: "Rustamov", surname: "Ozodbek", birthdate: "2008-08-28", login: "rustamov.ozodbek2808" },
    { name: "Sotiboldiyeva", surname: "Sevinchxon", birthdate: "2008-02-01", login: "sevinchxon_sotiboldi" },
    { name: "Tillaboyev", surname: "Rozimuhammad", birthdate: "2008-11-09", login: "tillaboyev.r" },
    { name: "Turgunov", surname: "Abdulaziz", birthdate: "2008-12-28", login: "turgunov.abdulaziz12" },
    { name: "Valijonova", surname: "Shahzoda", birthdate: "2008-03-06", login: "shahzoda.valijonova" },
    { name: "Xursandaliyev", surname: "Luqmonjon", birthdate: "2008-05-28", login: "lxursandaliyev" },
    { name: "Xursandaliyeva", surname: "Gulsanam", birthdate: "2008-01-27", login: "xursanaliyeva.g" },
    { name: "Abduhamidov", surname: "Abdulaziz", birthdate: "2010-07-07", login: "a.abduhamidov0707201" },
    { name: "Abdujabborov", surname: "Lazizibek", birthdate: "2010-07-07", login: "lazizibeka" },
    { name: "Abdurahimova", surname: "Maftunaxon", birthdate: "2010-04-27", login: "abdurahmovam" },
    { name: "Abdurashidova", surname: "Shukronaxon", birthdate: "2010-12-25", login: "abdurashidovashukron" },
    { name: "Abdusalomov", surname: "Jasurbek", birthdate: "2010-10-31", login: "jasur.abdusalomov201" },
    { name: "Abdusotorova", surname: "Kumishxon", birthdate: "2010-11-06", login: "kabdusotorova" },
    { name: "Anvarova.", surname: "Yulduzxon", birthdate: "2010-03-20", login: "yuldizxonanvarova" },
    { name: "Bahtiyorov", surname: "Fahriyor", birthdate: "2010-10-16", login: "fahriyorbahtiyorov" },
    { name: "Baxtiyorova", surname: "Fotima", birthdate: "2010-04-12", login: "fitimabaxtiyorova" },
    { name: "Baxtiyorova", surname: "Zaxro", birthdate: "2010-04-12", login: "b.zaxro" },
    { name: "Borataliev", surname: "Otabek", birthdate: "2010-02-17", login: "otabekborataliev" },
    { name: "Bostonalieva", surname: "Bibihonim", birthdate: "2010-04-20", login: "bbostonalieva" },
    { name: "Ergashaliev", surname: "Odilbek", birthdate: "2010-05-03", login: "ergashalliev" },
    { name: "Gulomjonov", surname: "Kamronbek", birthdate: "2010-11-15", login: "kamronbekgulmjonov" },
    { name: "Imomalieva", surname: "Sayyora", birthdate: "2010-02-27", login: "sayyoraimomalieva" },
    { name: "Isroilov", surname: "Feruzbek", birthdate: "2010-07-03", login: "feruzbek.isroilov" },
    { name: "Mehmonaliev", surname: "Behruzbek", birthdate: "2010-12-19", login: "mehmonaliev" },
    { name: "Mullajonova", surname: "Nargiza", birthdate: "2010-12-20", login: "nargiza.mullajonova2" },
    { name: "Muxsinjonova", surname: "Visola", birthdate: "2010-08-14", login: "visolamuhsimova" },
    { name: "Orifjonova", surname: "Latofat", birthdate: "2010-09-22", login: "latofatorifjonova" },
    { name: "Orinboev", surname: "BoburMirzo", birthdate: "2010-09-09", login: "boburmirzoorinboev" },
    { name: "Qosimalieva", surname: "Mushtariy", birthdate: "2010-05-01", login: "mushtariyqosimalieva" },
    { name: "Rustamaliev", surname: "Muhammadali", birthdate: "2010-01-29", login: "rustamaliev.m" },
    { name: "Toyirjonova", surname: "Kumush", birthdate: "2010-10-07", login: "kumushtoyirjonova" },
    { name: "Turgunboyeva", surname: "Mohinabonu", birthdate: "2010-11-11", login: "mohinabonuturgunb" },
    { name: "Tursunov", surname: "Shamshod", birthdate: "2010-08-08", login: "tursunov_shamshod" },
    { name: "Umaraliev", surname: "Saidkamol", birthdate: "2010-10-14", login: "saidkamolumaraliev" },
    { name: "Xamdamova", surname: "Sarvinoz", birthdate: "2010-07-29", login: "hamdamova.sarvinoz20" },
    { name: "Xaydaralieva", surname: "Zarinaxon", birthdate: "2011-01-28", login: "zarinaxaydaralieva" },
    { name: "Xojamberdieva", surname: "Noila", birthdate: "2010-09-17", login: "noilaxojamberdieva" },
    { name: "Xolmatova", surname: "Dinora", birthdate: "2010-11-04", login: "xolmatovadinora" },
    { name: "Xursandaliev", surname: "Mirhayot", birthdate: "2010-09-05", login: "mirhayotxursandaliev" },
    { name: "Xursandalieva", surname: "Sevinchxon", birthdate: "2010-11-20", login: "sevinchnhon" },
    { name: "Yoldashaliev", surname: "Elshodbek", birthdate: "2010-10-09", login: "eyoldashaliev" },
    { name: "Shahobiddinova", surname: "Nilufar", birthdate: "2010-04-04", login: "nilufarshahobiddinov" },
    { name: "Shuxratjonov", surname: "Temur", birthdate: "2010-01-16", login: "temurshuxratjonov" },
    { name: "Abduhamidov", surname: "Shamsiddin", birthdate: "2010-02-05", login: "abduhamidovshamsiddi" },
    { name: "Abdukarimova", surname: "Azimaxon", birthdate: "2010-11-13", login: "azimaxonabdukarimova" },
    { name: "Abdumutallibova", surname: "Qanoatxon", birthdate: "2010-08-05", login: "abdumutalliboeva" },
    { name: "Abdurahmonova", surname: "Kumushxon", birthdate: "2010-12-12", login: "abdurahmonovakumushx" },
    { name: "Abduraimova", surname: "Mushtariybonu", birthdate: "2010-05-01", login: "m.abduraimova0601201" },
    { name: "Abdusamieva", surname: "Jasmina", birthdate: "2010-03-16", login: "jasminaabdusamieva" },
    { name: "Aliboeva", surname: "Asalxon", birthdate: "2010-08-23", login: "asalxonaliboeva" },
    { name: "A'zamova", surname: "Gulchexraxon", birthdate: "2010-09-22", login: "gulchexraxonazamova" },
    { name: "Boratalieva", surname: "Shabbona", birthdate: "2010-09-02", login: "shabbonaboratalieva" },
    { name: "Erkinov", surname: "Komiljon", birthdate: "2010-06-19", login: "komiljonerkiov" },
    { name: "Ganiyeva", surname: "Nigora", birthdate: "2010-06-18", login: "nigora.ganieva180720" },
    { name: "Imomaliev", surname: "Abrorjon", birthdate: "2010-08-15", login: "abrorimomaliev" },
    { name: "Isoqboeva", surname: "Nilufar", birthdate: "2010-02-22", login: "nilufarisoqboeva" },
    { name: "Mirzamahmudov", surname: "Mirjalol", birthdate: "2010-03-31", login: "mirzamahmudovmirjalo" },
    { name: "Muhamadalieva", surname: "Elmira", birthdate: "2010-06-05", login: "elmiramuhamadalieva" },
    { name: "MurodxoJaev", surname: "LutfilloxoJa", birthdate: "2010-08-21", login: "lmurodxojaev" },
    { name: "Nasibaliev", surname: "Azizbek", birthdate: "2010-11-29", login: "azizbeknasvaliev" },
    { name: "Nasibaliev", surname: "Gulasal", birthdate: "2010-02-19", login: "gulasalnasvalieva" },
    { name: "Nasibaliev", surname: "Nasimbek", birthdate: "2010-02-13", login: "nasimbeknasvaliev" },
    { name: "Nematov", surname: "Shamshodbek", birthdate: "2010-12-31", login: "nematov_shamshod" },
    { name: "Rasuljonova", surname: "Ozodaxon", birthdate: "2010-12-09", login: "ozoda.rasulova120420" },
    { name: "Raximnazarova", surname: "Dildora", birthdate: "2010-08-30", login: "dildoraraximnazarova" },
    { name: "Sodigjonov", surname: "Shamshodbek", birthdate: "2010-10-26", login: "shamshaod" },
    { name: "Sotiboldieva", surname: "Qanoatxon", birthdate: "2010-02-22", login: "qanoatsotiboldieva" },
    { name: "Tojimatova", surname: "Ruhshona", birthdate: "2010-06-20", login: "ruhshonatojimatova" },
    { name: "Tojimirzayeva", surname: "Feruzaxon", birthdate: "2010-10-13", login: "f.tojimirzayeva" },
    { name: "Toxtasinova", surname: "Mohigul", birthdate: "2010-09-17", login: "toxtasinova_mohigul" },
    { name: "Toshtemirov", surname: "Sanjarbek", birthdate: "2010-10-20", login: "sanjarbek_toshtemiro" },
    { name: "Umaralieva", surname: "Ezozaxon", birthdate: "2010-05-04", login: "ezozhonumaralieva" },
    { name: "Xolmatova", surname: "Marjonaxon", birthdate: "2010-08-27", login: "marjonaxolmatova0820" },
    { name: "Xoshimjonov", surname: "Diyorbek", birthdate: "2010-03-19", login: "diyorbek_xoshimjonov" },
    { name: "Xursanalieva", surname: "Marjona", birthdate: "2010-05-12", login: "marjonaxursanalieva" },
    { name: "Yigitaliyev", surname: "Hikmatillo", birthdate: "2010-10-17", login: "yhikmatillo" },
    { name: "Y'qubjonov", surname: "Aslbek", birthdate: "2010-11-15", login: "yqubjonov" },
    { name: "Abdulahatov", surname: "Ozodbek", birthdate: "2010-07-30", login: "abdulahatovozodbek" },
    { name: "Abdulhamidova", surname: "Gulsanam", birthdate: "2010-01-17", login: "abdulhamidova_gulsan" },
    { name: "Abdurahimova", surname: "Ruxshonabonu", birthdate: "2011-02-01", login: "ruxshonabonuabdurahi" },
    { name: "Abdurahmonov", surname: "Qilichbek", birthdate: "2010-12-31", login: "qilichbekabduraxmono" },
    { name: "Akbarov", surname: "Ibrohim", birthdate: "2010-09-16", login: "ibrohim.akbarov09201" },
    { name: "Esanaliev", surname: "Mirshod", birthdate: "2010-09-20", login: "mirshodesanaliev" },
    { name: "Gayratjonova", surname: "Azizbek", birthdate: "2010-01-04", login: "azizbekgayratjonova" },
    { name: "Haydaralieva", surname: "Mohigul", birthdate: "2010-03-01", login: "mohigulhaydaralieva" },
    { name: "Husanboev", surname: "Jasurbek", birthdate: "2010-09-05", login: "jasurbekhusanboev" },
    { name: "Ibrohimova", surname: "Mahliyo", birthdate: "2010-12-21", login: "ibrohimovamahliyo201" },
    { name: "Ilhomjonov", surname: "Lazizbek", birthdate: "2010-06-08", login: "ilhomjonovlazizbek" },
    { name: "Ismoilov", surname: "Asadbek", birthdate: "2010-10-10", login: "ismoilovasadbek10201" },
    { name: "Karimov", surname: "Sherzod", birthdate: "2010-06-19", login: "karimov.sherzod06201" },
    { name: "Komiljonov", surname: "Ahliddin", birthdate: "2010-12-06", login: "axliddinkomiljonov" },
    { name: "Mamatoxirov", surname: "Qilichbek", birthdate: "2010-01-28", login: "qilichbekmamatoxirov" },
    { name: "Muhiddinova", surname: "Sevinch", birthdate: "2010-11-02", login: "sevinchmuhiddinova11" },
    { name: "Muqimjonova", surname: "Dilnura", birthdate: "2010-07-27", login: "muqimjonovadilnura" },
    { name: "Nabijonova", surname: "Ruhshona", birthdate: "2010-09-16", login: "nabijonovaruhshona20" },
    { name: "Ne'matjonova", surname: "Ruxshonabonu", birthdate: "2010-08-25", login: "nematjonovaruxshonab" },
    { name: "Nomonjonov", surname: "Nasimbek", birthdate: "2010-11-24", login: "nasimbeknomonjonov" },
    { name: "Odilova", surname: "Mahliyobonu", birthdate: "2010-01-04", login: "mahliyobonuodilova" },
    { name: "Rahmatova", surname: "Marjona", birthdate: "2010-03-23", login: "marjona.rahmatova032" },
    { name: "Salimova", surname: "Zilolasalom", birthdate: "2010-10-21", login: "zilola.salimova10201" },
    { name: "Sobitaliev", surname: "Bobomurod", birthdate: "2010-01-11", login: "bobomurodsobitaliev" },
    { name: "Tojimatova", surname: "Mohinabonu", birthdate: "2010-11-02", login: "mohinabonutojimatova" },
    { name: "To'rayeva", surname: "Masturaxon", birthdate: "2010-08-11", login: "masturatoraeva" },
    { name: "Umaralieva", surname: "Kumushbibi", birthdate: "2011-01-31", login: "kumushumaralieva" },
    { name: "Usmonalieva", surname: "Nazokatxon", birthdate: "2010-09-22", login: "nazokatusmonalieva" },
    { name: "Xakimov", surname: "Abbosbek", birthdate: "2010-06-06", login: "abbosbek_xakimov" },
    { name: "Xakimova", surname: "Xusnorabonu", birthdate: "2010-06-04", login: "xusnorabonuxakimova" },
    { name: "Xolmatov", surname: "Muhammadyaxyo", birthdate: "2010-07-27", login: "muhammadyaxyoxolmato" },
    { name: "Xursandaliev", surname: "Abdurahmon", birthdate: "2010-10-15", login: "axursandaliev" }
];


// Qidiruv funksiyasi
document.getElementById("searchBtn").addEventListener("click", function () {
    const name = document.getElementById("name").value.toLowerCase().trim();
    const surname = document.getElementById("surname").value.toLowerCase().trim();
    const birthdate = document.getElementById("birthdate").value;
    
    const result = data.filter(item =>
        item.name.toLowerCase() === name &&
        item.surname.toLowerCase() === surname &&
        item.birthdate === birthdate
    );

   

    const resultDiv = document.getElementById("result");
    if (result.length > 0) {
        resultDiv.innerHTML = `
            <p><strong>Topildi:</strong> ${result[0].name} ${result[0].surname}</p>
            <p><strong>Login:</strong> <span id="login">${result[0].login}</span></p>
            <p><strong>Parol:</strong> <span id="parol">123456789*</span></p>
            <br>
            <br>
            <button class="copy-btn" onclick="copyLogin()">Loginni nusxa olish</button>
            <button class="copy-btn" onclick="copyParol()">Parolni nusxa olish</button>
            <br><br>
            <a href="http://emaktab.uz" target="_blank" rel="noopener noreferrer" style="border:2px solid aqua; padding: 5px; border-radius: 5px; ">  Kundalik.com | emaktab.com</a>
        `;
    } else {
        resultDiv.innerHTML = `<p>Ma'lumot topilmadi! Agar yordam kerak bo'lsa Dasturchi bilan bog'laning <b style="color: red;">Tug'ilgan kuningiz emaktab bazasida xato bo'lishi mumkin<b> <br> <a href="http://t.me/jamolidd1nov_08" target="_blank" rel="noopener noreferrer">Dasturchi</a></p>`;
    }
});



// Loginni nusxalash funksiyasi
function copyLogin() {
    const login = document.getElementById("login").textContent;

    navigator.clipboard.writeText(login).then(() => {
        
    }).catch(err =>  {
        console.error("Nusxa olishda xatolik: ", err);
    });
}
function copyParol() {
    const parol = document.getElementById("parol").textContent;

    navigator.clipboard.writeText(parol).then(() => {
        
    }).catch(err => {
        console.error("Nusxa olishda xatolik: ", err);
    });
}

// Harf kiritishni cheklash (Ism va Familiya uchun)
document.getElementById('name').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^A-Za-z]/g, '');
});

document.getElementById('surname').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^A-Za-z]/g, '');
});