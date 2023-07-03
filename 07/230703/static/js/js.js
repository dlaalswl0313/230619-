// var totalStations = 40;
// var stationsInOperation = 4;
// var currentStation = 1;
// var currentStop = 0;
// var direction = 1; // 1: forward, -1: backward

// function updateSubwayLocation() {
//   // 지하철을 다음 역으로 이동
//   currentStation += direction;

//   //지하철이 종점에 도달하면 방향을 바꿈 
//   if (currentStation === totalStations || currentStation === 1) {
//     direction *= -1;
//   }

//   // 테이블에서 현재 스테이션을 강조 표시한다.
//   var stations = document.getElementsByTagName("td");
//   for (var i = 0; i < stations.length; i++) {
//     if (i === currentStation - 1) {
//       stations[i].style.background = "yellow";
//       stations[i].style.color = "black";
//     } else {
//       stations[i].style.background = "white";
//       stations[i].style.color = "black";
//     }
//   }

//   // 각 열차의 역 정보 업데이트
//   var train1Info = document.getElementById("train1");
//   var train2Info = document.getElementById("train2");
//   var train3Info = document.getElementById("train3");
//   var train4Info = document.getElementById("train4");

//   train1Info.innerHTML = "1호차 - 현재 위치: " + currentStation;
//   train2Info.innerHTML = "2호차 - 현재 위치: " + (currentStation + 5);
//   train3Info.innerHTML = "3호차 - 현재 위치: " + (currentStation + 10);
//   train4Info.innerHTML = "4호차 - 현재 위치: " + (currentStation + 15);

//   //중지 횟수 증가
//   currentStop++;

//   // 3초마다 업데이트 반복
//   setTimeout(updateSubwayLocation, 3000);
// }

// // 초기 지하철 위치 업데이트 시작 초 시간
// setTimeout(updateSubwayLocation, 0);



/* 
 4개의 기차가 운영되야하고, 
 화면에 현재 지하철의 위치를 표시한다. 
 3초에 한번씩 현재 지하철 위치를 표시한다.
 지하철모양을 누르면 현재 위치 정보가 화면에 나와야한다. 
 역을 클릭하면 가장 가까운 지하철이 몇 정거장에 있는지 
*/
const station = ["까치산", "신정네거리", "양천구청", "신도림", "문래", "영등포구청", "당산", "합정", "홍대입구", "신촌",
  "이대", "아현", "충청로", "시청", "을지로입구", "을지로3가", "을지로4가", "동대문역사문화공원", "신당", "상왕십리",
  "왕십리", "한양대", "뚝섬", "성수", "건대입구", "구의", "강변", "잠실나루", "잠실", "잠실시내",
  "종합운동장", "삼성", "선릉", "역삼", "강남", "교대", "서초", "방배", "사당", "낙성대",
  "서울대입구", "봉천", "신림", "신대방", "구로디지털단지", "대림", "청량리", "회기", "광운대", "신내"];

const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
  "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"];

//배열사용해서 탐색해서 나오게 하도록 
// Add event listeners to table cells
var cells = document.querySelectorAll("#line td");
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", showNearestSubwayStop);
  cells[i].classList.add("info"); // Add the 'info' class to each cell
}

function showNearestSubwayStop(event) {
  var clickedCell = event.target;
  var cellNumber = parseInt(clickedCell.innerText);
  var nearestStop = Math.abs(cellNumber - currentStation + 1);
  alert("The nearest subway stop is " + nearestStop + " stops away.");
}

function updateSubwayLocation() {
  // Update table cells' background and text color based on the current station
  for (var i = 0; i < cells.length; i++) {
    if (i === currentStation - 1) {
      cells[i].style.background = "yellow";
      cells[i].style.color = "black";
      cells[i].innerHTML = `
        <div id="train1">1호차 - 현재 위치: ${currentStation}</div>
        <div id="train2">2호차 - 현재 위치: ${currentStation + 5}</div>
        <div id="train3">3호차 - 현재 위치: ${currentStation + 10}</div>
        <div id="train4">4호차 - 현재 위치: ${currentStation + 15}</div>
      `;
    } else {
      cells[i].style.background = "white";
      cells[i].style.color = "black";
      cells[i].innerHTML = ""; // Clear the contents of other cells
    }
  }
}

// Call the updateSubwayLocation function to initialize the table cells' appearance
updateSubwayLocation();
