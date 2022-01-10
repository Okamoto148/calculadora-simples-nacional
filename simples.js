const calcular = document.getElementById('calcular');

function imc () {
    const rba12 = document.getElementById('rba12').value;
    const fm = document.getElementById('fm').value;
    const resultado = document.getElementById('resultado');
    const resultado2 = document.getElementById('resultado2');
    const select = document.getElementById('tipo');
    const value = select.options[select.selectedIndex].value;



if (value < 2) {



       if (rba12 < 180000){
            classificacao = 0.04;
        }else if (rba12 < 360000) {
            classificacao = ((rba12*0.073 - 5940)/rba12);
        }else if (rba12 < 720000){
            classificacao = ((rba12*0.095 - 13860)/rba12);
        }else if (rba12 < 1800000){
            classificacao = ((rba12*0.107 - 22500)/rba12);
        }else if (rba12 < 3600000){
            classificacao = ((rba12*0.143 - 87300)/rba12);
        }else if (rba12 < 4800000){
            classificacao = ((rba12*0.19 - 378000)/rba12);
        }


        
    }else if (value <3){
        
       if (rba12 < 180000){
            classificacao = 0.045;
        }else if (rba12 < 360000) {
            classificacao = ((rba12*0.078 - 5940)/rba12);
        }else if (rba12 < 720000){
            classificacao = ((rba12*0.1 - 13860)/rba12);
        }else if (rba12 < 1800000){
            classificacao = ((rba12*0.112 - 22500)/rba12);
        }else if (rba12 < 3600000){
            classificacao = ((rba12*0.147 - 85000)/rba12);
        }else if (rba12 < 4800000){
            classificacao = ((rba12*0.3 - 720000)/rba12);
        }

	}else if (value < 4) {

       if (rba12 < 180000){
            classificacao = 0.06;
        }else if (rba12 < 360000) {
            classificacao = ((rba12*0.112 - 9360)/rba12);
        }else if (rba12 < 720000){
            classificacao = ((rba12*0.135 - 17640)/rba12);
        }else if (rba12 < 1800000){
            classificacao = ((rba12*0.16 - 35640)/rba12);
        }else if (rba12 < 3600000){
            classificacao = ((rba12*0.21 - 125640)/rba12);
        }else if (rba12 < 4800000){
            classificacao = ((rba12*0.33 - 648000)/rba12);
        }


        
    }else if (value < 5){
        
       if (rba12 < 180000){
            classificacao = 0.045;
        }else if (rba12 < 360000) {
            classificacao = ((rba12*0.09 - 8100)/rba12);
        }else if (rba12 < 720000){
            classificacao = ((rba12*0.102 - 12420)/rba12);
        }else if (rba12 < 1800000){
            classificacao = ((rba12*0.14 - 39780)/rba12);
        }else if (rba12 < 3600000){
            classificacao = ((rba12*0.22 - 183780)/rba12);
        }else if (rba12 < 4800000){
            classificacao = ((rba12*0.33 - 828000)/rba12);
        }
    
	}else if (value < 6){
        
       if (rba12 < 180000){
            classificacao = 0.155;
        }else if (rba12 < 360000) {
            classificacao = ((rba12*0.18 - 4500)/rba12);
        }else if (rba12 < 720000){
            classificacao = ((rba12*0.195 - 9900)/rba12);
        }else if (rba12 < 1800000){
            classificacao = ((rba12*0.205 - 17100)/rba12);
        }else if (rba12 < 3600000){
            classificacao = ((rba12*0.23 - 62100)/rba12);
        }else if (rba12 < 4800000){
            classificacao = ((rba12*0.305 - 540000)/rba12);
        }

    }

const calculo=(classificacao*fm).toFixed(2);



	resultado4.textContent = `Imposto do mês = R$ ${calculo}`;

	
}


calcular.addEventListener('click', imc);