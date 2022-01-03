var people =["Greg","Mary","Devon","James"];

//2.sử dụng vòng lặp để in ra tên của các đối tượng trong mảng
for(var i=0;i<people.length;i++){
    console.log("Tên đối tượng thứ:"+i+" là:"+people[i]);
}
//3.viết lệnh xóa "Greg" khỏi mảng
console.log(people.shift());
console.log(people);
//4.Viết lệnh xóa "James "khỏi mạng 
console.log(people.pop());
console.log(people);
//5.Viêt lệnh thêm "Matt" vảo phía trước của mảng.
console.log(people.unshift("Matt"));
console.log(people);
//6.Viết lệnh thêm tên của bạn vào cuối bảng 
console.log(people.push("Trường"));
console.log(people);
//7.sử dụng vòng lặp ,lặp qua mảng này và sau khi console.log="Mary"thì thoát khỏi vòng lặp
for (var i=0;i<people.length;i++){
    console.log(people[i]);
    if(people[i]=='Mary'){
        break;
    }
}
//8.Viết lệnh để tạo một bản sao của mảng sử dụng slice.Bản sao Không được bao gồm "Mary" hoặc "Matt"
var arrCopySlice=people.slice(2,4);
// arrCopySlice.splice(0,2);
console.log(arrCopySlice);

// var arrCopySlice1=(people.slice(0,4)).splice(0,2);
// console.log(arrCopySlice1)

// 9.Viết lệnh cung cấp indexOf nơi "Mary"được đặt
console.log("'Mary' đang ở vị trí thứ "+people.indexOf("Mary",0)+" trong mảng");
// 10.Xác định lại số người bằng giá trị mà khở tạo.Sử dụng lệnh splice,xóa "Devon" khỏi mảng và thêm "Elizabeth" và "Artie". Mảng của kết quả ["Greg", "Mary", "Elizabeth", "Artie", "James"].
console.log(people.splice(2,1,"Elizabeth","Artie"));
console.log(people);
// 11. Tạo một biến mới được gọi là withBob và đặt nó bằng với mảng người được nối với chuỗi "Bob"
var Bob=["chuỗi tự do"];
var withBob=people.concat(Bob);
console.log(withBob);