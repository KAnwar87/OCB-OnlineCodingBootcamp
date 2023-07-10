// Assignment Tuan Razman
console.log("\nAssignment Tuan Razman\n- - - - - - - - - - -");

for (let x = 1; x <= 100; x++) {
    if (x % 7 == 0) {
        console.log("Hebat");
    } else {
        console.log(x);
    }
}


// ## Cabaran Javascript Tambahan

// 1. Buat Array haiwanZoo yang ada 10 haiwan. Gunakan for-loop untuk paparkan kesemua haiwan tersebut.
console.log("\nCabaran Javascript Tambahan 1\n- - - - - - - - - - -");

var haiwanZoo = ['Panda', 'Harimau', 'Ular', 'Oyen', 'Gajah', 'Unta', 'Zirafah', 'Penguin', 'Burung', 'Bunny'];

for (let i = 0; i<=haiwanZoo.length-1; i++) {
    console.log(haiwanZoo[i]);
}


// 2. Dengan Array haiwanZoo yang telah dibina sebelum ini, paparkan kesemua haiwan tersebut dengan turutan terbalik.
console.log("\nCabaran Javascript Tambahan 2\n- - - - - - - - - - -");

for (let i = 9; i>=0; i--) {
    console.log(haiwanZoo[i]);
}


// 3. Gunakan for-loop untuk hasilkan paparan corak seperti berikut :
// #
// ##
// ###
// ####
// #####
console.log("\nCabaran Javascript Tambahan 3\n- - - - - - - - - - -");

var hash = []

for (let i = 0; i <= 4; i++) {
    addHash = hash.push(`#`);
    console.log(hash);
}



// 4. Gunakan for-loop untuk hasilkan paparan corak seperti berikut :
// #####
// ####
// ###
// ##
// #
console.log("\nCabaran Javascript Tambahan 4\n- - - - - - - - - - -");

for (let i = 4; i > 0; i--) {
    removeHash = hash.pop();
    console.log(hash);
}


// 5. Kalau a = 1, b = 2, c = 3 … dan seterusnya.
// namevalue( "abu" ) akan memulangkan nilai 24
// namevalue( "siti" ) akan memulangkan nilai 57
// Tulis kod untuk fungsi namevalue().
// Bantuan : mungkin perlu guna regex atau split().
console.log("\nCabaran Javascript Tambahan 5\n- - - - - - - - - - -");

function nameValue(nama){
    let namaUpperCase = nama.toUpperCase();                         // eliminate beza huruf besar & kecil
    const regexp = /[A-Z]/gi;                                       // dapatkan abjad a-z sahaja
    const namaDiTapis = namaUpperCase.match(regexp);
                                                                                    
    const nilaiAbjad = {                                            
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, 
        H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, 
        O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, 
        V: 22, W: 23, X: 24, Y: 25, Z: 26
    };

    const nilaiNama = namaDiTapis.map(char => nilaiAbjad[char]);

    let sum = 0;

    for (let i = 0; i < nilaiNama.length; i += 1) {
        sum += nilaiNama[i];
    }
    console.log(sum);
}

nameValue(`Khairul Anwar`)