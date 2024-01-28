// Test data
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1. Tính khẩu phần ăn khuyến nghị và thêm vào object của mỗi chó
dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// 2. Tìm chú chó của Sarah và kiểm tra khẩu phần ăn
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Chó của ${sarahDog.owners.join(' và ')} ăn quá ${sarahDog.curFood > sarahDog.recommendedFood ? 'nhiều' : 'ít'}`);

// 3. Tạo mảng chủ của chó ăn quá nhiều và chó ăn quá ít
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);

// 4. In ra thông báo về chủ của chó ăn quá nhiều và chó ăn quá ít
console.log(`${ownersEatTooMuch.join(' và ')} nuôi chó ăn quá nhiều!`);
console.log(`${ownersEatTooLittle.join(' và ')} nuôi chó ăn quá ít!`);

// 5. Kiểm tra xem có chó nào có khẩu phần ăn chính xác
const isExactFood = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(`Có chó nào ăn chính xác khẩu phần không: ${isExactFood}`);

// 6. Kiểm tra xem có chó nào có khẩu phần ăn ở mức hợp lý
const isReasonableFood = dogs.some(dog => dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10);
console.log(`Có chó nào ăn ở mức hợp lý không: ${isReasonableFood}`);

// 7. In ra tất cả chó có khẩu phần ăn hợp lý
const dogsWithReasonableFood = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10);
console.log(`Chó ăn ở mức hợp lý: ${JSON.stringify(dogsWithReasonableFood)}`);

// 8. Tạo mảng chó mới và sắp xếp theo khẩu phần ăn đề nghị
const sortedDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(`Chó được sắp xếp theo khẩu phần ăn đề nghị: ${JSON.stringify(sortedDogs)}`);
