class Tateti{

    turno: number;
    tablero: Array<string>;
    str: string;
    strv: string;
    strd: string;
    erx = /xxx/;
    ero = /ooo/;

    constructor() {
        this.turno = 0;
        this.tablero = new Array<string>();
        this.str = "";
        this.strv = "";
        this.strd = "";
    }

    fill(btn: number) {
        if(this.turno == 0 || this.turno == 2 || this.turno == 4 || this.turno == 6 || this.turno == 8 ){
            if(this.turno == 8){
                this.winner('e');
            }
            document.getElementById(btn.toString()).innerHTML = 'X';
            this.tablero[btn] = 'x';
    
            document.getElementById('demo').innerHTML = this.tablero.toString();
            (document.getElementById(btn.toString()) as HTMLButtonElement).disabled = true;
            this.turno = this.turno + 1;
            if(this.turno >= 5){
                this.check3inline();
            }
        }else{
            document.getElementById(btn.toString()).innerHTML = 'O';
            this.tablero[btn] = 'o';
            (document.getElementById(btn.toString()) as HTMLButtonElement).disabled = true;
            this.turno = this.turno + 1;
            if(this.turno >= 5){
                this.check3inline();
            }
        }
    }

    check3inline() {
        for(let i = 0; i < 9; i++){
            this.str = this.str + this.tablero[i];
            if(i == 2){
                this.str = this.str + " ";
            }else if(i == 5){
                this.str = this.str + " ";
            }
        }
        for(let c = 0; c < 3; c++){
            for(let i = c; i < 9; i = i + 3){
                this.strv = this.strv + this.tablero[i];
            }
            this.strv = this.strv + " ";
        }
        for(let i = 0; i < 9; i = i + 4){
            this.strd = this.strd + this.tablero[i];
        }
        this.strd = this.strd + " ";
        for(let i = 2; i < 7; i = i + 2){
            this.strd = this.strd + this.tablero[i];
        }
        if(this.erx.test(this.str) || this.erx.test(this.strv) || this.erx.test(this.strd)){
            this.winner('x');
        }
        if(this.ero.test(this.str) || this.ero.test(this.strv) || this.ero.test(this.strd)){
            this.winner('o');
        }
        this.str = "";
        this.strv = "";
        this.strd = "";
    }

    winner(p: string) {
        if(p == 'x'){
            document.getElementById('winner').innerHTML = 'Ganador: X';
            document.getElementById('winner').style.display = 'block';
        }else if(p == 'o'){
            document.getElementById('winner').innerHTML = 'Ganador: O';
            document.getElementById('winner').style.display = 'block';
        }else{
            document.getElementById('winner').innerHTML = 'Empate';
            document.getElementById('winner').style.display = 'block';
        }
        (document.getElementById('0') as HTMLButtonElement).disabled = true;
        (document.getElementById('1') as HTMLButtonElement).disabled = true;
        (document.getElementById('2') as HTMLButtonElement).disabled = true;
        (document.getElementById('3') as HTMLButtonElement).disabled = true;
        (document.getElementById('4') as HTMLButtonElement).disabled = true;
        (document.getElementById('5') as HTMLButtonElement).disabled = true;
        (document.getElementById('6') as HTMLButtonElement).disabled = true;
        (document.getElementById('7') as HTMLButtonElement).disabled = true;
        (document.getElementById('8') as HTMLButtonElement).disabled = true;
    }

    reset() {
        (document.getElementById('0') as HTMLButtonElement).disabled = false;
        (document.getElementById('1') as HTMLButtonElement).disabled = false;
        (document.getElementById('2') as HTMLButtonElement).disabled = false;
        (document.getElementById('3') as HTMLButtonElement).disabled = false;
        (document.getElementById('4') as HTMLButtonElement).disabled = false;
        (document.getElementById('5') as HTMLButtonElement).disabled = false;
        (document.getElementById('6') as HTMLButtonElement).disabled = false;
        (document.getElementById('7') as HTMLButtonElement).disabled = false;
        (document.getElementById('8') as HTMLButtonElement).disabled = false;
        document.getElementById('0').innerHTML = '';
        document.getElementById('1').innerHTML = '';
        document.getElementById('2').innerHTML = '';
        document.getElementById('3').innerHTML = '';
        document.getElementById('4').innerHTML = '';
        document.getElementById('5').innerHTML = '';
        document.getElementById('6').innerHTML = '';
        document.getElementById('7').innerHTML = '';
        document.getElementById('8').innerHTML = '';
        document.getElementById('winner').style.display = 'none';
        this.turno = 0;
        this.str = " ";
        this.strv = " ";
        this.strd = " ";
        this.tablero = [];
    }
}
const tateti = new Tateti();
