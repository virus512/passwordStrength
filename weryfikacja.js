
function jest_cyfra(x)
{
    var d = x.length;

    for (i = 0; i < d; i++)
    {

        if (x.charCodeAt(i) >= 48 && x.charCodeAt(i) <= 57)
        return true;
        
    /*   if (x.charAt(i) == "0" || x.charAt(i) == "1" || x.charAt(i) == "2" || x.charAt(i) == "3" || 
      x.charAt(i) == "4" || x.charAt(i) == "5" || x.charAt(i) == "6" || x.charAt(i) == "7" ||
         x.charAt(i) == "8" || x.charAt(i) == "9")
         return true;
    */  
    }
    return false;
}


function weryfikuj()
{
    var haslo = document.getElementById("haslo").value;

    var d = haslo.length;

    if (haslo == "")
    document.getElementById("wynik").innerHTML = '<span style="color:red">hasło jest puste, wspisz cokolwiek</span>';
    else if (d >= 7 && jest_cyfra(haslo) == true)
    {
        document.getElementById("wynik").innerHTML = '<span style="color:green">hasło jest dobre</span>';
    }
    else if (d >= 4 && d <= 6 && jest_cyfra(haslo) == true)
    {
        document.getElementById("wynik").innerHTML = '<span style="color:blue">hasło jest średnie</span>';
    }
    else 
        document.getElementById("wynik").innerHTML = '<span style="color:orange">hasło jest słabe</span>';
    //alert(haslo);
}