function century(year) {
    // Finish this :)
    let amzius = year / 100;
    console.log(amzius);

// suapvalinti kad liktu be liekanos
    amzius = Math.floor(amzius);

    // jei lieka dalybos likekana tai +1 amzius
    if(year % 100>0) {
        amzius++;
    }
    return;
  }

  console.log(century(1705), '->', 18)
  console.log(century(1900), '->', 19)


  //Test.assertEquals(century(1705), 18, 'Testing for year 1705');
//Test.assertEquals(century(1900), 19, 'Testing for year 1900');
//Test.assertEquals(century(1601), 17, 'Testing for year 1601');
//Test.assertEquals(century(2000), 20, 'Testing for year 2000');
//Test.assertEquals(century(89), 1, 'Testing for year 89');