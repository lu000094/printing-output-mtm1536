function showOutput() {
  // ----- Task 1 -----
  let a = 3;
  let b = 5;
  let c;

  const task1 = `a + b: ${a + b}
a - b: ${a - b}
a * b: ${a * b}
a / b: ${a / b}
a % b: ${a % b}
a += b: ${(a += b)}
a -= b: ${(a -= b)}
a *= b: ${(a *= b)}
a /= b: ${(a /= b)}
a %= b: ${(a %= b)}
a == b: ${a == b}
a != b: ${a != b}
a > b: ${a > b}
a < b: ${a < b}
!a && !c: ${!a && !c}
!a || !c: ${!a || !c}`;

  // ----- Task 2 -----
  const first_name = "Wenjuan";
  const last_name = "Lu";
  const email = "wenjuan.lu@mail.com";
  const output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;

  // Display on the page
  const pre = document.getElementById("result");
  pre.textContent = task1 + "\n\n" + output;
  pre.classList.add("show");

  // Log to console (required by your assignment)
  console.log(task1);
  console.log(output);
}
