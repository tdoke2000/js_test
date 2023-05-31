const get_song = () => {
  let song_num = Math.floor(Math.random() * ninth_peel.length);
  song_name.innerText = ninth_peel[song_num];
};

const ninth_peel = ["スペースシャトル・ララバイ", "恋する惑星", "ミレニアムハッピー・チェーンソーエッヂ", "カオスが極まる", "City peel", "Nihil Pip Viper", "Numbness like a ginger", "もう君に会えない", "アンチ・トレンディ・クラブ", "kaleido proud fiesta", "フレーズボトル・バイバイ"];

let song_name = document.getElementById("songNmae");
let check_button = document.getElementById("button");
check_button.addEventListener("click", get_song);
