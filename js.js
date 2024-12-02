// JSON formatidagi ma'lumotlar (Exceldan olingan)
const data = [
    { name: "Dilshodbek", surname: "Abdubakirov", birthdate: "2008-08-23", login: "dabdubakirov" },
    { name: "Bilol", surname: "Abdurahmonov", birthdate: "2008-09-27", login: "bilol.abdurahmonov" },
    { name: "Sanatjon", surname: "Abdurayimov", birthdate: "2008-09-01", login: "sanatjona" },
    { name: "Shohruzbek", surname: "Abdusamiyev", birthdate: "2008-09-03", login: "shohruzabdusamiyev" },
    { name: "Ravshanbek", surname: "Ergashev", birthdate: "2007-12-19", login: "ergashevravshanbek12" },
    { name: "Javohir", surname: "Ismoilov", birthdate: "2008-11-02", login: "ismoilovjavohir11200" },
    { name: "Gulsanam", surname: "Jorayeva", birthdate: "2008-04-22", login: "gulsanam.jorayeva042" },
    { name: "Zarina", surname: "Mamajonova", birthdate: "2008-06-12", login: "zarina.mamajonova200" },
    { name: "Mohinur", surname: "Mansurova", birthdate: "2008-06-12", login: "mohinur.mansurova062" },
    { name: "Orasta", surname: "Nasibaliyeva", birthdate: "2008-05-22", login: "orastanasibaliyeva" },
    { name: "Azizbek", surname: "Nazirov", birthdate: "2008-11-10", login: "azizbek.nazirov11200" },
    { name: "Gulsanam", surname: "Nematova", birthdate: "2008-04-30", login: "gulsanam.nematova042" },
    { name: "Nurjahon", surname: "Nozimjonova", birthdate: "2008-09-02", login: "nozimjonovanurjahon" },
    { name: "Laylo", surname: "Rasuljonova", birthdate: "2008-05-30", login: "rasuljonovalaylo" },
    { name: "Dilshodbek", surname: "Rozmatov", birthdate: "2008-04-01", login: "dilshodbekrozmatov" },
    { name: "Kumushxon", surname: "Rozmatova", birthdate: "2008-12-16", login: "rozmatovakumushxon" },
    { name: "Jamshidbek", surname: "Rustamov", birthdate: "2008-01-31", login: "jamshidbekrustamov01" },
    { name: "Ozodbek", surname: "Rustamov", birthdate: "2008-08-28", login: "rustamov.ozodbek2808" },
    { name: "Sevinchxon", surname: "Sotiboldiyeva", birthdate: "2008-02-01", login: "sevinchxon_sotiboldi" },
    { name: "Rozimuhammad", surname: "Tillaboyev", birthdate: "2008-11-09", login: "tillaboyev.r" },
    { name: "Abdulaziz", surname: "Turgunov", birthdate: "2008-12-28", login: "turgunov.abdulaziz12" },
    { name: "Shahzoda", surname: "Valijonova", birthdate: "2008-03-06", login: "shahzoda.valijonova" },
    { name: "Luqmonjon", surname: "Xursandaliyev", birthdate: "2008-05-28", login: "lxursandaliyev" },
    { name: "Gulsanam", surname: "Xursandaliyeva", birthdate: "2008-01-27", login: "xursanaliyeva.g" }
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