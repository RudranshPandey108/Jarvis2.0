import { supabase } from "./supabase.js";

window.signup = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) alert(error.message);
  else alert("Account created ✅");
};

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) alert(error.message);
  else {
    alert("Login successful ✅");

    // 👇 bas login box hata de
    document.getElementById("auth-box").style.display = "none";
  }
};
