function nameValue(nama){
  let namaUpperCase = nama.toUpperCase();             // eliminate beza huruf besar & kecil
  const regexp = /[A-Z]/gi;                           // dapatkan abjad a-z sahaja
  const namaDiTapis = namaUpperCase.match(regexp);

  const nilaiAbjad = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11,
    L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20,
    U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
    };

  const nilaiNama = namaDiTapis.map(char => nilaiAbjad[char]);

  let sum = 0;

  for (let i = 0; i < nilaiNama.length; i += 1) {
    sum += nilaiNama[i];
  }
  console.log(sum);
}

nameValue(`Khairul Anwar`)