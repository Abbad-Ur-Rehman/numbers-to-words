//GET UNIQUE WORDS
let firstUniq = ["", 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
let secondUniq = ["", 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let thirdUniq = ["", 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];


//START LOGIC 
function one(number) {
    if (number <= 10) {
        return firstUniq[number];
    } else if (number < 20) {
        return secondUniq[number - 10];
    } else {
        let numDivBy10 = parseInt(number / 10);
        let numRemBy10 = number % 10;
        return thirdUniq[numDivBy10] + ' ' + firstUniq[numRemBy10];

    }
}

//FUNCTION FOR > 100
function two(number2) {
    if (number2 === 100) {
        return 'one hundred';
    }
    else if (number2 >= 101 && number2 <= 199 || number2 >= 201 && number2 <= 299
        || number2 >= 301 && number2 <= 399 || number2 >= 401 && number2 <= 499
        || number2 >= 501 && number2 <= 599 || number2 >= 601 && number2 <= 699
        || number2 >= 701 && number2 <= 799 || number2 >= 801 && number2 <= 899 || number2 >= 901 && number2  <= 999) {
        let num2DivBy100 = parseInt(number2 / 100);
        let num2RemBy100 = number2 % 100;
        return firstUniq[num2DivBy100] +' '+'hundred' + ' ' + one(num2RemBy100);
    }
    else if (number2 === 200 || number2 === 300 || number2 === 400 || number2 === 500 || number2 === 600
        || number2 === 700 || number2 === 800 || number2 === 900) {
            let num2DivBy100 = parseInt(number2 / 100);
            let num2RemBy100 = number2 % 100;
            return firstUniq[num2DivBy100] +' '+ 'hundred'
        }
    else {
        let num2DivBy100 = parseInt(number2 / 100);
        let num2RemBy100 = number2 % 100;

        // =-=-=-=-==--=-=THIS IS BIT DIFFiCult =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--
        // //removing te last digit 
        // let makeAboveVariableString = num2RemBy100.toString();
        // let sliceTheAboveVeriable = makeAboveVariableString.slice(0,-1);
        // //removing first digit
        // let subStringTheAboveOne = makeAboveVariableString.substring(1);

        // =-=-=-=-==--=-=-=-=--=-=-THIS IS THE EASY ONE =-=-=-=-=-=-=-=-=-=-=-=-

        return firstUniq[num2DivBy100] + ' ' + 'hundred and' + ' ' + one(num2RemBy100)

        // =-=-=-=-==--=-=THIS IS BIT DIFFCult ONE =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--

        // return firstUniq[num2DivBy100] +' '+ 'hundred and' +' '+ thirdUniq[sliceTheAboveVeriable] +' '+ firstUniq[subStringTheAboveOne]
    }

}
//FUNCTION FOR > 1000
function three(number3) {
    if (number3 === 1000) {
        return 'one thousend'
    }
    else if (number3 >= 1001 && number3 <= 1099 || number3 >= 2001 && number3 <= 2099
        || number3 >= 3001 && number3 <= 3099 || number3 >= 4001 && number3 <= 4099
        || number3 >= 5001 && number3 <= 5099 || number3 >= 6001 && number3 <= 6099
        || number3 >= 7001 && number3 <= 7099 || number3 >= 8001 && number3 <= 8099) {
        let num3DivBy1000 = parseInt(number3 / 1000);
        let num3RemBy1000 = number3 % 1000;
        return `${firstUniq[num3DivBy1000]} thousend ${one(num3RemBy1000)}`;
    }
    else if (number3 === 2000 || number3 === 3000 || number3 === 4000 || number3 === 5000 || number3 === 6000
        || number3 === 7000 || number3 === 8000 || number3 === 9000) {
        let num3DivBy1000 = parseInt(number3 / 1000);
        return firstUniq[num3DivBy1000] + ' ' + 'thousend';
    }
    else {
        let num3DivBy1000 = parseInt(number3 / 1000);
        let num3RemBy1000 = number3 % 1000;
        return firstUniq[num3DivBy1000] + ' ' + 'thousend' + ' ' + two(num3RemBy1000);
    }
}

//FUNCTION FOR 10,000
function four(number4) {
    if (number4 === 10000) {
        return 'ten thousend';
    }
    else if (number4 >= 10001 && number4 <= 10099 || number4 >= 20001 && number4 <= 20099
        || number4 >= 30001 && number4 <= 30099 || number4 >= 40001 && number4 <= 40099
        || number4 >= 50001 && number4 <= 50099 || number4 >= 60001 && number4 <= 60099
        || number4 >= 70001 && number4 <= 70099 || number4 >= 80001 && number4 <= 80099) {
        let num4DivBy1000 = parseInt(number4 / 1000);
        let num4RemBy1000 = number4 % 1000;
        return one(num4DivBy1000) + ' ' + 'thousend' + ' ' + one(num4RemBy1000);
    }
    else if (
        number4 === 20000 || number4 === 21000 || number4 === 22000 || number4 === 23000 || number4 === 24000 || number4 === 25000 ||
        number4 === 26000 || number4 === 27000 || number4 === 28000 || number4 === 29000 || number4 === 30000 || number4 === 31000 || number4 === 32000 ||
        number4 === 33000 || number4 === 34000 || number4 === 35000 || number4 === 36000 || number4 === 37000 || number4 === 38000 || number4 === 39000 || number4 === 40000 || number4 === 41000 || number4 === 42000 || number4 === 43000 || number4 === 44000 || number4 === 45000 || number4 === 46000 || number4 === 47000 || number4 === 48000 || number4 === 49000 || number4 === 50000 || number4 === 51000 || number4 === 52000 || number4 === 53000 || number4 === 54000 || number4 === 55000 || number4 === 56000 || number4 === 57000 || number4 === 58000 || number4 === 59000 || number4 === 60000 || number4 === 61000 || number4 === 62000 || number4 === 63000 || number4 === 64000 || number4 === 65000 || number4 === 66000 || number4 === 67000 || number4 === 68000 || number4 === 69000 || number4 === 70000 || number4 === 71000 || number4 === 72000 || number4 === 73000 || number4 === 74000 || number4 === 75000 || number4 === 76000 || number4 === 77000 || number4 === 78000 || number4 === 79000 || number4 === 80000 || number4 === 81000 || number4 === 82000 || number4 === 83000 || number4 === 84000 || number4 === 85000 || number4 === 86000 || number4 === 87000 || number4 === 88000 || number4 === 89000 || number4 === 90000) {
        let num4DivBy1000 = parseInt(number4 / 1000);
        return one(num4DivBy1000) + ' ' + 'thousend';
    }
    else {
        let num4DivBy1000 = parseInt(number4 / 1000);
        let num4RemBy1000 = number4 % 1000;
        return one(num4DivBy1000) + ' ' + 'thousend' + ' ' + two(num4RemBy1000);
    }
}

//FUNCTION FOR LAC
function five(number5) {
    if (number5 === 100000) {
        return 'one lac'
    } else if (number5 >= 100001 && number5 <= 100099 || number5 >= 200001 && number5 <= 200099
        || number5 >= 300001 && number5 <= 300099 || number5 >= 400001 && number5 <= 400099
        || number5 >= 500001 && number5 <= 500099 || number5 >= 600001 && number5 <= 600099
        || number5 >= 700001 && number5 <= 700099 || number5 >= 800001 && number5 <= 800099
    ) {
        let num5DivBy100000 = parseInt(number5 / 100000);
        let num5RemBy100000 = number5 % 100000;
        return one(num5DivBy100000) + ' ' + 'lac and' + ' ' + one(num5RemBy100000)
    } else if (number5 === 200000 || number5 === 210000 || number5 === 220000 ||
        number5 === 230000 || number5 === 240000 || number5 === 250000 || number5 === 260000 ||
        number5 === 270000 || number5 === 280000 || number5 === 290000 || number5 === 300000 ||
        number5 === 310000 || number5 === 320000 || number5 === 330000 || number5 === 340000 || number5 === 350000 || number5 === 360000 || number5 === 370000 || number5 === 380000 || number5 === 390000 || number5 === 400000 || number5 === 410000 || number5 === 420000 || number5 === 430000 || number5 === 440000 || number5 === 450000 || number5 === 460000 || number5 === 470000 || number5 === 480000 || number5 === 490000 || number5 === 500000 || number5 === 510000 || number5 === 520000 || number5 === 530000 || number5 === 540000 || number5 === 550000 || number5 === 560000 || number5 === 570000 || number5 === 580000 || number5 === 590000 || number5 === 600000 || number5 === 610000 || number5 === 620000 || number5 === 630000 || number5 === 640000 || number5 === 650000 || number5 === 660000 || number5 === 670000 || number5 === 680000 || number5 === 690000 || number5 === 700000 || number5 === 710000 || number5 === 720000 || number5 === 730000 || number5 === 740000 || number5 === 750000 || number5 === 760000 || number5 === 770000 || number5 === 780000 || number5 === 790000 || number5 === 800000 || number5 === 810000 || number5 === 820000 || number5 === 830000 || number5 === 840000 || number5 === 850000 || number5 === 860000 || number5 === 870000 || number5 === 880000 || number5 === 890000 || number5 === 900000) {
        let num5DivBy100000 = parseInt(number5 / 100000);
        return one(num5DivBy100000) + ' ' + 'lac';
    }
    else {
        let num5DivBy100000 = parseInt(number5 / 100000);
        let num5RemBy100000 = number5 % 100000;
        return one(num5DivBy100000) + ' ' + 'lac' + ' ' + four(num5RemBy100000);
    }

}
//FUNCTION FOR MILLION
function six(number6) {
    if (number6 === 1000000) {
        return 'one million'

    }
    else if (number6 >= 1000001 && number6 <= 1000099 || number6 >= 2000001 && number6 <= 2000099
        || number6 >= 3000001 && number6 <= 3000099 || number6 >= 4000001 && number6 <= 400099
        || number6 >= 5000001 && number6 <= 5000099 || number6 >= 6000001 && number6 <= 6000099
        || number6 >= 7000001 && number6 <= 7000099 || number6 >= 8000001 && number6 <= 900099
    ) {
        let num6DivBy1000000 = parseInt(number6 / 1000000)
        let num6RemBy1000000 = number6 % 1000000;
        return one(num6DivBy1000000) + ' ' + 'million' + ' ' + one(num6RemBy1000000);
    } else if (number6 === 2000000 || number6 === 2100000 || number6 === 2200000 || number6 === 2300000 || number6 === 2400000 || number6 === 2500000 || number6 === 2600000 || number6 === 2700000 || number6 === 2800000 || number6 === 2900000 || number6 === 3000000 || number6 === 3100000 || number6 === 3200000 || number6 === 3300000 || number6 === 3400000 || number6 === 3500000 || number6 === 3600000 || number6 === 3700000 || number6 === 3800000 || number6 === 3900000 || number6 === 4000000 || number6 === 4100000 || number6 === 4200000 || number6 === 4300000 || number6 === 4400000 || number6 === 4500000 || number6 === 4600000 || number6 === 4700000 || number6 === 4800000 || number6 === 4900000 || number6 === 5000000 || number6 === 5100000 || number6 === 5200000 || number6 === 5300000 || number6 === 5400000 || number6 === 5500000 || number6 === 5600000 || number6 === 5700000 || number6 === 5800000 || number6 === 5900000 || number6 === 6000000 || number6 === 6100000 || number6 === 6200000 || number6 === 6300000 || number6 === 6400000 || number6 === 6500000 || number6 === 6600000 || number6 === 6700000 || number6 === 6800000 || number6 === 6900000 || number6 === 7000000 || number6 === 7100000 || number6 === 7200000 || number6 === 7300000 || number6 === 7400000 || number6 === 7500000 || number6 === 7600000 || number6 === 7700000 || number6 === 7800000 || number6 === 7900000 || number6 === 8000000 || number6 === 8100000 || number6 === 8200000 || number6 === 8300000 || number6 === 8400000 || number6 === 8500000 || number6 === 8600000 || number6 === 8700000 || number6 === 8800000 || number6 === 8900000 || number6 === 9000000) {
        let num5DivBy100000 = parseInt(number6 / 1000000);
        return one(num5DivBy100000) + ' ' + 'million';
    }
    else {
        let num6DivBy1000000 = parseInt(number6 / 1000000);
        let num6RemBy1000000 = number6 % 1000000;
        return one(num6DivBy1000000) + ' ' + 'million' + ' ' + five(num6RemBy1000000);
    }
}
//FUNCTION 10 MILLION
function seven(number7) {
    if (number7 === 10000000 || number7 === 20000000 || number7 === 30000000 || number7 === 40000000
        || number7 === 50000000 || number7 === 60000000 || number7 === 70000000 || number7 === 80000000
        || number7 === 90000000) {
        let num6DivBy1000000 = parseInt(number7 / 1000000);
        return one(num6DivBy1000000) + ' ' + 'million';

    }
    else if (number7 >= 10000001 && number7 <= 10000099 || number7 >= 20000001 && number7 <= 20000099
        || number7 >= 30000001 && number7 <= 30000099 || number7 >= 40000001 && number7 <= 40000099
        || number7 >= 50000001 && number7 <= 50000099 || number7 >= 60000001 && number7 <= 60000099
        || number7 >= 70000001 && number7 <= 70000099 || number7 >= 80000001 && number7 <= 80000099
        || number7 >= 90000001 && number7 <= 90000099
    ) {
        let num6DivBy1000000 = parseInt(number7 / 1000000)
        let num6RemBy1000000 = number7 % 1000000;
        return one(num6DivBy1000000) + ' ' + 'million' + ' ' + one(num6RemBy1000000);
    }
    else {
        let num6DivBy1000000 = parseInt(number7 / 1000000)
        let num6RemBy1000000 = number7 % 1000000;
        return one(num6DivBy1000000) + ' ' + 'million' + ' ' + five(num6RemBy1000000);
    }
}
//FUNCTION FOR HUNRED MILLION
function eight(number8) {
    if (number8 === 100000000 || number8 === 200000000 || number8 === 300000000 || number8 === 400000000
        || number8 === 500000000 || number8 === 600000000 || number8 === 700000000 || number8 === 800000000
        || number8 === 900000000) {
        let num8DivBy1000000 = parseInt(number8 / 1000000);
        return two(num8DivBy1000000) + ' ' + 'million';
    }
    else if (number8 >= 100000001 && number8 <= 100000099 || number8 >= 200000001 && number8 <= 200000099
        || number8 >= 300000001 && number8 <= 300000099 || number8 >= 400000001 && number8 <= 400000099
        || number8 >= 500000001 && number8 <= 500000099 || number8 >= 600000001 && number8 <= 600000099
        || number8 >= 700000001 && number8 <= 700000099 || number8 >= 800000001 && number8 <= 800000099
        || number8 >= 900000001 && number8 <= 900000099
    ) {
        let num8DivBy1000000 = parseInt(number8 / 1000000);
        let numRemBy10000000 = number8 % 1000000;
        return two(num8DivBy1000000) + ' ' + 'million' + ' ' + one(numRemBy10000000);
    }
    else {
        let num8DivBy1000000 = parseInt(number8 / 1000000);
        let numRemBy10000000 = number8 % 1000000;
        return two(num8DivBy1000000) + ' ' + six(numRemBy10000000);

    }
}
// /FUNCTION FOR BILLION
function nine(number9) {
    if (number9 === 1000000000) {
        return "one billion";
    } else if (
        (number9 >= 1000000001 && number9 <= 1000000099) ||
        (number9 >= 2000000001 && number9 <= 2000000099) ||
        (number9 >= 3000000001 && number9 <= 3000000099) ||
        (number9 >= 4000000001 && number9 <= 4000000099) ||
        (number9 >= 5000000001 && number9 <= 5000000099) ||
        (number9 >= 6000000001 && number9 <= 6000000099) ||
        (number9 >= 7000000001 && number9 <= 7000000099) ||
        (number9 >= 8000000001 && number9 <= 8000000099) ||
        (number9 >= 9000000001 && number9 <= 9000000099)
    ) {
        let num9DivBy1000000000 = parseInt(number9 / 1000000000);
        let numRemBy1000000000 = number9 % 1000000000;
        return one(num9DivBy1000000000) + " " + "billion" + " " + one(numRemBy1000000000);
    } else {
        let num9DivBy1000000000 = parseInt(number9 / 1000000000);
        let numRemBy1000000000 = number9 % 1000000000;
        return one(num9DivBy1000000000) + ' ' + "billion " + eight(numRemBy1000000000);
    }
}

// FUNCTION FOR TEN BILLION
function tenBillion(number10B) {
    if (number10B === 10000000000) {
        return "ten billion";
    } else if (
        (number10B >= 10000000001 && number10B <= 10000000099) ||
        (number10B >= 20000000001 && number10B <= 20000000099) ||
        (number10B >= 30000000001 && number10B <= 30000000099) ||
        (number10B >= 40000000001 && number10B <= 40000000099) ||
        (number10B >= 50000000001 && number10B <= 50000000099) ||
        (number10B >= 60000000001 && number10B <= 60000000099) ||
        (number10B >= 70000000001 && number10B <= 70000000099) ||
        (number10B >= 80000000001 && number10B <= 80000000099) ||
        (number10B >= 90000000001 && number10B <= 90000000099)
    ) {
        let num10BDivBy1000000000 = parseInt(number10B / 1000000000);
        let numRemBy1000000000 = number10B % 1000000000;
        return one(num10BDivBy1000000000) + " " + "billion" + " " + one(numRemBy1000000000);
    } else {
        let num10BDivBy1000000000 = parseInt(number10B / 1000000000);
        let numRemBy1000000000 = number10B % 1000000000;
        return one(num10BDivBy1000000000) + ' ' + "billion " + eight(numRemBy1000000000);
    }
}

// FUNCTION FOR 100 BILLION
function hundredBillion(number100B) {
    if (number100B === 100000000000) {
        return "hundred billion";
    } else if (
        (number100B >= 100000000001 && number100B <= 100000000099) ||
        (number100B >= 200000000001 && number100B <= 200000000099) ||
        (number100B >= 300000000001 && number100B <= 300000000099) ||
        (number100B >= 400000000001 && number100B <= 400000000099) ||
        (number100B >= 500000000001 && number100B <= 500000000099) ||
        (number100B >= 600000000001 && number100B <= 600000000099) ||
        (number100B >= 700000000001 && number100B <= 700000000099) ||
        (number100B >= 800000000001 && number100B <= 800000000099) ||
        (number100B >= 900000000001 && number100B <= 900000000099)
    ) {
        let num100BDivBy1000000000 = parseInt(number100B / 1000000000);
        let numRemBy1000000000 = number100B % 1000000000;
        return two(num100BDivBy1000000000) + " " + "billion" + " " + one(numRemBy1000000000);
    } else {
        let num100BDivBy1000000000 = parseInt(number100B / 1000000000);
        let numRemBy1000000000 = number100B % 1000000000;
        return two(num100BDivBy1000000000) + ' ' + "billion " + eight(numRemBy1000000000);
    }
}

//FUNCTION FOR 1 TRILLION
function oneTrillion(number1T) {
    if (number1T === 1000000000000) {
        return "one trillion";
    } else if (
        (number1T >= 1000000000001 && number1T <= 1000000000099) ||
        (number1T >= 2000000000001 && number1T <= 2000000000099) ||
        (number1T >= 3000000000001 && number1T <= 3000000000099) ||
        (number1T >= 4000000000001 && number1T <= 4000000000099) ||
        (number1T >= 5000000000001 && number1T <= 5000000000099) ||
        (number1T >= 6000000000001 && number1T <= 6000000000099) ||
        (number1T >= 7000000000001 && number1T <= 7000000000099) ||
        (number1T >= 8000000000001 && number1T <= 8000000000099) ||
        (number1T >= 9000000000001 && number1T <= 9000000000099)
    ) {
        let num1TDivBy1000000000000 = parseInt(number1T / 100000000000);
        let numRemBy1000000000000 = number1T % 100000000000;
        return one(num1TDivBy1000000000000) + " " + "trillion" + " " + one(numRemBy1000000000000);
    } else {
        let num1TDivBy1000000000000 = parseInt(number1T / 100000000000);
        let numRemBy1000000000000 = number1T % 1000000000000;
        return one(num1TDivBy1000000000000) + ' ' + "trillion " + hundredBillion(numRemBy1000000000000);
    }
}

let btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    let input2 = document.getElementById('quantity')
    const input = input2.value
    if (input >= 10 && input < 100) {
        let join = one(input);
        alert(join)
    } else if (input >= 100 && input < 1000) {
        let join = two(input);
        alert(join)
    } else if (input >= 1000 && input < 10000) {
        let join = three(input);
        alert(join)
    } else if (input >= 10000 && input < 100000) {
        let join = four(input);
        alert(join)
    } else if (input >= 100000 && input < 1000000) {
        let join = five(input);
        alert(join)
    } else if (input >= 1000000 && input < 10000000) {
        let join = six(input);
        alert(join)
    } else if (input >= 10000000 && input < 100000000) {
        let join = seven(input);
        alert(join)
    } else if (input >= 100000000 && input < 1000000000) {
        let join = eight(input);
        alert(join)
    } else if (input >= 1000000000 && input < 10000000000) {
        let join = nine(input);
        alert(join)
    } else if (input >= 10000000000 && input < 100000000000) {
        let join = tenBillion(input);
        alert(join)
    } else if (input >= 100000000000 && input < 1000000000000) {
        let join = hundredBillion(input);
        alert(join)
    }
    else if (input >= 1000000000000) {
        let join = oneTrillion(input);
        alert(join)
    }

})






let input2 = document.getElementById('quantity')

input2.addEventListener('input', function () {
    if (input2.value.length > 13) {
        input2.value = input2.value.slice(0, 13);
    }
});



