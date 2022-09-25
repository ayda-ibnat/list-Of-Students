
list_of_students = [];

function submit()
{

    var name_1 = document.getElementById("name1").value;
    var name_2 = document.getElementById("name2").value;
    var name_3 = document.getElementById("name3").value;
    var name_4 = document.getElementById("name4").value
 
    list_of_students.push(name_1);
    list_of_students.push(name_2);
    list_of_students.push(name_3);
    list_of_students.push(name_4);

    document.getElementById("display_names").innerHTML = list_of_students;
    document.getElementById("btnsubmit").style.display = "none";
    document.getElementById("btnsort").style.display = "inline-block";
}

function sorting()
{
    list_of_students.sort()
    document.getElementById("display_names").innerHTML = list_of_students;
}