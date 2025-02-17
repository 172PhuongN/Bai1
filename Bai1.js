// NguyenDuyPhuong2180606586

class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }

    // Phương thức tính điểm trung bình
    getAverage() {
        return (this.score1 + this.score2) / 2;
    }

    // Phương thức xếp loại
    getRank() {
        const avg = this.getAverage();
        if (avg >= 8) return "Giỏi";
        if (avg >= 6.5) return "Khá";
        if (avg >= 5) return "Trung Bình";
        return "Yếu";
    }
}

// Tạo mảng 4 sinh viên
const students = [
    new Student("Nguyễn Văn A", 20, 9, 9),
    new Student("Nguyễn Văn B", 21, 8, 8),
    new Student("Nguyễn Văn C", 22, 7, 7),
    new Student("Nguyễn Văn D", 23, 1, 6)
];

// Sử dụng map để in ra xếp loại của từng sinh viên
const rankings = students.map(student => `${student.name}: ${student.getRank()}`);
console.log("Xếp loại của từng sinh viên:", rankings);

// Sử dụng reduce để tính TBC điểm của SV trong lớp
const avgClass = students.reduce((sum, student) => sum + student.getAverage(), 0) / students.length;
console.log("Điểm trung bình của cả lớp:", avgClass.toFixed(2));

// Sử dụng some để kiểm tra có sinh viên nào dưới 18 không?
const hasUnder18 = students.some(student => student.age < 18);
console.log("Có sinh viên nào dưới 18 tuổi không?", hasUnder18);

// Sử dụng every để kiểm tra cả lớp có đầy đủ tên không?
const allHaveNames = students.every(student => student.name.trim().length > 0);
console.log("Cả lớp có đầy đủ tên không?", allHaveNames);


