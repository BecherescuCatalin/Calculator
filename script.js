let stare = 0;
let rez = 0;
let opd1 = "";
let op = "";
let opd2 = "";
let stare_p = 0;
let opd1_p = "";
let opd2_p = "";
function Click(but) {
  if (stare == 0) {
    if (
      but == "0" ||
      but == "1" ||
      but == "2" ||
      but == "3" ||
      but == "4" ||
      but == "5" ||
      but == "6" ||
      but == "7" ||
      but == "8" ||
      but == "9"
    ) {
      opd1 = opd1 + but;
      document.getElementById("display").value = opd1;
    } else if (but == "$") {
      opd1 = -opd1;
      document.getElementById("display").value = opd1;
    } else if (but == "C" || but == "A") {
      opd1 = "0";
      document.getElementById("display").value = opd1;
      opd1 = "";
    } else if (
      but == "+" ||
      but == "-" ||
      but == "*" ||
      but == "/" ||
      but == "%"
    ) {
      stare = 1;
      op = but;
      opd2 = "";
    }
  } else if (stare == 1) {
    if (
      but == "0" ||
      but == "1" ||
      but == "2" ||
      but == "3" ||
      but == "4" ||
      but == "5" ||
      but == "6" ||
      but == "7" ||
      but == "8" ||
      but == "9"
    ) {
      opd2 = opd2 + but;
      document.getElementById("display").value = opd2;
    } else if (but == "$") {
      opd2 = -opd2;
      document.getElementById("display").value = opd2;
    } else if (but == "C") {
      opd2 = "0";
      document.getElementById("display").value = opd2;
      opd2 = "";
    } else if (but == "A") {
      stare = 0;
      opd1 = "0";
      document.getElementById("display").value = opd1;
      opd1 = "";
    }
    if (but == "(") {
      stare_p = 0;
      opd2 = "(";
      document.getElementById("display").value = opd2;
      opd2 = "";
      opd1_p = "";
    }
    if (stare_p == 0) {
      if (
        but == "0" ||
        but == "1" ||
        but == "2" ||
        but == "3" ||
        but == "4" ||
        but == "5" ||
        but == "6" ||
        but == "7" ||
        but == "8" ||
        but == "9"
      ) {
        opd1_p = opd1_p + but;
        document.getElementById("display").value = opd1_p;
      } else if (
        but == "+" ||
        but == "-" ||
        but == "*" ||
        but == "/" ||
        but == "%"
      ) {
        stare_p = 1;
        op_p = but;
        opd2_p = "";
      }
    } else if (stare_p == 1) {
      if (
        but == "0" ||
        but == "1" ||
        but == "2" ||
        but == "3" ||
        but == "4" ||
        but == "5" ||
        but == "6" ||
        but == "7" ||
        but == "8" ||
        but == "9"
      ) {
        opd2_p = opd2_p + but;
        document.getElementById("display").value = opd2_p;
      } else if (but == ")") {
        stare_p = 2;
        let rez_p = 0;
        let o1_p = parseInt(opd1_p, 10);
        let o2_p = parseInt(opd2_p, 10);
        if (op_p == "+") rez_p = o1_p + o2_p;
        else if (op_p == "-") rez_p = o1_p - o2_p;
        else if (op_p == "*") rez_p = o1_p * o2_p;
        else if (op_p == "/") {
          rez_p = o1_p / o2_p;
          rez_p = rez_p - (rez_p % 1);
        } else if (op_p == "%") rez_p = (o1_p / o2_p) * 100;
        opd1_p = "" + rez_p;
        opd2 = opd1_p;
        document.getElementById("display").value = opd2;
      }
    }
    //   } else if (
    //     but == "+" ||
    //     but == "-" ||
    //     but == "*" ||
    //     but == "/" ||
    //     but == "%"
    //   ) {
    //     stare = 2;
    //     let rez = 0;
    //     let o1 = parseInt(opd1, 10);
    //     let o2 = parseInt(opd2, 10);
    //     if (op == "+") rez = o1 + o2;
    //     else if (op == "-") rez = o1 - o2;
    //     else if (op == "*") rez = o1 * o2;
    //     else if (op == "/") {
    //       rez = o1 / o2;
    //       rez = rez - (rez % 1);
    //     } else if (op == "%") rez = (o1 / o2) * 100;
    //     opd1 = "" + rez;
    //     document.getElementById("display").value = opd1;
    //     stare = 1;
    //     op = but;
    //     opd2 = "";
    //   }
    else if (but == "=") {
      stare = 2;
      let rez = 0;
      let o1 = parseInt(opd1, 10);
      let o2 = parseInt(opd2, 10);
      if (op == "+") rez = o1 + o2;
      else if (op == "-") rez = o1 - o2;
      else if (op == "*") rez = o1 * o2;
      else if (op == "/") {
        rez = o1 / o2;
        rez = rez - (rez % 1);
      } else if (op == "%") rez = (o1 / o2) * 100;
      opd1 = "" + rez;
      document.getElementById("display").value = opd1;
    }
  } else if (stare == 2) {
    if (
      but == "0" ||
      but == "1" ||
      but == "2" ||
      but == "3" ||
      but == "4" ||
      but == "5" ||
      but == "6" ||
      but == "7" ||
      but == "8" ||
      but == "9"
    ) {
      stare = 0;
      opd1 = but;
      document.getElementById("display").value = opd1;
    } else if (but == "C" || but == "A") {
      opd1 = "0";
      document.getElementById("display").value = opd1;
      opd1 = "";
    } else if (
      but == "+" ||
      but == "-" ||
      but == "*" ||
      but == "/" ||
      but == "%"
    ) {
      stare = 1;
      op = but;
      opd2 = "";
    }
  }
}
/*(3)  Cel mai simplu e sa permiti sa parantezele sa se poata deschide doar acolo unde se asteapta operandul al doilea -- si sa intre astfel intr-un calcul "paralel" in care asteapta un nou operand 1, apoi operator, apoi operand 2 (apoi, eventual, alt operator si alt operand 2, s.a.m.d. pana la inchiderea parantezei, care va avea ca un efect similar cu apasarea butonului "=", doar ca rezultatul acestui calcul "paralel" il va pune in opderandul 2 si va reveni la calculul initial. Deci mai trebuie introduse variabile pentru calculul asta "paralel" (gen op1_p, op_p, opd2_p) si trebuie facute niste adaugiri pe la graful de functionare (adica desenul acela cu stari si tranzitii)*/
/* if (but=="("){
      stare_p=0;
      // opd2="(";
      // document.getElementById("display").value = opd2;
      // opd2="";
      opd1_p="";
    } if (stare_p==0){
      if (
      but == "0" ||
      but == "1" ||
      but == "2" ||
      but == "3" ||
      but == "4" ||
      but == "5" ||
      but == "6" ||
      but == "7" ||
      but == "8" ||
      but == "9"
    ) {
      opd1_p = opd1_p + but;
      document.getElementById("display").value = opd1_p;
    }else if (
      but == "+" ||
      but == "-" ||
      but == "*" ||
      but == "/" ||
      but == "%"
    ){
      stare_p=1;
      op_p=but;
      opd2_p="";
    }
    }else if (stare_p==1){
      if (
      but == "0" ||
      but == "1" ||
      but == "2" ||
      but == "3" ||
      but == "4" ||
      but == "5" ||
      but == "6" ||
      but == "7" ||
      but == "8" ||
      but == "9"
    ) {
      opd2_p = opd2_p + but;
      document.getElementById("display").value = opd2_p;
    }else if (but==")"){
      stare_p = 2;
      let rez_p = 0;
      let o1_p = parseInt(opd1_p, 10);
      let o2_p = parseInt(opd2_p, 10);
      if (op_p == "+") rez_p = o1_p + o2_p;
      else if (op_p == "-") rez_p = o1_p - o2_p;
      else if (op_p == "*") rez_p = o1_p * o2_p;
      else if (op_p == "/") {
        rez_p = o1_p / o2_p;
        rez_p = rez_p - (rez_p % 1);
      } else if (op_p == "%") rez_p = (o1_p / o2_p) * 100;
      opd1_p = "" + rez_p;
      opd2=opd1_p;
      document.getElementById("display").value = opd2;
      }
    }*/
