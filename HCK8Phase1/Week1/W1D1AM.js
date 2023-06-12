//Briefing
/*
1. yang harus dibuat dalam phase 1:
time management: buatlah jadwal dari jam 7 hingga 10:30

2. scoring 
live code:
week 2
week 3
week 4
masing masing 15% jadi totalnya 45%
di akhir ada pair project 10%
Graduate Challange total juga 45% tiap week ada graduate challange
deadline challenge selalu besoknya jam 9. yang dinilai adalah commit terakhir setelah deadline

3. instructor phase ini cuma 3: bagas, teddy, alam

4. clone - code in main - check with git status - make commit for important changes - push - assign to buddy.

5. Kelas pagi(AM) debugging:
macam-macam bug/sample error:
1. reference error: biasanya untuk value yang gaada isinya. harusnya ada yang dideclare
2. unexpected token: biasanya ada kelebihan sesuatu atau kurang sesuatu dalam grammar codingannya.
3. output not same as requirement: algoritma tidak sesuai yang dibutuhkan
4. type error/is not a function: tipe dari datanya itu apa tapi malah pakai built in function lainnya.
5. infinite loop: loop yang terus berulang karena gak sesuai output yang diharapkan atau gaada faktor pemberhentinya.
6.maximum call stack: ini untuk function yang manggil dirinya sendiri (bisa dilihat di file function). nah ini kayak infinite loop tapi di function.
7. dalam error kita harus cari tau errornya apa. goalsnya ketahui dulu errornya tipenya apa. baru nanti kita ke penyelesaiannya, karena nanti harus ada reportnya why bugs dan why error

*/
//testing ada di bawah:
{
    function stringReverser(param) {
    let result = ""
    for (let i = param.length - 1; i >= 0; i--){
        result += param[i]
    }
    return result
}
console.log(stringReverser('bakso'))
}