function calcAverageHumanAge(ages) {
    // Tính tuổi người của từng chó theo công thức
    const dogAgesInHumanYears = ages.map(age => (age <= 2) ? age * 2 : 16 + age * 4);

    // Lọc ra những chó trưởng thành (tuổi người >= 18)
    const adultDogAgesInHumanYears = dogAgesInHumanYears.filter(age => age >= 18);

    // Tính tuổi trung bình của các chó trưởng thành
    const averageHumanAge = adultDogAgesInHumanYears.reduce((acc, age) => acc + age, 0) / adultDogAgesInHumanYears.length;

    return averageHumanAge;
}

// Bộ dữ liệu thử nghiệm 1
const testAges1 = [5, 2, 4, 1, 15, 8, 3];
const averageAge1 = calcAverageHumanAge(testAges1);
console.log(`Test Data 1: Tuổi trung bình của chó trưởng thành là ${averageAge1} tuổi người`);

// Bộ dữ liệu thử nghiệm 2
const testAges2 = [16, 6, 10, 5, 6, 1, 4];
const averageAge2 = calcAverageHumanAge(testAges2);
console.log(`Test Data 2: Tuổi trung bình của chó trưởng thành là ${averageAge2} tuổi người`);
