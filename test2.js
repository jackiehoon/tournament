const pikachuCalc = (pika, candy) =>{
  let exp = 0

  while(true){
    if(candy<12){
      let lack = 12-candy
      if(lack<pika){
        // 오박사에게 보내기
        candy += lack
        pika -= lack
      } else {
        // 캔디도 없고 보낼 피카츄도 부족 종료
        break;
      }
    } else if( pika<1){
      // 캔디는 많은데 피카츄가 없음 종료
      break;
    }
    // 진화 횟수
    let evolve = parseInt(candy/12)
    if(evolve > 0) {
      // 진화 가능 시
      if(pika < evolve) {
        // 진화 가능 횟수 보다 피카츄 수가 적을 때
        // 피카츄 수 만큼만 진화시킴

        // 캔디소모
        candy -= pika * 12 
        // 진화보너스
        candy += pika
        // 경험치
        exp += pika * 500
        // 피카츄 소모
        pika = 0
      }else {
        // 피카츄 수 충분하면 진화 가능 횟수 만큼 진화시킴
        candy -= evolve * 12
        candy += evolve
        exp += evolve * 500
        pika -= evolve
      }
    }
  }

  
  return exp
}

console.log(pikachuCalc(1, 12))
console.log(pikachuCalc(13, 144))
console.log(pikachuCalc(10, 63))
console.log(pikachuCalc(1, 63))
console.log(pikachuCalc(63, 1))
console.log(pikachuCalc(0, 0))
console.log(pikachuCalc(3, 9))
console.log(pikachuCalc(4, 9))
