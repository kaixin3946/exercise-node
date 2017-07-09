var fn=()=>{
	console.log("这是es6文件a");
}
fn();

class Student{
	hello(){
		console.log("hello");
	}
}
var s=new Student;
s.hello();

class Eva extends Student{

	grade(){
		console.log("grade");
	}
}
var e=new Eva;
e.hello();
e.grade();






