permutations('abbb');

function permutations(str) {
    let letters = str.split('');
    letters = letters.sort();
    let lettersBack = [];
    let variant = [];
    let variants = [];
    let otherVariant = [];
    let result = [];
    for (let i = letters.length - 1; i >= 0; i--) {
        lettersBack.push(i);
    }
    let lettersBackString = lettersBack.join('');
    for (let i = 0; i < letters.length; i++) {
        otherVariant.push(i);
    }
    for (let i = 0; i < letters.length; i++) {
        variant.push(i);
    }
    let i = letters.length - 1;
    let j = true;
    let k = 0;
    while (j) {
        let variantString = variant.join('');
        variants.push(variantString);
        if (variantString == lettersBackString) {
            j = false;
        }
        if (variant[i] > variant[i - 1] && i == letters.length - 1) {
            let s = variant[i];
            variant[i] = variant[i - 1];
            variant[i - 1] = s;
            i = letters.length - 1;
        }
        else if(variant[i] > variant[i - 1] && i < letters.length -1){
            let i12 = 0;
            k = MoreThanS(i,variant);
            let s = variant[k];
            let s1 = variant[i - 1];
            for (let kk = 0; kk < letters.length; kk++) {
                if(s1 == variant[kk]){
                    i12 = kk;
                }
            }
            for (let kk = i12; kk < letters.length; kk++) {
                variant.pop();
            }
            for (let kk = 0; kk < letters.length; kk++) {
                let bb = false;
                for(let kk1 = 0; kk1 < variant.length; kk1++){
                    if(kk == variant[kk1]){
                        bb = true;
                    }
                }
                if(i12 == variant.length){
                    variant.push(s);
                }
                if(!bb){
                    variant.push(kk);
                }
            }
            i = letters.length - 1;
        }
        else{
            i--;
        }
    }
    for(let i = 0; i < variants.length; i++){
        let b = false;
        let s = '';
        for(let j = 0; j < letters.length; j++){
            let aa = variants[i][j]
            s += str[aa];
        }
        for(let k = 0; k <= result.length;k++){
            if(s == result[k]){
                b = true;
            }
        }
        if(b == false){
            result.push(s);
        }
    }
    result = result.sort();
    console.log(result);
    return result;
}

function MoreThanS(ii, mas) {
    let s1 = mas[ii - 1];
    let s2 = mas[ii];
    let i2 = 0;
    for (let i = ii; i < mas.length; i++) {
        if (mas[i] >= s1 && mas[i] <= s2) {
            s2 = mas[i];
            i2 = i;
        }
    }
    return i2;
}