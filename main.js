function load() {
    let column_1 =[3,5,2,7,9,5,10,1,2,6,8,7,6,3,2,10,4,7,9,2,5,6,1,8,9,10,6,7,3,4]
    let column_2 =[1,3,2,6,8,7,9,5,2,10,3,4,7,9,5,6,1,8,7,2,8,10,4,3,1,6,7,5,9,2]
    let column_3 =Array.from({length: 30}, () =>Math.floor(Math.random()*(100-40+1))+40)
    let column_4 =[42,67,74,53,45,82,54,91,80,47,93,66,78,49,88,55,96,60,48,70,85,57,83,98,62,98,50,89,69,100]
    sum1=0;
    for (x =0;x<column_1.length;x++){
        sum1=sum1+column_1[x];
    }
    sum2=0;
    for (x =0;x<column_2.length;x++){
        sum2=sum2+column_2[x];
    }
    sum3=0;
    for (x =0;x<column_3.length;x++){
        sum3=sum3+column_3[x];
    }
    sum4=0;
    for (x =0;x<column_4.length;x++){
        sum4=sum4+column_4[x];
    }
    let sums = [sum1,sum2,sum3,sum4];
    let total_score =sums[0]+sums[1]+sums[2]+sums[3];
    const results ={
        col1:column_1,
        col2:column_2,
        col3:column_3,
        col4:column_4,
        sums:sums,
        total_score:total_score
    }
    console.log (results)
}