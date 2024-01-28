function checkDogs(dogsJulia, dogsKate) {
    // Tạo bản sao nông của mảng Julia để không ảnh hưởng đến tham số đầu vào
    const juliaCopy = dogsJulia.slice();

    // Xóa tuổi mèo khỏi mảng đã sao chép
    juliaCopy.shift(); // Xóa tuổi mèo của chủ thứ nhất
    juliaCopy.pop();   // Xóa tuổi mèo của chủ cuối cùng

    // Gộp mảng của Julia đã chỉnh sửa và mảng của Kate
    const allDogs = juliaCopy.concat(dogsKate);

    // Kiểm tra từng con chó và in ra kết quả
    allDogs.forEach((age, index) => {
        const dogType = age >= 3 ? 'trưởng thành' : 'chó con';
        console.log(`Chó ${index + 1} là ${dogType}`);
    });

    // Trả về mảng mới chứa cả dữ liệu của Julia (đã sửa) và Kate
    return allDogs;
}

// Example usage:
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const combinedDogs = checkDogs(dogsJulia, dogsKate);
console.log(combinedDogs);
// Hàm kiểm tra tuổi của chó và đăng nhập vào bảng điều khiển
function checkDogs(dogsJulia, dogsKate) {
    const juliaCopy = dogsJulia.slice();
    juliaCopy.shift();
    juliaCopy.pop();

    const allDogs = juliaCopy.concat(dogsKate);

    allDogs.forEach((age, index) => {
        const dogType = age >= 3 ? 'người lớn' : 'chó con';
        console.log(`Chó số ${index + 1} là ${dogType} và ${age} tuổi`);
    });
}



// Bộ dữ liệu thử nghiệm 2
console.log("\nTEST DATA 2:");
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
checkDogs(dogsJulia2, dogsKate2);
