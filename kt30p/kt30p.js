let students = [
    { id: 1, name: "Nguyên A", score: 8.5, gender: "Nam" },
    { id: 2, name: "Trân Thị B", score: 4.2, gender: "Nữ" },
    { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
    { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
    { id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam" }
];

function excellentStudents(studentsList) {
  return studentsList.filter(students => students.score >= 8.0);
}

function checkStudents(studentsList) {
  return studentsList.some(students => students.score < 4.0)
    ? "Có sinh viên yếu" : "Không có sinh viên yếu";
}
function studentLabels(studentsList) {
  return studentsList.map(students => 
    `Tên: ${students.name} - Điểm: ${students.score}`
  );
}
console.log("Danh sách sinh viên xuất sắc:", excellentStudents(students));
console.log(`Kiểm tra : ${checkStudents(students)}`);
console.log("Danh sách hiển thị:", studentLabels(students));
