        const actividad = "actividad1";
        var position1 = 1;
        var position2 = 1;
        var rotation1 = 60;
        var rotation2 = -60;
        var pointsPt1=0;

        var position3 = 1;
        var position4 = 1;
        var rotation3 = 60;
        var rotation4 = -60;
        
        var pointsPt1=0;
        var pointsPt2=0;

        document.getElementById("mainContainer2").style.display="none";
        document.getElementById("containerResults").style.display="none";
        document.getElementById("btn_continuar2").style.display="none";

        document.getElementById("wheel1").onclick = function(){
            
            if(position1>5){
                document.getElementById("wheel1").style.rotate = rotation1+"deg";
                document.getElementById("wheel1").style.transition = "all 0.3s ease";
                rotation1=rotation1+60;
                position1 = 1;
            }else{
                document.getElementById("wheel1").style.rotate = rotation1+"deg";
                document.getElementById("wheel1").style.transition = "all 0.3s ease";
                rotation1=rotation1+60;
                position1 = position1+1;
            }
        }

        document.getElementById("wheel2").onclick = function(){
            if(position2>5){
                document.getElementById("wheel2").style.rotate = rotation2+"deg";
                document.getElementById("wheel2").style.transition = "all 0.3s ease";
                rotation2=rotation2-60;
                position2 = 1;
            }else{
                document.getElementById("wheel2").style.rotate = rotation2+"deg";
                document.getElementById("wheel2").style.transition = "all 0.3s ease";
                rotation2=rotation2-60;
                position2 = position2+1;
            }
        }

        document.getElementById("wheel3").onclick = function(){
            
            if(position3>5){
                document.getElementById("wheel3").style.rotate = rotation3+"deg";
                document.getElementById("wheel3").style.transition = "all 0.3s ease";
                rotation3=rotation3+60;
                position3 = 1;
            }else{
                document.getElementById("wheel3").style.rotate = rotation3+"deg";
                document.getElementById("wheel3").style.transition = "all 0.3s ease";
                rotation3=rotation3+60;
                position3 = position3+1;
            }
        }

        document.getElementById("wheel4").onclick = function(){
            if(position4>5){
                document.getElementById("wheel4").style.rotate = rotation4+"deg";
                document.getElementById("wheel4").style.transition = "all 0.3s ease";
                rotation4=rotation4-60;
                position4 = 1;
            }else{
                document.getElementById("wheel4").style.rotate = rotation4+"deg";
                document.getElementById("wheel4").style.transition = "all 0.3s ease";
                rotation4=rotation4-60;
                position4 = position4+1;
            }
        }


        document.getElementById("btnComparar").onclick = function(){
            comprobarConceptos(position1, position2);
        }

        document.getElementById("btnComparar2").onclick = function(){
            comprobarConceptos(position3, position4);
        }

        function comprobarConceptos(position1, position2){
            if((position1===2)&&(position2===2)){
                document.getElementById("answerBox_2").style.backgroundColor="white";
                document.getElementById("answerBox_2_h1").style.color="#E64F27";
                pointsPt1++;
                reviewPart1(pointsPt1);
            }else if((position1===1)&&(position2===1)){
                document.getElementById("answerBox_1").style.backgroundColor="white";
                document.getElementById("answerBox_1_h1").style.color="#E64F27";
                pointsPt1++;
                reviewPart1(pointsPt1);
            }else if((position1===6)&&(position2===6)){
                document.getElementById("answerBox_6").style.backgroundColor="white";
                document.getElementById("answerBox_6_h1").style.color="#E64F27";
                pointsPt1++;
                reviewPart1(pointsPt1);
            }else if((position1===5)&&(position2===5)){
                document.getElementById("answerBox_5").style.backgroundColor="white";
                document.getElementById("answerBox_5_h1").style.color="#E64F27";
                pointsPt1++;
                reviewPart1(pointsPt1);
            }else if((position1===4)&&(position2===4)){
                document.getElementById("answerBox_4").style.backgroundColor="white";
                document.getElementById("answerBox_4_h1").style.color="#E64F27";
                pointsPt1++;
                reviewPart1(pointsPt1);
            }else if((position1===3)&&(position2===3)){
                document.getElementById("answerBox_3").style.backgroundColor="white";
                document.getElementById("answerBox_3_h1").style.color="#E64F27";
                pointsPt1++;
                reviewPart1(pointsPt1);
            }else if(position1!=position2){
                console.log("conceptos incorrectos");
            }
            
        }

        function reviewPart1(points){
            if(points===6){
                document.getElementById("btn_continuar1").style.display="block";
            }
            if(points===12){
                document.getElementById("btn_continuar2").style.display="block";
            }
        }

        function cleanAnswerBox(){
            document.getElementById("answerBox_1").style.backgroundColor="#E64F27";
            document.getElementById("answerBox_1_h1").style.color="white";
            document.getElementById("answerBox_1_h1").innerHTML = "07";

            document.getElementById("answerBox_2").style.backgroundColor="#E64F27";
            document.getElementById("answerBox_2_h1").style.color="white";
            document.getElementById("answerBox_2_h1").innerHTML = "08";

            document.getElementById("answerBox_3").style.backgroundColor="#E64F27";
            document.getElementById("answerBox_3_h1").style.color="white";
            document.getElementById("answerBox_3_h1").innerHTML = "09";

            document.getElementById("answerBox_4").style.backgroundColor="#E64F27";
            document.getElementById("answerBox_4_h1").style.color="white";
            document.getElementById("answerBox_4_h1").innerHTML = "10";

            document.getElementById("answerBox_5").style.backgroundColor="#E64F27";
            document.getElementById("answerBox_5_h1").style.color="white";
            document.getElementById("answerBox_5_h1").innerHTML = "11";

            document.getElementById("answerBox_6").style.backgroundColor="#E64F27";
            document.getElementById("answerBox_6_h1").style.color="white";
            document.getElementById("answerBox_6_h1").innerHTML = "12";
        }


        document.getElementById("btn_continuar1").onclick = function(){
            cleanAnswerBox();
            document.getElementById("titleContainer").style.display="none";
            document.getElementById("mainContainer1").style.display="none";
            document.getElementById("mainContainer2").style.display="flex";
            document.getElementById("btn_continuar1").style.display="none";
        }

        document.getElementById("btn_continuar2").onclick = function(){
            document.getElementById("titleContainer").style.display="none";
            document.getElementById("mainContainer2").style.display="none";
            document.getElementById("containerAnswers").style.display="none";
            document.getElementById("mainContainer2").style.display="none";
            document.getElementById("containerResults").style.display="flex";
        }

        document.getElementById("btnVolver").onclick = function(){
            localStorage.setItem("textvalue", actividad);
            window.open("../OVA7V001.html","_self");
            return false;
        }