const board_img=["요코타마유.jpg","성호.jpg","앤톤.jpg","채형원.jpg","지젤.png","변우석.jpg","허윤진.jpg","창빈.jpg","제이콥.jpg","나오이레이.jpg"
                ,"나가노메이.jpg","하니.jpg","이승협.jpg","이준혁.jpg","노윤서.jpg","김용지.jpg","니시노나나세.jpg","이주우.jpg","쇼타로.jpg","지현우.jpg",
                "이종원.jpg","김도완.jpg","한상혁.jpg","류수정.jpg","조혜주.png","모리이아이미.jpg","김현진.jpg","신위.jpg"];
                const board=[];
                var gamer=[]; // 참가자 정보 저장 
                
                $(function(){
                    for(var i=0; i<28; i++){ board.push(0);}
                    initBoard();
                    draw();
                    $("#setBt").click(setOpen);
                    $("#dice_bt").click(dice_turn);
                    
                    
                    t=setInterval(() => { // 참가자 등록 완료될때까지  감시 하기
                        if(gamer.length>0){
                            //console.log(gamer);
                            $("#dice_bt").attr('disabled',false);
                            draw();  // 참가수 만큼 말 그리기
                            clearInterval(t);
                        }
                    }, 50);
                });