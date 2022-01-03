// var SinhVien =[50, 12, 60, 22, 28, 30, 55];
// var dem=0;
// for (var i=0;i<=6;i++){
//     if(SinhVien[i]>25){
//     dem++;
//     }
  
// }
// console.log(dem);

var noidung = 'CE Group xin chào các bạn học viên từ CE 01 đến CE 11';
var array=noidung.split(' ');
var dem=0;
// 3.1. Kiểm tra xem trong chuỗi có bao nhiêu ký tự CE
for(var i=0;i<array.length;i++){
    if(array[i]=='CE'){
        dem++;
    }  
}
console.log(dem);
// 3.2. Xác định vị trí của chữ CE thứ 2 trong chuỗi ban đầu
console.log(noidung.indexOf('CE'));
// 3.3. Thay thế các chữ CE trong chuỗi thành Mr Đức Anh 
console.log(noidung.replace(/CE/g,"Mr Duc Anh"));


// Hiển thị kiểu dữ liệu tương ứng với chuỗi cho trước

// var Chuoi='50 DucAnh 100.5 Long Duc';
// var array1=Chuoi.split(' ');
// for (var i=0;i<=Chuoi.length;i++){
//     if(isNaN(array1[i])==false){
//         console.log(array1[i]+' '+"number");
//     }
//     else{
//         console.log(array1[i]+' '+typeof(array1[i]));
//     }

// }