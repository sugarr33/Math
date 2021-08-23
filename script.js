let table = document.querySelector('.kotak table');
let penjumlahanc = document.querySelector('.Penjumlahan');
let penguranganc = document.querySelector('.Pengurangan');
let perkalianc = document.querySelector('.Perkalian');
let pembagianc = document.querySelector('.Pembagian');


function random(){
    return Math.floor(Math.random() * 1000);
}

function apply(){
    if(penjumlahanc.checked || penguranganc.checked || perkalianc.checked || pembagianc.checked){
        table.innerHTML = `
        <tr class="mian">
            <td style="width: 50px;">NO</td>
            <td colspan="3" style="padding: 0 20px; ">SOAL</td>
            <td colspan="2" onclick="lihat_jawaban()" id="jawaban">LIHAT JAWABAN</td>
        </tr>`
        for (let i = 0; i < 100; i++) {
            let a = random();
            let b = random();
            let x = '';
            let operator = '';
            let opr = true;
            while (opr) {
                let z = Math.floor(Math.random() * 4);
                if (z == 0 && penjumlahanc.checked) {
                    x = a + b;
                    operator = '+'
                    opr = false;
                }else if ( z == 1 && penguranganc.checked){
                    x = a - b;
                    operator = '-'
                    opr = false;
                }else if ( z == 2 && perkalianc.checked){
                    x = a * b;
                    operator = 'x'
                    opr = false;
                }else if ( z == 3 && pembagianc.checked){
                    x = a / b;
                    operator = ':'
                    opr = false;
                }
            }
            table.innerHTML += 
            `<tr>
                <td> ${i + 1}</td>
                <td class="soal"> ${a}</td>
                <td class="soal"> ${operator} </td>
                <td class="soal"> ${b}</td>
                <td style="width: 240px; padding: 0;" class="jawabanSaya"><input type="number" onclick="penjelas(${i + 1})"></td>
                <td style="width: 240px; display: none;" class="jawaban"> ${x}</td>
            </tr>`;
        }
    } else {
        alert('centang oprasi yang di inginkan terlebih dahulu!')
        return
    }
}


function penjelas(w) {
    let tr = document.querySelectorAll('.kotak table tr');
    tr.forEach(function (v, i) {
        tr[i].style.backgroundColor = "inherit";    
    })
    tr[w].style.backgroundColor = "rgb(121, 149, 160)";
}

window.onclick = function(event) {
    let tr = document.querySelectorAll('.kotak table tr');
    if (!event.target.matches('.jawabanSaya input')) {
        tr.forEach(function (v, i) {
            tr[i].style.backgroundColor = "inherit";    
        })
    }

}

function lihat_jawaban() {
    let jawaban = document.querySelectorAll('.jawaban')
    let jawabanSayaTable = document.querySelectorAll('.jawabanSaya')
    let jawabanSaya = document.querySelectorAll('.jawabanSaya input')
    for (let i = 0; i < jawaban.length; i++) {
        jawaban[i].style.display = "table-cell";
        if (jawaban[i].innerText == jawabanSaya[i].value) {
            jawabanSayaTable[i].style.backgroundColor = "lime";
        } else{
            jawabanSayaTable[i].style.backgroundColor = "salmon";
        }
    }
}

