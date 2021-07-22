var images = ["https://i.postimg.cc/MKdhy06Z/family.j", "https://i.postimg.cc/wjMnFtMX/father.jpg" ,"https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Dad", "Mom"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

        
    
       